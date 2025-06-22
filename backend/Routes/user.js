import { register,login,logout,updateProfile} from "../Controllers/user.js";
import express from "express"
import isAuthenticated from "../Middleware/isAuthenticated.js";

const router=express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update",isAuthenticated,updateProfile); // with auth middleware

export default router;