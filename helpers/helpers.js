export const authHeader = (ContentType) => {
  return {
    Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
    "Content-Security-Policy": "default-src 'self',frame-src 'self'",
    "Content-Type": ContentType,
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Frame-Options": "SAMEORIGIN",
    "ngrok-skip-browser-warning": true,
  };
};
export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
