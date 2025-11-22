import React from 'react'
import { ProfilePageData } from '../ProfileDetails/ProfilePageData'
import { useNavigate } from 'react-router-dom'

const FriendsPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <div className='flex items-center justify-between pb-4'>
                    <p className='text-green-500 font-bold text-lg'>People you may know</p>
                    <button className='text-black text-lg font-mono'>See all</button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {ProfilePageData.map((t, index) => (
                        <div  key={t.id} className='border cursor-pointer bg-white hover:shadow-lg hover:shadow-black/50 border-gray-300 rounded-md shadow-md overflow-hidden'>
                            <div>
                                <img onClick={()=>navigate(`/friend/${t.id}`)} className='h-[200px] w-full object-cover' src={t.profileImg} alt="" />
                                <p className='font-bold pt-2 px-4'>{t.name}</p>
                            </div>
                            <div className='flex flex-col items-center w-full justify-around gap-2 p-2'>
                                <button className=' bg-green-100 cursor-pointer font-bold p-1 text-green-500 font-mono w-full rounded-md'>Add friend</button>
                                <button className=' bg-gray-200 cursor-pointer font-bold p-1 font-mono rounded-md w-full'>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center pt-4'>
                    <button className='bg-green-500 border px-5 font-mono font-semibold text-lg py-1 rounded-md text-white'>More</button>
                </div>
            </div>
        </div>
    )
}

export default FriendsPage