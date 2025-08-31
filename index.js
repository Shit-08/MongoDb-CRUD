const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require('path');
const Chat1= require('./models/chat')

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat2= new Chat1({
//     from: "Neha",
//     to: "Priya",
//     msg: "send me ur exam sheet",
//     created_at: new Date() //creates a random date and time
// })

// chat2.save().then((res)=>{
//     console.log(res);
// });


app.get('/',(req,res)=>{
    res.send("root is working")
})

//Index Route
app.get('/chats',async (req,res)=>{
    let chats= await Chat1.find();
    res.render("index.ejs", {chats});
})

app.listen(8080, ()=>{
    console.log("server is listening on port 8008");
})