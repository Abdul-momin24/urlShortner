
import axiosIsntance from "../utils/axiosInstance"


export const createShortUrl = async(url)=>{
    return await axiosIsntance.post("/api/create", {originalUrl :url})
}