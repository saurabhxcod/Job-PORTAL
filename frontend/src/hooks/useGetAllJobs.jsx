import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { JOB_API_END_POINT } from '@/utils/constant';
import { setAllJobs } from'@/redux/jobSlice'

const useGetAllJobs = () => {
    const disptach = useDispatch();
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    disptach(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log('Error fetching jobs:', error);
            }
        }
        fetchAllJobs();
    }, []);
}

export default useGetAllJobs;