import { findUserByEmail } from "../DAO/user.dao.js"
import { signToken } from "../utils/helper.js";

export const loginUser = async(email, password) =>{


    const user = await findUserByEmail({email});
    if (user.password !== password || !user) throw new Error("Invalid Credentials");


    const token =  signToken({id: user._id});


    return token
}