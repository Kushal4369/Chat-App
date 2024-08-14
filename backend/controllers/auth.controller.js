 import User from '../models/user.model.js'
 import bcryptjs from "bcryptjs"
import generateTokenAndSetCookie from '../utils/generateToken.js';

 export const signup =async (req,res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        console.log(fullName);
        
            
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match}"})
        }
        const user = await User.findOne({username})

        if(user) {
            return res.status(400).json({error: " Username already exists"})
        }

        // Hash Password Here
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword =  await bcryptjs.hash(password,salt)
        const profilePic = `https://avatar.iran.liara.run/username?username=${username}`
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
})
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }
        else{
            res.status(400).json({error: "Invalid User data"})
        }
            

    
    } catch (error){
        console.log("Error in Signup Controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
 }


 export const login = async (req,res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

        
    } catch (error){
        console.log("Error in Login Controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
 }

 export const logout = async (req,res) => {
    try {
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        console.log("Error in Logout Controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
 }