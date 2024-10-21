// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

// //transport
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     //validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }
//     //email matter
//     transporter.sendMail({
//       to: "shaista.nasrullah786@gmail.com",
//       from: "shaista.nasrullah786@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// Check if the API key is present
if (!process.env.API_SENDGRID) {
  console.error("Missing SendGrid API key");
}

// Transport configuration
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Email content
    await transporter.sendMail({
      to: "shaista.nasrullah786@gmail.com",
      from: "shaista.nasrullah786@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
