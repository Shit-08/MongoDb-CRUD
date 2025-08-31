const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require('path');
const Chat1= require('./models/chat')

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

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
});

//New Route
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");
});

//Create Route
app.post('/chats',(req,res)=>{
    let {from, msg, to}=req.body;
    let newChat= new Chat1({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    newChat.save()
    .then(res=> console.log("chat was saved"))
    .catch(err=> console.log(err));
    res.redirect("/chats");
})

//Edit Route
app.get('/chats/:id/edit',async(req,res)=>{
    let id=req.params.id;
    let chat= await Chat1.findById(id);
    res.render("edit.ejs", {chat} );
});

app.listen(8080, ()=>{
    console.log("server is listening on port 8008");
});