import { register,login,logout,updateProfile} from "../Controllers/user.js";
import express from "express"
import isAuthenticated from "../Middleware/isAuthenticated.js";
import { singleUpload } from "../Middleware/multer.js";

const router=express.Router();

router.post("/register",singleUpload, register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update",isAuthenticated,singleUpload,updateProfile); // with auth middleware

export default router;