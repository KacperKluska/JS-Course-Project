const API_HOST = 'http://localhost:3001';

export default async function login(email, password) {
  try {
    const signInResponse = await fetch(`${API_HOST}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await signInResponse.json();
    return { data, status: signInResponse.status };
  } catch (error) {
    return { data: { error }, status: 400 };
  }
}
