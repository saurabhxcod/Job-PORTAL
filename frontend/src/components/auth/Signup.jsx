import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Signup = () => {
     const [input,setInput]=useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        file:""
    });
    const changeEventHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }

    const changeFileHandler=(e)=>{
        setInput({...input,file:e.target.files?.[0]});
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log(input);
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">

      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(106,56,194,0.3)] p-8 space-y-6 border border-gray-200"
        >
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Sign Up to <span className="text-purple-600">JobNexus</span>
          </h1>
          <p className="text-center text-sm text-gray-500">
            Discover jobs. Build your future.
          </p>

          <div>
            <Label className="text-sm font-medium text-gray-700">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="John Doe"
              className="mt-1 focus-visible:ring-2 focus-visible:ring-purple-500"
            />
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@email.com"
              className="mt-1 focus-visible:ring-2 focus-visible:ring-purple-500"
            />
          </div>


          <div>
            <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="+91-9876543210"
              className="mt-1 focus-visible:ring-2 focus-visible:ring-purple-500"
            />
          </div>


          <div>
            <Label className="text-sm font-medium text-gray-700">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="••••••••"
              className="mt-1 focus-visible:ring-2 focus-visible:ring-purple-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
 
            <div>
              <Label className="block mb-2 text-sm font-medium text-gray-700">Role</Label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="role" value="student" checked={input.role==='student'} onChange={changeEventHandler} className="accent-purple-600" />
                  <span className="text-sm text-gray-700">Student</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="role" value="recruiter" checked={input.role==='recruiter'} onChange={changeEventHandler} className="accent-purple-600" />
                  <span className="text-sm text-gray-700">Recruiter</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <Label className="text-sm font-medium text-gray-700 mb-1">Profile Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="file:mr-3 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#6A38C2] hover:bg-[#582f9d] text-white font-medium py-2 rounded-xl shadow-lg"
          >
            Sign Up
          </Button>


          <p className="text-sm text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-purple-600 font-medium ml-1 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
