import AWS from 'aws-sdk';

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1',
});

async function sendMail(event, context) {
  const params = {
    Source: '<senderemail>', // SES SENDER
    Destination: {
      ToAddresses: ['<targetemail>'], // SES RECIPIENT
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: 'Hi there!'
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: 'Test email',
      },
    },
  };

  try {
    const data = await ses.sendEmail(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export const handler = sendMail;


