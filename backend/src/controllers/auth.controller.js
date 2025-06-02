import { cookieOptions } from "../config/jwt.config.js";
import { loginUser } from "../services/loginUser.service.js";
import { registerUser } from "../services/registerUser.service.js";
import wrapAsync from "../utils/wrapAsync.js";

export const register = wrapAsync(async(req,res)=>{

    const {name,email,password} = req.body;


    const token = await  registerUser(name,email,password);

    res.cookie("acessToken", token, cookieOptions);
    
    res.status(200).json({message:"Login succefull"});

})



export const login = wrapAsync(async (req,res)=>{

    const {email, password} = req.body;


    const token = await loginUser(email,password);

    req.user = user
    res.cookie("acessToken", token, cookieOptions);

    res.status(200).json({message:"login success"});

})


