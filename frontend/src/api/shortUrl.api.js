
import axiosIsntance from "../utils/axiosInstance"


export const createShortUrl = async(url, slug)=>{
    return await axiosIsntance.post("/api/create", {originalUrl :url, slug})
}