import { Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import CommentLogic from "./CommentLogic";

const CommentComponent = ({ commentId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("postData")) || [];
    setPosts(storedPosts);
  }, []);

  const filteredPost = posts.find((post) => post.id === commentId);

  if (!filteredPost) return <p>No post found</p>;

  return (
    <div className="w-full overflow-y-scroll max-h-[500px]">
      <div key={filteredPost.id}>
        <div className="flex items-center justify-between px-1 border-b border-gray-200">
          <div className="flex items-center gap-3 py-2">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-[#0CAF60]"
              src={"https://randomuser.me/api/portraits/women/65.jpg"}
              alt={"User"}
            />
            <div>
              <p className="font-mono font-semibold text-slate-800">Rishu</p>
              <p className="text-xs text-gray-500">{filteredPost.createdAt}</p>
            </div>
          </div>
        </div>

        {filteredPost.type === "feeling" ? (
          <div className="h-20 flex items-center justify-center text-2xl">
            {filteredPost.selectEmoji.name} {filteredPost.selectEmoji.icon}
          </div>
        ) : (
          <div className="w-full">
            {filteredPost.fileType?.startsWith("image/") ? (
              <img
                src={filteredPost.previewUrl}
                className="w-full max-h-[300px] object-cover"
                alt="Post content"
              />
            ) : filteredPost.fileType?.startsWith("video/") ? (
              <video controls className="w-full max-h-[300px] object-cover">
                <source src={filteredPost.previewUrl} type={filteredPost.fileType} />
              </video>
            ) : null}
          </div>
        )}

        <div className="border-t mt-4 border-gray-200">
          <CommentLogic commentList={filteredPost.comments || []} postId={filteredPost.id} />
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
