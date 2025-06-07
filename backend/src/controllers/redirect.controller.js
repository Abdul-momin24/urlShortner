
import { redirectUrlDao } from "../DAO/shortUrl_dao.js";

import wrapAsync from "../utils/wrapAsync.js";

export const redirectUrlController = wrapAsync(async (req,res) =>{

        const {id} = req.params;

        const originalUrl =await  redirectUrlDao(id);

        if(!originalUrl) throw new Error("Short  URL was not found");

        res.redirect(originalUrl?.originalUrl);



});