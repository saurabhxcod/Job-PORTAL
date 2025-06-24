import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16 relative px-4'>
        {/* Logo */}
        <div>
          <h1 className="flex items-baseline font-extrabold tracking-tight">
            <span className="text-6xl text-gray-900 drop-shadow-sm" style={{ fontFamily: 'DM Serif Display' }}>J</span>
            <span className="text-3xl text-gray-800 ml-1" style={{ fontFamily: 'Poppins' }}>ob</span>
            <span className="text-6xl bg-gradient-to-r from-[#6A38C2] via-indigo-600 to-purple-800 text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(106,56,194,0.5)] ml-3" style={{ fontFamily: 'Space Grotesk' }}>
              N
            </span>
            <span className="text-3xl bg-gradient-to-r from-[#6A38C2] via-indigo-600 to-purple-800 text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(106,56,194,0.5)]" style={{ fontFamily: 'Poppins' }}>
              exus
            </span>
          </h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"><Button variant='outline'>Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">SignUp</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className='cursor-pointer'>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Saurabh Singh</h4>
                      <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='flex flex-col my-2 text-gray-600 '>
                    <div className='flex w-fit items-center gap-2 cursor'>
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className='flex w-fit items-center gap-2 cursor'>
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>

                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
