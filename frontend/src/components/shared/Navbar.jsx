import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '../../utils/constant'
import axios from 'axios'
import { setUser } from '../../redux/authSlice'

const Navbar = () => {
  const {user}=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandler=async()=>{
    try {
      const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message)

      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16 relative px-4'>
        {/* Logo */}
        <div>
          <h1 className="flex items-baseline font-extrabold tracking-tight">
            <span className="text-6xl text-gray-900 drop-shadow-sm" style={{ fontFamily: 'DM Serif Display' }}>J</span>
            <span className="text-3xl text-gray-800 ml-1" style={{ fontFamily: 'Poppins' }}>ob</span>
            <span className="text-6xl bg-gradient-to-r from-[#6A38C2] via-indigo-600 to-purple-800 text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(106,56,194,0.5)] ml-3" style={{ fontFamily: 'Space Grotesk' }}>
              S
            </span>
            <span className="text-3xl bg-gradient-to-r from-[#6A38C2] via-indigo-600 to-purple-800 text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(106,56,194,0.5)]" style={{ fontFamily: 'Poppins' }}>
              pace
            </span>
          </h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
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
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className='cursor-pointer'>
                      <AvatarImage src={user?.profile?.profilePhoto} />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user?.fulllname}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.prfile?.bio}</p>
                    </div>
                  </div>
                  <div className='flex flex-col my-2 text-gray-600 '>
                    <div className='flex w-fit items-center gap-2 cursor'>
                      <User2 />
                      <Button variant="link" ><Link to="/profile"> View Profile </Link></Button>
                    </div>
                    <div className='flex w-fit items-center gap-2 cursor'>
                      <LogOut />
                      <Button variant="link" onClick={logoutHandler}>Logout</Button>
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
