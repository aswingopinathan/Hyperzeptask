const User = require('../models/userModel')

module.exports = {
    registerUser:async(req,res)=>{
        console.log("registerUser working");
        const { name, email } = req.body;
        const userExists = await User.findOne({email:email})
        if(userExists){
            res.status(400).json({message:"user already exists"})
        }
        const user = await User.create({name:name,email:email})
        if(user){
            res.status(201).json(user)
        }else{
            res.status(400).json({message:"failed to create user"})
        }
    },
    searchUser:async(req,res)=>{
        console.log("searchUser working");
        const keyWord = req.query.searchUser?{
            $or:[
                {name:{$regex:req.query.searchUser,$options:"i"}},
            {email:{$regex:req.query.searchUser,$options:"i"}}
            ]
        }:{}
        const users = await User.find(keyWord)
        res.send(users)
    }
}