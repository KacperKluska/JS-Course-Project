// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

export default async function verifyUser() {
  try {
    const response = await fetch(`${process.env.API_HOST}/verify_user`, {
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
