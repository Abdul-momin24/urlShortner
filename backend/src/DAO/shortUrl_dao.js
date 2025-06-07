import { generateNanoId } from "../utils/helper.js"
import ShortUrl from "../models/shorturl.model.js"; 

export const shortUrlSaver =async (originalUrl,shortCode,userId)=>{
    try{

        const newUrl = new ShortUrl({ originalUrl, shortUrl: shortCode });
        if(userId){
            newUrl.user = userId;
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
export const  getCustomUrl = async(slug)=>{
    return await ShortUrl.findOne({shortUrl: slug});
}



export const deleteShortUrlDao = async(id)=>{
    try{
        const deletedUrl = await ShortUrl.findByIdAndDelete(id);
        return deletedUrl;
    }catch(err){
        throw new Error("Server Error");
    }
}