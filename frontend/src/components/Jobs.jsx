import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState([])

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter(job =>
                job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            )
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery])

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 flex gap-5 px-4'>
                {/* Filter Sidebar */}
                <div className='w-1/5'>
                    <FilterCard />
                </div>

                {/* Jobs List */}
                <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                    {filterJobs.length === 0 ? (
                        <span className='text-gray-500 text-lg'>No jobs found</span>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {filterJobs.map(job => (
                                <motion.div
                                    key={job._id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Job job={job} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Jobs
