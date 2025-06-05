import express from "express"
import { getMe, login, logout, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
// improt authMiddleware

const router = express.Router()


router.post("/register", register)
router.post("/login", login)

router.get("/logout", logout)
router.get("/me", authMiddleware,getMe) // authMiddleware will check if user is authenticated
export default  router;
