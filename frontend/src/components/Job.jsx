import React from 'react';
import { Button } from "@/components/ui/button";
import { Bookmark, Briefcase, IndianRupee } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
  const jobId="cjzkbzkvv";
  const navigate=useNavigate();
  return (
    <div className="p-6 rounded-xl shadow-xl bg-white border border-gray-200 transition-transform hover:scale-[1.01] hover:shadow-2xl duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-400">2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="text-gray-600" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
          />

        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Company Name</h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Senior Frontend Developer</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Join our dynamic team to build modern web applications using React, Tailwind CSS, and cutting-edge technologies.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mb-4">
        <Badge variant="outline" className="text-blue-700 bg-blue-50 border-blue-200 font-medium flex items-center gap-1 px-3 py-1">
          <Briefcase size={14} />
          12 Positions
        </Badge>
        <Badge variant="outline" className="text-red-700 bg-red-50 border-red-200 font-medium px-3 py-1">
          Part Time
        </Badge>
        <Badge variant="outline" className="text-purple-700 bg-purple-50 border-purple-200 font-medium flex items-center gap-1 px-3 py-1">
          <IndianRupee size={14} />
          24 LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline" className="hover:bg-gray-100 transition">Details</Button>
        <Button className="bg-[#7209b7] text-white hover:bg-[#5e0894] transition">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
