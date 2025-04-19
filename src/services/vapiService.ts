
const VAPI_KEY = '81993317-fa0e-49df-8695-d36e0ed5246c';
const VAPI_BASE_URL = 'https://api.vapi.ai/v1/speak';

interface VapiResponse {
  audio_url?: string;
  error?: string;
}

export const speakWithVapi = async (text: string): Promise<string> => {
  try {
    const response = await fetch(VAPI_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VAPI_KEY}`,
      },
      body: JSON.stringify({
        text,
        voice_id: 'fd5be6f1-0b74-4c73-8ec0-301a0e1656d4',
      }),
    });

    const data: VapiResponse = await response.json();
    
    if (!data.audio_url) {
      throw new Error('No audio URL received from VAPI');
    }

    return data.audio_url;
  } catch (error) {
    console.error('Error speaking with VAPI:', error);
    throw error;
  }
};
