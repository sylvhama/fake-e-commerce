export default ({
  host = process.env.NODE_ENV === 'production' ? 'https://sylvhama-fake-e-commerce.netlify.com' : 'http://localhost:8080',
  route,
  method,
  authorization,
  localeCode,
  sessionId,
  body,
  platformType,
  contentType = 'application/json'
}) => {
  const headers = new Headers();

  authorization && headers.append('Authorization', authorization);
  contentType &&
    ['post', 'put', 'delete'].includes(method) &&
    headers.append('Content-Type', contentType);

  return new Request(host + route, {
    headers,
    method,
    body: body ? JSON.stringify(body) : undefined
  });
};
