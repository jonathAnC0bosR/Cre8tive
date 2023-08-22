const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer"); // Import nodemailer for sending emails

const secret = "mysecretshhhhh";
const expiration = "2h";

const generateVerificationToken = (user) => {
  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: expiration });
  return token;
};

const sendVerificationEmail = async (email, token) => {
  // Create a transporter using nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "cre8tiveauth@gmail.com", // Replace with your Gmail email
      pass: "vvtfudxuguejycys", // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: "cre8tiveauth@gmail.com", // Replace with your Gmail email
    to: email,
    subject: "Account Verification",
    text: `Please click the following link to verify your account: http://your-app-url/verify/${token}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent successfully to ${email}`);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

module.exports = {
  // ... Existing authMiddleware and signToken functions ...

  generateVerificationToken, // Export the new function
  sendVerificationEmail, // Export the new function
};
