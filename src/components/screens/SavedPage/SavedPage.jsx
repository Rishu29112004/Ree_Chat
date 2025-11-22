import React, { useEffect, useState } from 'react'
import { BookMarked, Ellipsis, MessageCircle, ShieldOff, ThumbsUp } from 'lucide-react'

const SavedPage = ({ Idx }) => {
    const [savedpost, setSavePost] = useState(Idx || []);

    useEffect(() => {
        const savedId = JSON.parse(localStorage.getItem("savedPosts")) || [];
        const allPosts = JSON.parse(localStorage.getItem("postData")) || [];


        const savedPosts = allPosts.filter((post) => savedId.includes(post.id));
        setSavePost(savedPosts)

    }, []);

    const handleUnsaved = (id) => {
        const unSavedId = JSON.parse(localStorage.getItem("savedPosts") || [])
        const updatedID = unSavedId.filter((unSaved) => unSaved !== id)
        localStorage.setItem("savedPosts", JSON.stringify(updatedID))
        setSavePost(prev => prev.filter(past => past.id !== id))
    }

    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <div className='flex w-full mb-3'>
                    <p className="font-mono text-green-500 font-bold text-lg">Saved</p>
                </div>
                {savedpost.map((post, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">

                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-[#0CAF60]"
                                    src={"https://randomuser.me/api/portraits/women/65.jpg"}
                                    alt={"User"}
                                />
                                <div>
                                    <p className="font-mono font-semibold text-slate-800">{"Rishu"}</p>
                                    <p className="text-xs text-gray-500">{post?.createdAt}</p>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                                <Ellipsis className="text-gray-600" size={20} />
                            </button>
                        </div>

                        {
                            post.type === "feeling" ?
                                <>
                                    <div className="p-4 text-center">
                                        <p className="text-xl">{post?.selectEmoji?.icon} {post?.selectEmoji?.name}</p>
                                    </div>
                                </> :
                                <>
                                    <p className="px-4 py-2 text-lg">{post.caption}</p>

                                    {post.fileType?.startsWith("image/") ? (
                                        <img src={post.previewUrl} className="w-full h-auto max-h-[500px] object-cover" alt="Post" />
                                    ) : post.fileType?.startsWith("video/") ? (
                                        <video controls className="w-full h-auto max-h-[500px] object-cover">
                                            <source src={post.previewUrl} type={post.fileType} />
                                        </video>
                                    ) : null}
                                </>
                        }


                        <div className="flex items-center justify-around py-3 border-t border-gray-300 bg-gray-100">
                            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg flex-1 justify-center">
                                <ThumbsUp className="text-green-500" size={20} />
                                <p className="font-mono font-semibold text-gray-700 hover:text-green-500 cursor-pointer">
                                    {post.likeCount} Like
                                </p>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg flex-1 justify-center">
                                <MessageCircle className="text-green-500" size={20} />
                                <p className="font-mono font-semibold text-gray-700 hover:text-green-500 cursor-pointer">Comment</p>
                            </button>
                            <button
                                onClick={() => handleUnsaved(post.id)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors flex-1 justify-center"
                            >
                                <ShieldOff className="text-green-500" size={20} />
                                <p className="font-mono font-semibold text-gray-700 hover:text-green-500 cursor-pointer">Unsave</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedPage;
