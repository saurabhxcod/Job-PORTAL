import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate()

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-6 rounded-xl shadow-md bg-white border border-gray-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
        >
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>{job?.company?.name || "Unknown Company"}</h1>
                <p className='text-sm text-gray-400'>India</p>
            </div>

            <div className='my-3'>
                <h2 className='font-bold text-xl mb-1'>{job?.title || "Job Title"}</h2>
                <p className='text-gray-600 text-sm line-clamp-3'>{job?.description || "No description available."}</p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-semibold' variant="ghost">{job?.position || 0} Positions</Badge>
                <Badge className='text-[#F83002] font-semibold' variant="ghost">{job?.jobType || "N/A"}</Badge>
                <Badge className='text-[#7209b7] font-semibold' variant="ghost">{job?.salary ? `${job.salary} LPA` : "N/A"}</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
