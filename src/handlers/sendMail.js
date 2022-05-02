async function sendMail(event, context) {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  };
}

export const handler = sendMail;


