// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const API_HOST = process.env.REACT_APP_API_HOST;

export async function login(email, password) {
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
      credentials: 'include',
    });
    const data = await signInResponse.json();
    return { data, status: signInResponse.status };
  } catch (error) {
    return { data: { error }, status: 404 };
  }
}

export async function register(name, surname, email, password) {
  try {
    const singUpResponse = await fetch(`${API_HOST}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
      }),
    });
    const data = await singUpResponse.json();
    return { data, status: singUpResponse.status };
  } catch (error) {
    return { data: { error }, status: 404 };
  }
}

export async function verifyUser() {
  try {
    const response = await fetch(`${API_HOST}/verify_user`, {
      credentials: 'include',
    });
    if (response.status === 200) {
      const data = await response.json();
      return { data, status: 200 };
    }
    return { status: 401 };
  } catch (err) {
    return { status: 400 };
  }
}

export async function refreshToken() {
  try {
    const response = await fetch(`${API_HOST}/refresh_token`, {
      credentials: 'include',
    });
    return response.status;
  } catch (err) {
    return { status: 400 };
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(`${API_HOST}/logout`, {
      credentials: 'include',
    });
    return response.status;
  } catch (err) {
    return { status: 400 };
  }
}

export async function getUserData() {
  try {
    const response = await fetch(`${API_HOST}/account/user_data`, {
      credentials: 'include',
    });
    const data = await response.json();
    return { data, status: response.status };
  } catch (err) {
    return { data: { err }, status: 400 };
  }
}
