import { findUserByEmail, createUser } from "../DAO/user.dao.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async(name , email, password)=>{

    const user = await  findUserByEmail({email})

    if(user) throw new Error("The user Already exists");

    const newUser = createUser({name,email,password});

    const token = signToken({id: newUser._id});

    
    return {token};
};