import { generateNanoId } from "../utils/helper.js"
import ShortUrl from "../models/shorturl.model.js"; 
import { getCustomUrl, shortUrlSaver } from "../DAO/shortUrl_dao.js";
import AppError, { ShortCodeGenerationError } from "../utils/AppError.js";

export const createShortUrlServiceWithoutUser =async (originalUrl) =>{
    const shortCode = generateNanoId(6);
    

    if (!shortCode) throw new ShortCodeGenerationError();
  try {
    
    return shortUrlSaver(originalUrl,shortCode);
    // res.status(201).json(shortCode);
  } catch (err) {
    
    console.error("Error creating short URL:", err.message);
  }
}

export const createShortUrlServiceWithUser =async (originalUrl,userId, slug = null) =>{
  const shortCode = slug || generateNanoId(6) ;  
  const customUrl = await getCustomUrl(slug);


  if(customUrl) throw new Error("This custom url already exists"); 
try {
  return shortUrlSaver(originalUrl,shortCode, userId);
} catch (err) {
  console.error("Error creating short URL:", err.message);
}}


