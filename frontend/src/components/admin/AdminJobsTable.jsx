import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => { 
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState(allAdminJobs)
    const navigate = useNavigate()

    useEffect(() => { 
        const filteredJobs = allAdminJobs.filter(job => {
            if (!searchJobByText) return true
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || 
                   job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
        })
        setFilterJobs(filteredJobs)
    }, [allAdminJobs, searchJobByText])

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs?.map(job => {
                        const { _id, title, createdAt, company } = job
                        return (
                            <TableRow key={_id} className="hover:bg-gray-50 transition-colors duration-200">
                                <TableCell>{company?.name}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal className="cursor-pointer" /></PopoverTrigger>
                                        <PopoverContent className="w-32 p-2">
                                            <div 
                                                onClick={() => navigate(`/admin/companies/${_id}`)} 
                                                className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded'
                                            >
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div 
                                                onClick={() => navigate(`/admin/jobs/${_id}/applicants`)} 
                                                className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded mt-2'
                                            >
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable
