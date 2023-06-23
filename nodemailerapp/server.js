const express=require("express");
const sendemail=require("./utils/sendemail.js");
const app=express();
const port=process.env.port || 9090;
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
//route to render email
app.get("/",(req,res)=>{
    res.render("email-form")
});
app.post("/send-email",async(req,res)=>{
    const {email,message}=req.body;
    try {
        await sendemail(email,message);
        res.render("email-form",{
            status:"Success",
            message:"Email Sent Succesfully",
        })
    } catch (err) {
        console.log(err);
        res.render("email-form",{
            status:"Failed",
            message:"Error Sending Email",
        })
    }
})
app.listen(port,console.log(`server running on ${port}`));