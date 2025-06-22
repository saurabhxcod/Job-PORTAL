import express from "express";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../Controllers/application.js";
import isAuthenticated from "../Middleware/isAuthenticated.js";

const router = express.Router();

// Apply for a job
router.get("/apply/:id", isAuthenticated, applyJob);

// Get all jobs applied by the logged-in user
router.get("/get", isAuthenticated, getAppliedJobs);

// Get applicants for a specific job
router.get("/:id/applicants", isAuthenticated, getApplicants);

// Update application status (admin)
router.post("/status/:id/update", isAuthenticated, updateStatus);

export default router;
