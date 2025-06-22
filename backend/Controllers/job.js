import { Job } from "../Models/job.js";

//admin
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                success: false,
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}

//student
export const getAllJobs = async(req, res) => {
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},       
                {description:{$regex:keyword,$options:"i"}},       
            ]
        };
        const job=await Job.find(query).populate({
            path:'company'
        }).sort({createdAt:-1});
        if(!job){
            return res.status(404).json({message:"Job not found",success:false});
        }
        return res.json({job,success:true});

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}

//jobById for student


export const getJobById=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId);
        if(!job){
            return res.status(404).json({message:"Job not found",success:false});
        }

        return res.status(200).json({job,success:true}); 

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}

//No. of post hosted by admin

export const getAdminJobs=async(req,res)=>{
    try {
        const adminId=req.id;
        const jobs=await Job.find({ created_by: adminId });
        if(!jobs){
             return res.status(404).json({message:"No Job Found",success:false});
        }
        return res.status(200).json({jobs,success:true}); 


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}




