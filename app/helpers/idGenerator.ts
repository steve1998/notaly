/* eslint-disable */
export default function generateRandomString() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for(let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}
