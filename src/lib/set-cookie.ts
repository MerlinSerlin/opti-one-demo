export async function setCookie(key: string, value: any) {
    const response = await fetch('/api/set-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, value }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to set cookie');
    }
  
    return response.json();
}