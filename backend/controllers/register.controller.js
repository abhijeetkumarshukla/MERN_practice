const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');

const userRegister = async(req,res)=>{
    const {userName,email,password} = req.body;
    try {
        bcrypt.hash(password, 3 , async function(err,hashed){
            if(err){
                res.status(400).json({message:`something went wrong while hashing`,user})
            } 
             else{
                const user = new UserModel({
                    userName,
                    email,
                    password:hashed
                })
                await user.save()
                res.status(201).json({message:`registration done`,user})
             }

        })
         
    } catch (error) {
        res.status(400).json({message:`registration filed`,error})
    }
}

module.exports = userRegister;