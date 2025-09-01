import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate()

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime)
        const currentTime = new Date()
        const timeDifference = currentTime - createdAt
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    }

    return (
        <div className='p-5 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
            {/* Top Info */}
            <div className='flex items-center justify-between text-gray-500'>
                <span className='text-sm'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </span>
                <Button variant="outline" className="rounded-full p-2" size="icon">
                    <Bookmark />
                </Button>
            </div>

            {/* Company Info */}
            <div className='flex items-center gap-3 my-3'>
                <Avatar className="w-12 h-12">
                    <AvatarImage src={job?.company?.logo || "https://via.placeholder.com/40"} />
                </Avatar>
                <div>
                    <h2 className='font-medium text-lg'>{job?.company?.name || "Unknown Company"}</h2>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            {/* Job Info */}
            <div className='my-2'>
                <h1 className='font-bold text-lg'>{job?.title || "Job Title"}</h1>
                <p className='text-sm text-gray-600 line-clamp-3'>{job?.description || "No description available."}</p>
            </div>

            {/* Job Badges */}
            <div className='flex flex-wrap items-center gap-2 mt-3'>
                <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position || 0} Positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">{job?.jobType || "N/A"}</Badge>
                <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary ? `${job.salary} LPA` : "N/A"}</Badge>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center gap-3 mt-4'>
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="flex-1"
                >
                    Details
                </Button>
                <Button className="flex-1 bg-[#7209b7] hover:bg-[#5f32ad] transition-colors duration-300">
                    Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job
