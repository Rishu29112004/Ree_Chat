import React from 'react'
import Navbar from '../custom/Navbar'
import MessageSection from '../screens/HomePage/Component/MessageSection'
import Contacts from '../screens/HomePage/Component/Contacts'

const MessageLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            <div className='flex flex-1 overflow-hidden'>
                <div className='flex-1 h-full'>
                    <MessageSection />
                </div>
                <div className='w-[320px] border-l'>
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default MessageLayout
