import React, { use, useState } from 'react'
import { BookImage, Smile, Video } from 'lucide-react'
import HomePagePosts from './Component/PostSection'
import PopModal from '../../custom/PopModal'
import UploadPhoto from './Component/UploadPhoto'
import Feelings from '../fellings/Feelings'
import CommentComponent from '../comment-section/CommentComponent'
import SavedPage from '../SavedPage/SavedPage'
import MindPostSection from './Component/MindPostSection'

const HomePage = () => {

    const [thoughts, setThoughts] = useState("")
    const [isVideo, setIsVideo] = useState(false)
    const [pic, setPic] = useState(false)
    const [feel, setFeel] = useState(false);
    const [mind, setMind] = useState(false)
    const [openCommentModal, setOpenCommentModal] = useState(false)
    const [commentId, setCommentId] = useState(null);
    const [savedPosts, setSavedPosts] = useState([])

    const handleSavePost = (idx) => {
        const alreadySaved = savedPosts.some((p) => p.id === idx);
        if (!alreadySaved) {
            setSavedPosts([...savedPosts, idx]);
            localStorage.setItem("savedPosts", JSON.stringify([...savedPosts, idx]));
            alert("Post saved!");
        } else {
            alert("Already saved!");
        }
    };


    const LiveText = (
        <div className='w-[800px] h-[250px] flex items-center justify-center'>
            <p className='font-bold text-3xl text-green-500'>You will able to go live soon!😊</p>
        </div>
    )

    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                {/* Hero Section */}


                {/* Post Creation Box */}
                <div className='flex flex-col bg-white gap-3 shadow-lg rounded-lg mb-6'>
                    <div className='flex items-center  py-4 px-4 w-full gap-3'>
                        <img
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-[#0CAF60]"
                            src="https://storage.googleapis.com/clean-finder-353810/$jGBQARSkY4ASOM5atg3iuZV5KjlNABR7hQxJw4HKr5WMHD02SkP5OD.jpeg"
                            alt="Neon Avatar"
                        />
                        <button
                        onClick={()=>setMind(!mind)}
                            className="flex-1 px-4 py-2 md:py-3 rounded-full bg-gray-100 hover:bg-gray-200 hover:border-green-500 hover:border border hover:text-green-500 cursor-pointer"
                        >What's on your mind, Rishu?</button>
                    </div>


                    <div className='flex border-t flex-wrap items-center p-3 rounded-b-md border-gray-200 justify-around gap-2 md:gap-4 bg-gray-100'>
                        <div onClick={() => setIsVideo(!isVideo)} className='flex hover:border-green-500 border-gray-100 border items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors'>
                            <Video className='text-green-500' size={20} />
                            <p className="font-mono font-semibold text-gray-700">Live video</p>
                        </div>
                        <div className='flex hover:border-green-500 border-gray-100 border items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors' onClick={() => setPic(!pic)}>
                            <BookImage className='text-green-500' size={20} />
                            <p className="font-mono font-semibold text-gray-700">Photo/video</p>
                        </div>
                        <div className='flex hover:border-green-500 border-gray-100 border items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors' onClick={() => setFeel(!feel)}>
                            <Smile className='text-green-500' size={20} />
                            <p className="font-mono font-semibold text-gray-700">Feeling/activity</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 sticky top-16'>
                    <HomePagePosts setSavedPost={handleSavePost} setOpenCommentModal={setOpenCommentModal} setCommentId={setCommentId} />
                </div>

                {mind && <PopModal onCancel={setMind} Component={<MindPostSection />} heading={"Create post"} />}
                {isVideo && <PopModal onCancel={setIsVideo} Component={<LiveText />} heading={"video section"} />}
                {pic && <PopModal onCancel={setPic} Component={<UploadPhoto setPic={setPic} />} OnSubmit={setPic} heading={"Upload Data"} />}
                {feel && <PopModal onCancel={setFeel} Component={<Feelings />} OnSubmit={setFeel} />}
                {openCommentModal && <PopModal onCancel={setOpenCommentModal} Component={<CommentComponent commentId={commentId} />} heading={"Comment Section"} />}
            </div>
        </div>
    )
}
export default HomePage