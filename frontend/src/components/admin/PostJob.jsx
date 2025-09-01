import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { companies } = useSelector(store => store.company)

    const changeEventHandler = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find(c => c.name.toLowerCase() === value)
        setInput(prev => ({ ...prev, companyId: selectedCompany?._id || "" }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (!input.companyId) {
            toast.error("Please select a company")
            return
        }
        try {
            setLoading(true)
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/admin/jobs")
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
            <div className='flex items-center justify-center w-full my-5'>
                <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md space-y-4 bg-white'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" value={input.title} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" name="description" value={input.description} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="requirements">Requirements</Label>
                            <Input id="requirements" name="requirements" value={input.requirements} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="salary">Salary</Label>
                            <Input id="salary" name="salary" value={input.salary} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" name="location" value={input.location} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="jobType">Job Type</Label>
                            <Input id="jobType" name="jobType" value={input.jobType} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="experience">Experience Level</Label>
                            <Input id="experience" name="experience" value={input.experience} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label htmlFor="position">No. of Positions</Label>
                            <Input id="position" type="number" name="position" value={input.position} onChange={changeEventHandler} />
                        </div>
                        <div className='col-span-2'>
                            <Label>Select Company</Label>
                            {companies.length > 0 ? (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {companies.map(company => (
                                                <SelectItem key={company._id} value={company.name.toLowerCase()}>{company.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <p className='text-xs text-red-600 font-bold text-center mt-2'>
                                    *Please register a company first before posting jobs
                                </p>
                            )}
                        </div>
                    </div>

                    <Button type="submit" className="w-full flex items-center justify-center" disabled={loading}>
                        {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                        {loading ? "Please wait" : "Post New Job"}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default PostJob
