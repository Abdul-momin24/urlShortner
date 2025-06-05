import { createShortUrlServiceWithoutUser, createShortUrlServiceWithUser } from "../services/shortUrl.service.js";
import wrapAsync from "../utils/wrapAsync.js";

export const createShortUrl = wrapAsync(async (req, res) => {

    const { originalUrl, slug } = req.body;
    // console.log(originalUrl)
    if (!originalUrl) {
        return res.status(400).json({ success: false, message: "originalUrl is required" });
    }
    
    let shortUrl;
    if(req.user){
        shortUrl = await createShortUrlServiceWithUser(originalUrl, req.user._id, slug);
    }else{
        shortUrl = await createShortUrlServiceWithoutUser(originalUrl);
    }
    
    const baseUrl = process.env.APP_URL.replace(/\/+$/, '');
    const path = shortUrl.replace(/^\/+/, '');
    const fullShortUrl = `${baseUrl}/${path}`;

    res.status(201).json({
        success: true,
        shortUrl: fullShortUrl,
    });
});

