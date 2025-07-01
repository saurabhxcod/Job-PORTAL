import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner"
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading ,setUser} from '../../redux/authSlice';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
        finally {
            dispatch(setLoading(false));
        }

    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">

            <Navbar />

            <div className="flex items-center justify-center px-4 py-10">
                <form
                    onSubmit={submitHandler}
                    className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(106,56,194,0.3)] p-8 space-y-6 border border-gray-200"
                >

                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Login to <span className="text-purple-600">JobNexus</span>
                    </h1>
                    <p className="text-center text-sm text-gray-500">
                        "Access your career dashboard and stay ahead in your job hunt."
                    </p>


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
                                    <input type="radio" name="role" value="student" checked={input.role === 'student'} onChange={changeEventHandler} className="accent-purple-600" />
                                    <span className="text-sm text-gray-700">Student</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="role" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} className="accent-purple-600" />
                                    <span className="text-sm text-gray-700">Recruiter</span>
                                </label>
                            </div>
                        </div>

                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait</Button> : 
                        <Button
                            type="submit"
                            className="w-full bg-[#6A38C2] hover:bg-[#582f9d] text-white font-medium py-2 rounded-xl shadow-lg"
                        >
                            Login
                        </Button>
                    }




                    <p className="text-sm text-center text-gray-600">
                        Don't  have an account?
                        <Link to="/signup" className="text-purple-600 font-medium ml-1 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
