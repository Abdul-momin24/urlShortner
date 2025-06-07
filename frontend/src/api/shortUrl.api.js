
import axiosIsntance from "../utils/axiosInstance"


export const createShortUrl = async(url, slug)=>{
    return await axiosIsntance.post("/api/create", {originalUrl :url, slug})
}

export const deleteShortUrl = async(id)=>{
    return await axiosIsntance.delete(`/api/user/urls/${id}`);
}