import express from "express"
import isAuthenticated from "../Middleware/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../Controllers/job.js";

const router = express.Router();

router.post("/post", isAuthenticated, postJob);
router.get("/get", isAuthenticated, getAllJobs);
router.get("/getadminJobs", isAuthenticated,getAdminJobs);
router.get("/get/:id", isAuthenticated, getJobById);


export default router;