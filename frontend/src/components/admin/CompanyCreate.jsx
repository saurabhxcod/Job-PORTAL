import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate()
    const [companyName, setCompanyName] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const registerNewCompany = async () => {
        if (!companyName) {
            toast.error("Company name cannot be empty")
            return
        }
        try {
            setLoading(true)
            const res = await axios.post(
                `${COMPANY_API_END_POINT}/register`,
                { companyName },
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
            )
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message)
                navigate(`/admin/companies/${res.data.company._id}`)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <div className="my-10">
                    <h1 className="font-bold text-3xl mb-2">Create Your Company</h1>
                    <p className="text-gray-500">Give your company a name. You can change this later if needed.</p>
                </div>

                <Label htmlFor="companyName">Company Name</Label>
                <Input
                    id="companyName"
                    type="text"
                    className="my-2"
                    placeholder="JobHunt, Microsoft etc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <div className="flex items-center gap-4 my-10">
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>
                        Cancel
                    </Button>
                    <Button onClick={registerNewCompany} disabled={loading} className="bg-[#7209b7] hover:bg-[#5f32ad] text-white">
                        {loading ? "Creating..." : "Continue"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate
