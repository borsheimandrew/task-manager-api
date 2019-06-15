const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'borsheimandrew@gmail.com',
    subject: 'Thank you for joining Task Manager!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'borsheimandrew@gmail.com',
    subject: 'Sorry to see you go :(',
    text: `We're going to miss you, ${name}. Please let us know how we can do better`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}