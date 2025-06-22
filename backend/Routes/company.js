import express from "express"
import isAuthenticated from "../Middleware/isAuthenticated.js";
import { registerCompany, updateCompany, getCompany, getCompanyById } from "../Controllers/company.js";

const router = express.Router();

router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:id", isAuthenticated, getCompanyById);
router.put("/update/:id", isAuthenticated, updateCompany);


export default router;