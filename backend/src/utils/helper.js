import { nanoid } from "nanoid"
import { cookieOptions } from "../config/jwt.config.js";
import jwt from "jsonwebtoken"

export const generateNanoId = (length) =>{

    return nanoid(length);
}


export const signToken = (payload)=>{
    return jwt.sign({id: payload}, process.env.JWT_SECRET,{expiresIn:"5m"})
}


export const verifyToken = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET)
}