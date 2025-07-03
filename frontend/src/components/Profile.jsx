import React, { useState } from 'react'
import Navbar from './shared/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from "@/components/ui/button"
import AppliedJobTable from './AppliedJobTable';
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"
import UpdateProfileDialogue from './UpdateProfileDialogue';
import { useSelector } from 'react-redux';

const skills = ["HTML", "CSS", "JS", "React", "Node"];
const isResume = true;
const Profile = () => {

    const [open,setOpen]=useState(false);
    const {user}=useSelector(store=>store.auth);

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <Navbar />
            <div className='max-w-4xl mx-auto my-8 space-y-6'>

                {/* Profile Card */}
                <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-md'>
                    <div className='flex justify-between items-start'>
                        <div className='flex items-center gap-6'>
                            <Avatar className="h-24 w-24 ring-2 ring-[#6A38C2] shadow">
                                <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                                <AvatarFallback>FN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className='text-2xl font-semibold text-gray-800'>Full Name</h1>
                                <p className='text-sm text-gray-500 mt-1'>Add your Bio here</p>
                            </div>
                        </div>
                        <Button onClick={()=>setOpen(true)} variant="outline" size="icon" className='border-gray-300 hover:bg-gray-100'>
                            <Pen className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className='mt-6 space-y-3 text-gray-700'>
                        <div className='flex items-center gap-3'>
                            <Mail className="h-5 w-5 text-[#6A38C2]" />
                            <span>xyz@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Contact className="h-5 w-5 text-[#6A38C2]" />
                            <span>78453341534</span>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className='mt-6'>
                        <h2 className='text-md font-semibold mb-2 text-gray-800'>Skills</h2>
                        <div className='flex flex-wrap gap-2'>
                            {
                                skills.length !== 0
                                    ? skills.map((skill, index) => (
                                        <Badge key={index} className='bg-[#6A38C2]/10 text-[#6A38C2] px-3 py-1 rounded-full text-sm'>
                                            {skill}
                                        </Badge>
                                    ))
                                    : <span className='text-sm text-gray-500'>NA</span>
                            }
                        </div>
                    </div>

                    {/* Resume Section */}
                    <div className='mt-6'>
                        <Label className="text-md font-semibold text-gray-800">Resume</Label>
                        <div className='mt-1'>
                            {
                                isResume
                                    ? <a
                                        href='https://google.com'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className='text-blue-600 hover:underline hover:text-blue-800 text-sm'
                                    >
                                        View Resume
                                    </a>
                                    : <span className='text-sm text-gray-500'>NA</span>
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'>
                    <h1 className='text-lg font-bold text-gray-800 mb-4'>Applied Jobs</h1>
                    <AppliedJobTable />
                </div>
                <UpdateProfileDialogue open={open} setOpen={setOpen}/>
            </div>
        </div>
    )
}

export default Profile;
