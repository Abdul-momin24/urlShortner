import { cookieOptions } from "../config/jwt.config.js";
import { loginUser } from "../services/loginUser.service.js";
import { registerUser } from "../services/registerUser.service.js";
import wrapAsync from "../utils/wrapAsync.js";

export const register = wrapAsync(async(req,res)=>{

    const {name,email,password} = req.body;


    const {token,user} = await  registerUser(name,email,password);
    req.user = user
    console.log("user", user);
    res.cookie("acessToken", token, cookieOptions);
    
    res.status(200).json({message:"register succefull", user:user});

})



export const login = wrapAsync(async (req,res)=>{

    const {email, password} = req.body;

   
    const {token,user} = await loginUser(email,password);
   
    

    req.user = user
    res.cookie("acessToken", token, cookieOptions);

    res.status(200).json({message:"login success", user:user});

})



export const logout = wrapAsync(async (req, res) => {
    res.clearCookie("acessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
    });
    res.status(200).json({ message: "Logout successful" });
});


export const getMe = wrapAsync(async (req, res) => {
    res.status(200).json({
        user: req.user,
        message: "User fetched successfully"
    });
});
