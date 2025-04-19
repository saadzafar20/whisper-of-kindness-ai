
const VAPI_KEY = '81993317-fa0e-49df-8695-d36e0ed5246c';
const VAPI_BASE_URL = 'https://api.vapi.ai/v1/calls';

interface VapiResponse {
  audio_url?: string;
  call_id?: string;
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
        assistant_id: 'fd5be6f1-0b74-4c73-8ec0-301a0e1656d4',
        from: '+10000000000',  // This is a placeholder number
        to: '+10000000000',    // This is a placeholder number
        first_message: text,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('VAPI Error Response:', errorData);
      throw new Error(`VAPI API Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    const data: VapiResponse = await response.json();
    
    if (!data.call_id) {
      throw new Error('No call ID received from VAPI');
    }

    // For the demo, we'll return the call ID as we don't have a direct audio URL
    // In a real implementation, you'd listen for call events via webhook
    return `Call initiated with ID: ${data.call_id}`;
  } catch (error) {
    console.error('Error speaking with VAPI:', error);
    throw error;
  }
};
