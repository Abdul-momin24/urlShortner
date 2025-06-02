import { findUserById } from "../DAO/user.dao";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async(req, res next)=>{

    const token = req.cookies.accessToken;


    if(!token) return res.status(401).json({message:"Unauthorised"});

    try{
        const decoded = verifyToken(token);

        const user = await findUserById(decoded.id);

        if(!user) return res.status(401).json({message:"unauthorised"});

        req.user = user;

        next();

    }catch(err){
        return res.status(401).json({message:"Unauthorised"})
    }
}