import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
    const params = useParams()
    useGetCompanyById(params.id)

    const { singleCompany } = useSelector(store => store.company)
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const changeEventHandler = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0]
        setInput(prev => ({ ...prev, file }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", input.name)
        formData.append("description", input.description)
        formData.append("website", input.website)
        formData.append("location", input.location)
        if (input.file) formData.append("file", input.file)

        try {
            setLoading(true)
            const res = await axios.put(
                `${COMPANY_API_END_POINT}/update/${params.id}`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
            )
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/admin/companies")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (singleCompany) {
            setInput({
                name: singleCompany.name || "",
                description: singleCompany.description || "",
                website: singleCompany.website || "",
                location: singleCompany.location || "",
                file: null
            })
        }
    }, [singleCompany])

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className='max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md'>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className='flex items-center gap-5'>
                        <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                            <ArrowLeft /> Back
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label htmlFor="name">Company Name</Label>
                            <Input id="name" name="name" value={input.name} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" name="description" value={input.description} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="website">Website</Label>
                            <Input id="website" name="website" value={input.website} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" name="location" value={input.location} onChange={changeEventHandler} />
                        </div>
                        <div className='col-span-2'>
                            <Label htmlFor="file">Logo</Label>
                            <Input id="file" type="file" accept="image/*" onChange={changeFileHandler} />
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#7209b7] hover:bg-[#5f32ad] text-white flex items-center justify-center" disabled={loading}>
                        {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} 
                        {loading ? "Please wait" : "Update"}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CompanySetup
