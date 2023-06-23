const nodemailer=require("nodemailer");
const sendemail=async(to,messagecontent)=>{
    try {
        //create transporter which is used to specify the email providers SMTP and host post secure
        const transporter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            //create object
            auth:{
                user:"abcd18738710@gmail.com",
                pass:"skkeravqkhjbyrpw",
            }
        });
        //message object  
        const message={
            to,
            subject:"Email From Nodemailer App",
            html:`
            <h3>Message From Nodemailer</h3>
            <p>${messagecontent}<p>`,
        };
        const info=await transporter.sendMail(message);
        console.log("message sent",info.messageId);
    } catch (error) {
        console.log(error);
        throw new Error("Email not sent");
    }
};
module.exports=sendemail;