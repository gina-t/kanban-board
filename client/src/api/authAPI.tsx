import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    console.log('Sending login request with:', userInfo); // Log the login data being sent
    const response = await fetch('http://localhost:3001/auth/login', { // Ensure the correct server URL and port
      method: 'POST', // Set the method to POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });
    console.log('Received response:', response); // Log the raw response

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response data:', errorData); // Log the error response data
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Parsed response data:', data); // Log the parsed response data
    return data;
  } catch (err) {
    console.log('Error from user login:', err);
    return Promise.reject('Could not fetch user login');
  }
};

export default login;
