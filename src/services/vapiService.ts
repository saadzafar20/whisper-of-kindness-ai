
const VAPI_KEY = 'YOUR_VAPI_KEY_HERE'; // Replace this with your actual VAPI key
const VAPI_BASE_URL = 'https://api.vapi.ai/speak';

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
        voice_id: 'YOUR_ASSISTANT_VOICE_ID', // Replace with your VAPI assistant voice ID
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
