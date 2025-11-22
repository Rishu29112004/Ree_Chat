import { Send } from "lucide-react";
import React, { useState } from "react";

const CommentLogic = ({ commentList = [], postId }) => {
  const [commentInput, setCommentInput] = useState("");
  const [commentData, setCommentData] = useState(commentList);

  const handleSetComment = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      value: commentInput,
    };

    const updatedComments = [...commentData, newComment];
    setCommentData(updatedComments);
    setCommentInput("");

    // Update localStorage
    const storedPosts = JSON.parse(localStorage.getItem("postData")) || [];
    const updatedPosts = storedPosts.map((post) =>
      post.id === postId ? { ...post, comments: updatedComments } : post
    );
    localStorage.setItem("postData", JSON.stringify(updatedPosts));
  };

  return (
    <div className="relative">
      <div className="p-2 py-4">
        {commentData.length === 0 ? (
          <p className="text-gray-400 text-sm">No comment yet — be the first!</p>
        ) : (
          commentData.map((t) => (
            <div key={t.id} className="flex items-center gap-3 p-1">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt=""
              />
              <p className="border px-2 rounded-md bg-gray-200 border-gray-300">
                {t.value}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center sticky bg-white bottom-0 border-gray-500 w-full h-auto border-2 px-4 rounded-md py-2 gap-2">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt=""
          />
        </div>
        <div className="relative w-full bg-gray-200">
          <input
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="w-full py-4 pl-5 outline-none focus:ring-1 focus:ring-green-500 rounded-md border"
            placeholder="Write your comment..."
          />
          <Send
            onClick={handleSetComment}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentLogic;
