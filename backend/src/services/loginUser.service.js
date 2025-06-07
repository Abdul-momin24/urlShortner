import { findUserByEmailAndPasword } from "../DAO/user.dao.js";
import { signToken } from "../utils/helper.js";
// import bcrypt from "bcrypt"; // make sure to install it via `npm i bcrypt`

export const loginUser = async (email, password) => {
    const user = await findUserByEmailAndPasword({ email });



    if (!user) throw new Error("Invalid Credentials");
    const isMatch= await user.comparePassword(password);

    if (!isMatch) throw new Error("Invalid Credentials");

    const token = signToken({ id: user._id });

    return { token, user };
};
