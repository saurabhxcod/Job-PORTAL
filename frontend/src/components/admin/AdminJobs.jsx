import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 500); // 500ms delay

    return () => clearTimeout(handler);
  }, [input]);

  // Dispatch search after debounce
  useEffect(() => {
    dispatch(setSearchJobByText(debouncedInput));
  }, [debouncedInput]);

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10 space-y-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <Input
            className="flex-1"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")} className="bg-[#7209b7] hover:bg-[#5f32ad] text-white">New Job</Button>
        </div>
        <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300'>
          <AdminJobsTable />
        </div>
      </div>
    </div>
  )
}

export default AdminJobs
