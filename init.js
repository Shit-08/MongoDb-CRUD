const mongoose=require("mongoose");
const Chat= require('./models/chat')

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let sampleChats=[
    {
    from: "Sakhi",
    to: "Sukhi",
    msg: "Love u 3000",
    created_at: new Date()
    },
    {
    from: "Kamu",
    to: "Shital",
    msg: "send me money",
    created_at: new Date() 
    },
    {
    from: "bhagya",
    to: "Sukhi",
    msg: "hii 3000",
    created_at: new Date()
    },
    {
    from: "Shital",
    to: "Sakhi",
    msg: "Come to Aundh",
    created_at: new Date()
    },
    {
    from: "Mummy",
    to: "Di",
    msg: "j1 zal ka",
    created_at: new Date()
    },
    {
    from: "Tinu",
    to: "Sukhi",
    msg: "Hi Tinu",
    created_at: new Date()
    }

]
Chat.insertMany(sampleChats);