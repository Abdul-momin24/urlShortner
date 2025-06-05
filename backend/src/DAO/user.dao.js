import shortUrl from "../models/shorturl.model.js";
import User from "../models/user.model.js";

export const  findUserByEmail = async({email}) =>{

    return await User.findOne({email});
}

export const  findUserByEmailAndPasword = async({email}) =>{

    return await User.findOne({email}).select("+password");
}


export const createUser = async ({name,email,password}) =>{

    const newUser = new User({name,email,password});

    await newUser.save();

    return newUser;

}



export const findUserById = async(id)=>{
    return await User.findById(id);
}


export const updateUser = async(id,name,email,password) =>{

    const user = await User.findById(id);
    if(!user) throw new Error("No such User Exists");

    user.name = name;

    user.email = email;

    user.password = password;


    await user.save();

    return user;

}


export const delelteUser = async(id)=>{

    const user = User.findByIdAndDelete(id);

}



export const getAllUrlsdao = async (userId) => {
    
    const user = await shortUrl.find({user: userId}).populate("user","name email");
    
    if (!user) throw new Error("User not found");
    return user;
};