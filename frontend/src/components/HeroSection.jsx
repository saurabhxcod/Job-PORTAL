import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">

        {/* Badge */}
        <span className="mx-auto px-4 py-1.5 rounded-full bg-[#FFF4F2] text-[#F83002] font-semibold shadow-sm text-sm">
          🚀 No.1 Job Hunt Website
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 leading-snug">
          Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base">
          Find the best opportunities from top companies and start your career with confidence.
        </p>

        {/* Search bar */}
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input
            type="text"
            placeholder='Find your dream jobs'
            className='outline-none border-none w-full'

          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className='h-5 w-5' />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
