import { Company } from "../Models/company.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({ message: "Company Name is required", success: false })
        }
        let company = await Company.findOne({name:companyName});
        if (company) {
            return res.status(400).json({ message: "Unique name required", success: false })
        }
        company = await Company.create({
            name: companyName,
            userId: req.id
        })
        return res.status(201).json({ message: "Company Registered Successfully", company, success: true })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}

//getComapany
export const getCompany = async (req, res) => {
    try {
        const userId = req.id;   //logged in User ID
        const companies = await Company.find({ userId: req.id });
        if (!companies) {
            return res.status(404).json({ message: "No Company found", success: false })
        }
        return res.status(200).json({message:"Company fetched successfully",companies,success:true})

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}


//getCompany By ID
export const getCompanyById = async (req, res) => {
    try {
         const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}


//upateCompany

export const updateCompany = async (req, res) => {
    try {
        const {name,description,website,location}=req.body;
        const file=req.file;
        const updateData={name,description,website,location};
        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
        if(!company){
            return res.status(404).json({message:"Company Not Found",success:false})
        }
        return res.status(200).json({message:"Company Info Updated Successfully",success:true})


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false,
        });
    }
}