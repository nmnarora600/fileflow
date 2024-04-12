import { EmailTemplate } from "@/app/f/[file]/_components/EmailTemplate";
// import { Resend } from 'resend';
import {render} from '@react-email/render'
const nodemailer= require('nodemailer');
// const resend = new Resend(process.env.RESEND_API);

export async function POST(Request) {
  try {
    const details=await Request.json();
    
const mail= render(EmailTemplate({ senderName:details.userName ,fileUrl:details.shortUrl}))
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      secure: false,
       // true for 465, false for other ports
      auth: {
        user: 'k1vikky@gmail.com', // generated ethereal user
        pass: process.env.NODE_PASS, // generated ethereal password
      },
    });
    const mailOptions = {
      from:"k1vikky@gmail.com",
      to: details.receiver,
      subject: 'Fileflow - Test Mail',
      html: mail,
    
    };
const p= new Promise( (resolve, reject)=>{transporter.sendMail(mailOptions, (error, info) => {
  if (error) {

   
    return reject("Some error occured")
  } else { 
    
    return resolve('Email sent successfully' )

  }
})})
   
   const mailresp=await p;
  
 
    return Response.json({success: mailresp})

  } catch (error) {
    console.log("got error",error)
    return Response.json({ error });
  }
}
