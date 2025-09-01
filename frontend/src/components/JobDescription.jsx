import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from '@/redux/jobSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job)
    const { user } = useSelector(store => store.auth)
    const [isApplied, setIsApplied] = useState(false)

    const params = useParams()
    const jobId = params.id
    const dispatch = useDispatch()

    // Apply job handler
    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true })
            if (res.data.success) {
                setIsApplied(true)
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updatedSingleJob))
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    }

    // Fetch single job details
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                    setIsApplied(res.data.job.applications.some(app => app.applicant === user?._id))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleJob()
    }, [jobId, dispatch, user?._id])

    return (
        <div className='max-w-4xl mx-auto my-10 bg-white p-6 rounded-xl shadow-md'>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h1 className='font-bold text-2xl'>{singleJob?.title}</h1>
                    <div className='flex flex-wrap items-center gap-2 mt-3'>
                        <Badge className='text-blue-700 font-bold' variant="ghost">{singleJob?.postion || 0} Positions</Badge>
                        <Badge className='text-[#F83002] font-bold' variant="ghost">{singleJob?.jobType || "N/A"}</Badge>
                        <Badge className='text-[#7209b7] font-bold' variant="ghost">{singleJob?.salary ? `${singleJob.salary} LPA` : "N/A"}</Badge>
                    </div>
                </div>
                <Button
                    onClick={!isApplied ? applyJobHandler : undefined}
                    disabled={isApplied}
                    className={`rounded-lg px-6 py-2 text-white font-medium transition-colors duration-300 ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>

            <h2 className='border-b-2 border-gray-300 font-semibold pb-2 mb-4'>Job Description</h2>
            <div className='space-y-2 text-gray-700'>
                <p><span className='font-bold'>Role:</span> {singleJob?.title || "N/A"}</p>
                <p><span className='font-bold'>Location:</span> {singleJob?.location || "N/A"}</p>
                <p><span className='font-bold'>Description:</span> {singleJob?.description || "N/A"}</p>
                <p><span className='font-bold'>Experience:</span> {singleJob?.experience || 0} yrs</p>
                <p><span className='font-bold'>Salary:</span> {singleJob?.salary ? `${singleJob.salary} LPA` : "N/A"}</p>
                <p><span className='font-bold'>Total Applicants:</span> {singleJob?.applications?.length || 0}</p>
                <p><span className='font-bold'>Posted Date:</span> {singleJob?.createdAt?.split("T")[0] || "N/A"}</p>
            </div>
        </div>
    )
}

export default JobDescription
