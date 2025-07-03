import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const AppliedJobTable = () => {
    return (
        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#6A38C2] mb-4">📄 Applied Jobs</h2>
            <Table>
                <TableCaption className="text-sm text-gray-500 mt-2">A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow className="bg-[#F4F0FA]">
                        <TableHead className="text-[#6A38C2] text-md font-semibold">Date</TableHead>
                        <TableHead className="text-[#6A38C2] text-md font-semibold">Job Role</TableHead>
                        <TableHead className="text-[#6A38C2] text-md font-semibold">Company</TableHead>
                        <TableHead className="text-[#6A38C2] text-md font-semibold text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 2, 3, 4].map((item, index) => (
                        <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}>
                            <TableCell className="py-4">17-07-2024</TableCell>
                            <TableCell className="font-medium text-gray-800">Frontend Developer</TableCell>
                            <TableCell className="text-gray-700">Google</TableCell>
                            <TableCell className="text-right">
                                <Badge className="bg-green-100 text-green-700 border border-green-300">Selected</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable;
