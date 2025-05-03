
import Vapi from "@vapi-ai/web";

const VAPI_KEY = '81993317-fa0e-49df-8695-d36e0ed5246c';
const ASSISTANT_ID = 'fd5be6f1-0b74-4c73-8ec0-301a0e1656d4';

class VapiService {
  private static instance: VapiService;
  private vapi: any;
  private activeCall: any;
  private permissionsGranted: boolean = false;

  private constructor() {
    this.vapi = new Vapi(VAPI_KEY);
    this.setupEventListeners();
  }

  public static getInstance(): VapiService {
    if (!VapiService.instance) {
      VapiService.instance = new VapiService();
    }
    return VapiService.instance;
  }

  private setupEventListeners() {
    this.vapi.on("call-start", () => {
      console.log("Call has started");
    });

    this.vapi.on("call-end", () => {
      console.log("Call has ended");
      this.activeCall = null;
    });

    this.vapi.on("error", (error: any) => {
      console.error("Vapi error:", error);
    });
  }

  public async requestMicrophonePermission(): Promise<boolean> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop tracks immediately after getting permissions
      stream.getTracks().forEach(track => track.stop());
      this.permissionsGranted = true;
      return true;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      this.permissionsGranted = false;
      return false;
    }
  }

  public async startCall(initialMessage: string): Promise<void> {
    try {
      // Request microphone permissions before starting the call
      if (!this.permissionsGranted) {
        const permitted = await this.requestMicrophonePermission();
        if (!permitted) {
          throw new Error('Microphone permission is required to start a voice session');
        }
      }

      if (this.activeCall) {
        await this.stopCall();
      }

      this.activeCall = await this.vapi.start(ASSISTANT_ID);
      
      await this.vapi.send({
        type: "add-message",
        message: {
          role: "user",
          content: initialMessage,
        },
      });
    } catch (error) {
      console.error('Error starting Vapi call:', error);
      throw error;
    }
  }

  public async stopCall(): Promise<void> {
    if (this.activeCall) {
      await this.vapi.stop();
      this.activeCall = null;
    }
  }
}

export const vapiService = VapiService.getInstance();
