import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import { X } from 'lucide-react'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job)
    const [showMessage, setShowMessage] = useState(true)

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length === 0 && showMessage ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center flex justify-between items-center">
                                <span>You haven't applied to any job yet.</span>
                                <X 
                                  className="cursor-pointer" 
                                  onClick={() => setShowMessage(false)} 
                                />
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map(appliedJob => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob.job?.title || "N/A"}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name || "N/A"}</TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        className={`${
                                            appliedJob?.status === "rejected"
                                                ? 'bg-red-400'
                                                : appliedJob?.status === 'pending'
                                                ? 'bg-gray-400'
                                                : 'bg-green-400'
                                        }`}
                                    >
                                        {appliedJob?.status?.toUpperCase() || "N/A"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
