export interface ContactEmailPayload {
  name: string;
  email: string;
  description: string;
  phoneNumber?: string;
  hearAboutMe?: string;
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export const sendContactEmail = async (payload: ContactEmailPayload): Promise<void> => {
  const response = await fetch(`${API_URL}/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? 'Failed to send message');
  }
};
