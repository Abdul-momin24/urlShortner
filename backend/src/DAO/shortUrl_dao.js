import { generateNanoId } from "../utils/helper.js"
import ShortUrl from "../models/shorturl.model.js"; 

export const shortUrlSaver =async (originalUrl,shortCode,userId)=>{
    try{

        const newUrl = new ShortUrl({ originalUrl, shortUrl: shortCode });
        if(userId){
            newUrl.user_id = userId;
        }
        await newUrl.save();
        return shortCode;
    }catch(err){
        throw new Error(err);
    }




}


export const redirectUrlDao = async(id)=>{
    const urlData = await ShortUrl.findOneAndUpdate({shortUrl : id},{$inc: {clicks:1}});

    return urlData;

    
}