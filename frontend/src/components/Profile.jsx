import React from 'react'
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {  Contact, Mail, Pen } from 'lucide-react';
import { Button } from "@/components/ui/button"
import AppliedJobTable from './AppliedJobTable';
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"

const skills=["HTML","CSS","JS","React","Node"];
const isResume=true;

const Profile = () => {
    return (
        <div>
            <Navbar />
<div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Add your Bio here</p>
                        </div>
                    </div>
                    <Button  className="text-right" variant="outline"><Pen/></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail/>
                        <span>xyz@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>78453341534</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.legnth!=0 ? skills.map((item,index)=><Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href='https://google.com' className='text-blue-500 w-full hover:underline cursor-pointer'>Resume</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
            
        </div>
    )
}

export default Profile;