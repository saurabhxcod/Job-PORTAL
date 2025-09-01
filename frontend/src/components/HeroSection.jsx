import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        if (!query.trim()) return; // prevent empty search
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 md:px-0'>
            <div className='flex flex-col gap-6 md:gap-8 my-12 md:my-20'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base'>
                    No. 1 Job Hunt Website
                </span>
                <h1 className='text-3xl md:text-5xl font-bold leading-snug md:leading-tight'>
                    Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
                </h1>
                <p className='text-gray-600 text-sm md:text-base max-w-xl mx-auto'>
                    Discover your next opportunity and connect with top recruiters. Apply seamlessly and land your dream job!
                </p>

                <div className='flex flex-col md:flex-row w-full md:w-[50%] shadow-lg border border-gray-200 rounded-full items-center gap-3 mx-auto mt-4'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full px-4 py-3 rounded-full md:rounded-l-full'
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="bg-gradient-to-r from-[#6A38C2] to-[#8E5DE8] hover:from-[#8E5DE8] hover:to-[#6A38C2] text-white rounded-full md:rounded-r-full px-5 py-3 transition-all flex items-center justify-center"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
