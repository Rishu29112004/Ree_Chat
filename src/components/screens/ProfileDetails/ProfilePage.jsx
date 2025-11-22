import { Ellipsis, House, MapPin, UserLock } from 'lucide-react'
import { useParams } from 'react-router-dom';
import { ProfilePageData } from './ProfilePageData';
const ProfilePage = () => {

    const { id } = useParams(); // Assuming the route is defined as path="/products/:id"


    const userdata = ProfilePageData.find((profile) => profile.id === Number(id))
    console.log(userdata)
    return (
        <div className='min-h-screen w-full bg-white'>
            <div className='shadow-xl shadow-black'>
                <div className='relative '>
                    <img className='w-full h-80 object-cover' src={userdata.coverImg} alt="" />
                    <div className='absolute left-20 -translate-y-1/2'>
                        <img className='rounded-full w-40 h-40 ' src={userdata.profileImg} alt="" />
                    </div>
                    <div className='relative left-70 top-2'>
                        <div>
                            <p className='font-bold font-mono text-3xl'>{userdata.name}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='font-mono font-bold text-md'>{userdata.followers}<span className='ml-1 font-medium'>followers</span></p>
                            <p className='font-mono font-bold text-md'>{userdata.following}1<span className='ml-1 font-medium'>following</span></p>
                        </div>
                    </div>
                    <div className='relative left-2/3 flex gap-5'>
                        <button className='font-mono w-30 font-bold text-md  rounded-md px-2 py-1 text-white cursor-pointer bg-green-500'>Add friend</button>
                        <button className='font-mono w-30 font-bold text-md  rounded-md px-2 py-1 cursor-pointer bg-gray-300'>Message</button>
                    </div>
                    <hr className='mt-6 w-[88%] mx-auto ' />
                </div>
                <div className='w-full flex items-center justify-between py-4 p-20'>
                    <div className='flex items-center gap-5'>
                        <p className='rounded-md px-1 py-1 font-medium font-mono cursor-pointer bg-gray-300'>Posts</p>
                        <p className='rounded-md px-1 py-1 font-medium font-mono cursor-pointer bg-gray-300'>About</p>
                        <p className='rounded-md px-1 py-1 font-medium font-mono cursor-pointer bg-gray-300'>Friends</p>
                        <p className='rounded-md px-1 py-1 font-medium font-mono cursor-pointer bg-gray-300'>Photos</p>
                    </div>
                    <div>
                        <button className=' px-3 py-1 rounded-md bg-gray-300'><Ellipsis /></button>
                    </div>
                </div>
            </div>
            <div className='flex justify-around gap-5 bg-gray-100 pt-5 '>
                <div className='border rounded-md border-gray-300 shadow-sm shadow-black/50 w-[40%] bg-white h-fit p-1'>
                    <div className='px-2'>
                        <p className='font-bold text-xl'>Intro</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p>{userdata.intro}</p>
                        <hr className='border-gray-300 mt-2 w-[90%]' />
                    </div>
                    <div className='flex flex-col py-2 px-1'>
                        <div className='flex items-center gap-2'>
                            <House className='h-5 w-5 text-gray-500' />
                            <p className='text-gray-800 font-mono'>Lives in <span className='text-black font-bold'>Solan</span></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin className='h-5 w-5 text-gray-500' />
                            <p className='text-gray-800 font-mono'>From <span className='text-black font-bold'>Madhya Pradesh, India</span></p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='border flex items-center rounded-md shadow-sm shadow-black/50 bg-white border-gray-300'>
                        <div className='flex gap-5'>
                            <div className='flex items-center p-6'>
                                <UserLock className='w-10 h-10' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='font-mono font-bold text-md'>{userdata.name} locked her profile</p>
                                <p>Only her friends can see what she shares on her profile.</p>
                            </div>
                        </div>

                    </div>
                    <div className='border rounded-md bg-white shadow-sm shadow-black/50 border-gray-300 p-3'>
                        <p className='font-bold ml-2 text-xl'>Posts</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-gray-500 font-bold text-xl'>No posts available</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProfilePage
