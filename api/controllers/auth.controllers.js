import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export const signup=async(req,res,next)=>{
    const {user,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({user,email,password:hashedPassword});
   try{
    await newUser.save();
    res.status(201).json("User created successfully")

   }catch(error){
    next(error)
   }
}  