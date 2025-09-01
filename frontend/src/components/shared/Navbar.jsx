import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold transition-transform hover:scale-105">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === 'recruiter' ? (
              <>
                <li className="relative group">
                  <Link to="/admin/companies" className="transition-colors hover:text-[#F83002]">Companies</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F83002] transition-all group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <Link to="/admin/jobs" className="transition-colors hover:text-[#F83002]">Jobs</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F83002] transition-all group-hover:w-full"></span>
                </li>
              </>
            ) : (
              <>
                {["Home", "Jobs", "Browse"].map((item, idx) => (
                  <li key={idx} className="relative group">
                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="transition-colors hover:text-[#F83002]">{item}</Link>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F83002] transition-all group-hover:w-full"></span>
                  </li>
                ))}
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="transition-all hover:shadow-lg hover:scale-105">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] transition-all hover:shadow-lg hover:scale-105">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-[#6A38C2] transition-all duration-300">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 animate-in fade-in slide-in-from-top-2 duration-300 shadow-xl rounded-xl">
                <div className="p-2">
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-3 text-gray-600 gap-2">
                    {user && user.role === 'student' && (
                      <div className="flex items-center gap-2 hover:text-[#6A38C2] transition-colors">
                        <User2 size={18} />
                        <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      <LogOut size={18} />
                      <Button onClick={logoutHandler} variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
