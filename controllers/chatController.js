const Chat = require('../models/chatModel')
const User = require('../models/userModel')

module.exports = {
    accessChat:async(req,res)=>{
        const { userid,userId } = req.body
        let isChat = await Chat.find({
            isGroupChat:false,
            $and:[
                {users:{$elemMatch:{$eq:userid}}},
                {users:{$elemMatch:{$eq:userId}}}
            ]
        }).populate("users").populate("latestMessage")

        isChat = await User.populate(isChat,{
            path:"latestMessage.sender",
            select:"name email"
        })
 
        if(isChat.length>0){
            res.send(isChat[0])
        }else{
            const chatData = {
                chatName: "sender",
                isGroupChat:false,
                users:[userid, userId]
            }
            const createdChat = await Chat.create(chatData)
            const FullChat = await Chat.findOne({_id:createdChat._id}).populate("users")
            res.status(200).send(FullChat)
        }
    },
    fetchChats:async(req,res)=>{
        const { userid } = req.body
        Chat.find({ users: {$elemMatch: { $eq: userid }}}).then((result)=>res.send(result))
    }
}