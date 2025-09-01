import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { applicants } = useSelector(store => store.application)

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(
                    `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
                    { withCredentials: true }
                )
                dispatch(setAllApplicants(res.data.job))
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllApplicants()
    }, [params.id, dispatch])

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-5'>
                    Applicants ({applicants?.applications?.length || 0})
                </h1>
                <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300'>
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    )
}

export default Applicants
