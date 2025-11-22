import { BookMarked, Ellipsis, MessageCircle, ThumbsUp, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PostSection = ({ setOpenCommentModal, setCommentId, setSavedPost }) => {
  const [posts, setPosts] = useState([]);
  const [showDelete, setShowDelete] = useState(false)

  useEffect(() => {
    const post = JSON.parse(localStorage.getItem("postData")) || [];
    setPosts(post);
  }, []);



  const handleDeletePost = (index) => {
  const updatedPosts = posts.filter((_, i) => i !== index);
  setPosts(updatedPosts);
  localStorage.setItem("postData", JSON.stringify(updatedPosts));
  setShowDelete(null);
};


  return (
    <div className="flex flex-col gap-4">
      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Post Header */}
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
            <div className=" flex relative items-center gap-2">
              <button className="p-1 relative hover:bg-gray-100 rounded-full transition-colors">
                <Ellipsis onClick={()=>setShowDelete((prev) => prev === index ? null : index)} className="text-gray-600" size={20} />
              </button>
              {showDelete === index && (
                <div onClick={() => handleDeletePost(index)} className='bg-gray-100 shadow-md px-3 py-1 cursor-pointer hover:text-red-500 text-center rounded-md absolute right-8'>
                  <p className='font-medium'>Delete</p>
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          <p className="px-4 py-2 text-lg ">{post.caption}</p>
          {post.type === "feeling" ? (
            <div className="h-20 flex items-center justify-center text-2xl">
              {post.selectEmoji.name} {post.selectEmoji.icon}
            </div>
          ) : post.type === "post" ? (
            <div className="w-full">
              {post.fileType?.startsWith("image/") ? (
                <img
                  src={post.previewUrl}
                  className="w-full h-auto max-h-[500px] object-cover"
                  alt="Post content"
                />
              ) : post.fileType?.startsWith("video/") ? (
                <video controls className="w-full h-auto max-h-[500px] object-cover">
                  <source src={post.previewUrl} type={post.fileType} />
                </video>
              ) : (
                <div className="text-gray-500 text-center py-4">Unsupported file type</div>
              )}
            </div>
          ) : (
            <div className=" flex h-20 items-center justify-center text-2xl">{post.text}</div>
          )}


          {/* Post Actions */}
          <div className="flex items-center justify-around py-3 border-t border-gray-300 bg-gray-100">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
              <ThumbsUp className="text-green-500" size={20} />
              <p className="font-mono font-semibold text-gray-700">
                {post.likeCount} Like
              </p>
            </button>

            <button
              onClick={() => {
                setOpenCommentModal(true);
                setCommentId(post.id)
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
              <MessageCircle className="text-green-500" size={20} />
              <p className="font-mono font-semibold text-gray-700">Comment</p>
            </button>

            <button
              onClick={() => {
                setSavedPost(post.id)

              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center"
            >
              <BookMarked className="text-green-500" size={20} />
              <p className="font-mono font-semibold text-gray-700">Save</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
