export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export async function loginUser(username: string, password: string): Promise<User> {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
    cache: 'no-store',
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  return data;
}