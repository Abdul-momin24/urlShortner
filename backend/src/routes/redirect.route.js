import express from "express";
import { redirectUrlController } from "../controllers/redirect.controller.js";


const router = express.Router();


router.get("/:id", redirectUrlController)


export default router;


