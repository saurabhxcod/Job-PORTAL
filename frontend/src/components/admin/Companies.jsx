import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies()
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchCompanyByText(input))
    }, [input])

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 space-y-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <Input
                        className="flex-1"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={() => navigate("/admin/companies/create")}
                        className="bg-[#7209b7] hover:bg-[#5f32ad] text-white"
                    >
                        New Company
                    </Button>
                </div>
                <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300'>
                    <CompaniesTable />
                </div>
            </div>
        </div>
    )
}

export default Companies
