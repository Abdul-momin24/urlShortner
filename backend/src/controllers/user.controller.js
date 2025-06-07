// import User from "../models/user.model"
import { deleteShortUrlDao } from "../DAO/shortUrl_dao.js";
import { getAllUrlsdao } from "../DAO/user.dao.js";


export const getAllUrls = async (req, res) => {
    try {
        const userId = req.user._id;
    
        const urls = await  getAllUrlsdao(userId);
    
        res.status(200).json({ urls, message:"Collected Urls" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
      }

}


export const deleteUrl = async(req, res) => {
  try{
    const id = req.params.id;

    const deleteUrl = await  deleteShortUrlDao(id);
    if(!deleteUrl) return res.status(404).json({ message: "Url Not Found" });

    return res.status(200).json({ message: "Url Deleted Successfully" });
  }
  catch(err){
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}