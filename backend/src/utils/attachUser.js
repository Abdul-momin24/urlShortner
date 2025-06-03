import { findUserById } from "../DAO/user.dao.js";
import  {verifyToken}  from "./helper.js";

const attachUser = async (req, res, next) => {

    // Check if the request has cookies and if the accessToken cookie exists
    const token = req.cookies && req.cookies.acessToken;

    
    if (!token) {
        return next()
    }

    try {
        const decoded = verifyToken(token)
        console.log(decoded, "decoded token");
        const user = await findUserById(decoded.id.id);
        
        if (!user) {
            return  next()
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default attachUser;