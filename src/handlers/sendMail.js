import AWS from 'aws-sdk';

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1',
});

async function sendMail(event, context) {

  const record = event.Records[0];
  console.log(record);

  const email = JSON.parse(record.body);
  const {
    recipient,
    subject,
    body,
  } = email;

  const params = {
    Source: '<senderemail>', // SES SENDER
    Destination: {
      ToAddresses: [recipient], // SES RECIPIENT
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: body
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
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


