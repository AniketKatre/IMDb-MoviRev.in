exports.generateOTP = (otp_length = 6) => {
  // generate 6 digit OTP
  let OTP = "";
  for (let i = 0; i <= otp_length; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }
  return OTP;
};

exports.generateMailTransporter = () => {
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7a558e4d05b2e0",
      pass: "426e7959eb33f5",
    },
  });
};