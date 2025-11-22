import { Heart, Image, Info, Mic, Phone, Send, SmilePlus, Sticker, Video } from 'lucide-react'
import React, { useState } from 'react'
import CommentLogic from '../../comment-section/CommentLogic'
import { useParams } from 'react-router-dom'
import { ProfilePageData } from "../../ProfileDetails/ProfilePageData";

const MessageSection = () => {

    const {id}=useParams()
    const contact = ProfilePageData.find(c => c.id === Number(id));

    const [inputMessage,setInputMessage]=useState("")
    const [messageData,setMessageData]=useState([])
    const handleSendMessage=(e)=>{
        setMessageData([...messageData,inputMessage])
        setInputMessage("")
    }

    const handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className='h-full w-full'>
            <div className='flex flex-col h-full'>

                {/*Top section of chat*/}
                <div className='bg-gray-200 h-[60px] sticky top-0 w-full flex justify-between px-4'>
                    <div className='flex items-center gap-5'>
                        <img className='h-12 w-12  rounded-full ' src={contact?.profileImg} alt="" />
                        <p className='font-mono text-2xl font-bold'> {contact?.name}</p>
                    </div>
                    <div className='flex items-center gap-5 text-green-500'>
                        <Phone className='' />
                        <Video />
                        <Info />
                    </div>
                </div>

                {/* Chat messages scroll area */}
                <div className="flex-1 bg-white p-4 overflow-y-auto">
                    {messageData.map((t,index)=>(
                        <div key={index} className='w-full flex justify-end mb-3'>
                            <p className="bg-green-300 text-black p-2 rounded-xl max-w-[60%] shadow-md whitespace-pre-wrap wrap-break-word">{t}</p>
                            </div>
                    ))}
                </div>
                {/*message type section*/}
                <div className='flex h-[60px] px-4 gap-4 bg-gray-200 items-center justify-between'>
                    <div className='flex w-[10%] gap-4 justify-around'>
                        <Mic className='text-green-500 h-8 w-8' />
                        <Image className='text-green-500 h-8 w-8' />
                        <Sticker className='text-green-500 h-8 w-8' />
                    </div>
                    <div className='flex justify-between z-50 rounded-full items-center p-2 px-5 border-2 border-gray-500 w-[90%]'>
                        <input
                        value={inputMessage}
                        onKeyDown={handleKeyPress}
                        onChange={(e)=>setInputMessage(e.target.value)}
                            className='text-xl w-full outline-none border-none focus:outline-none'
                            placeholder='message'
                            type="text" />
                        <div>
                            <Send onClick={handleSendMessage} className='text-green-500'/>
                        </div>
                    </div>
                    <div className='text-green-500 w-[5%] flex gap-2 items-center justify-center'>
                        <Heart className='text-green-500 h-8 w-8' />
                        <SmilePlus className='text-green-500 h-8 w-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSection
