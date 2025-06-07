import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { deleteUrl, getAllUrls } from "../controllers/user.controller.js";
// improt authMiddleware

const router = express.Router()


router.get("/urls", authMiddleware, getAllUrls);
router.delete("/urls/:id",authMiddleware, deleteUrl ) // Get all URLs for the authenticated user

// authMiddleware will check if user is authenticated
export default  router;
