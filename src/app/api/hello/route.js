// pages/api/hello.js

export default async function handler(request, response) {
  try {
    // You can perform any logic here if needed.

    // Return a "Hello, Next.js" response.
    return response.status(200).send('Hello, Next.js');
  } catch (error) {
    // Handle errors if necessary.
    return response.status(500).send('Internal Server Error');
  }
}
