// import User from "../models/user.model"
import { getAllUrlsdao } from "../DAO/user.dao.js";


export const getAllUrls = async (req, res) => {
    try {
        const userId = req.user._id;
    
        const urls = await  getAllUrlsdao(userId);
        // console.log(urls,"asdasdsadasd");
    
        res.status(200).json({ urls, message:"Collected Urls" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
      }

}