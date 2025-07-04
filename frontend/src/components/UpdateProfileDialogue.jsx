import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import axios from 'axios'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {USER_API_END_POINT} from "../utils/constant.js"

const UpdateProfileDialogue = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch();
  const { user } = useSelector(store => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map(skill => skill) || "",
    file: user?.profile?.resume
  })

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
      formData.append("file",input.file);
    }

    try {
      const res=await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
        headers:{
          'Content-Type':"multipart/form-data"
        },
        withCredentials:true
      })
      if(res.data.success){
        dispatch(setUser(res.data.user));
        
      }
    } catch (error) {
      
    }
  }


  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogContent
          className="sm:max-w-[500px] rounded-2xl shadow-xl border border-gray-200"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800 mx-auto">Update Profile</DialogTitle>
          </DialogHeader>

          <form onSubmit={submitHandler}>
            <div className="grid gap-5 py-4">

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-sm text-gray-700 font-medium">Name</Label>
                <Input
                  id="name"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  type="text"
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#6A38C2]"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-sm text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email"
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#6A38C2]"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right text-sm text-gray-700 font-medium">Number</Label>
                <Input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#6A38C2]"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right text-sm text-gray-700 font-medium">Bio</Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#6A38C2]"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right text-sm text-gray-700 font-medium">Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#6A38C2]"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right text-sm text-gray-700 font-medium">Resume</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={fileChangeHandler}
                  className="col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300
                    file:mr-4 file:py-1 file:px-2 file:border-0 file:rounded
                    file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition"
                />
              </div>
            </div>

            <DialogFooter>
              {
                loading ? (
                  <Button disabled className="w-full my-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    onClick={() => setLoading(true)}
                    className="w-full my-4 bg-[#6A38C2] hover:bg-[#5f32ad] text-white font-semibold text-sm py-2 rounded-xl transition"
                  >
                    Update
                  </Button>
                )
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialogue;
