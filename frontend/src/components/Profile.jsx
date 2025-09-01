import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen, FileText } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const Profile = () => {
    useGetAppliedJobs()
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)
    const isResume = user?.profile?.resume ? true : false

    return (
        <div className='bg-gray-50 min-h-screen pb-10'>
            <Navbar />

            <div className='max-w-4xl mx-auto my-6 space-y-6 px-4'>
                {/* Profile Card */}
                <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-5'>
                            <Avatar className='h-24 w-24 ring-2 ring-purple-500'>
                                <AvatarImage src={user?.profile?.profilePhoto || "https://via.placeholder.com/150"} alt="profile" />
                            </Avatar>
                            <div>
                                <h1 className='font-semibold text-2xl'>{user?.fullname}</h1>
                                <p className='text-gray-600'>{user?.profile?.bio || "No bio available"}</p>
                            </div>
                        </div>
                        <Button onClick={() => setOpen(true)} variant='outline' className='rounded-md p-2 hover:bg-purple-50 hover:text-purple-700 transition'>
                            <Pen />
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className='my-5 space-y-2'>
                        <div className='flex items-center gap-3 text-gray-700'>
                            <Mail />
                            <span>{user?.email}</span>
                        </div>
                        <div className='flex items-center gap-3 text-gray-700'>
                            <Contact />
                            <span>{user?.phoneNumber || "NA"}</span>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className='my-5'>
                        <h2 className='font-semibold mb-2'>Skills</h2>
                        <div className='flex flex-wrap gap-2'>
                            {user?.profile?.skills?.length > 0 ? (
                                user.profile.skills.map((skill, idx) => (
                                    <Badge key={idx}>{skill}</Badge>
                                ))
                            ) : (
                                <span className='text-gray-400'>NA</span>
                            )}
                        </div>
                    </div>

                    {/* Resume */}
                    <div className='my-5 flex items-center gap-2'>
                        <FileText className='text-gray-500' />
                        {isResume ? (
                            <a
                                href={user.profile.resume}
                                target='_blank'
                                rel='noreferrer'
                                className='text-blue-600 hover:underline break-all font-medium'
                            >
                                {user.profile.resumeOriginalName}
                            </a>
                        ) : (
                            <span className='text-gray-400'>NA</span>
                        )}
                    </div>
                </div>

                {/* Applied Jobs Section */}
                <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
                    <h2 className='font-bold text-xl mb-4 text-gray-800'>Applied Jobs</h2>
                    <AppliedJobTable />
                </div>

            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile
