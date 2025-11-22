import React, { useEffect, useState } from "react";
import { Ellipsis, MessageCircle, Send, ThumbsUp } from "lucide-react";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/videos/search?query=nature&per_page=10",
          {
            headers: {
              Authorization: "1ukROwIaYlvfX5J6HZRJMG785DABxvwWRniqvghpNsHhR0EgI4yTHq5S", // 👈 Replace with your Pexels API key
            },
          }
        );

        const data = await response.json();
        if (data.videos) {
          setVideos(data.videos);
        } else {
          console.error("No videos found", data);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-green-500 font-bold text-lg">Loading videos...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="font-mono text-green-500 font-bold text-lg">Video</p>

        <div className="py-5 flex flex-col gap-5">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="flex shadow-md shadow-black/50 bg-white flex-col w-full rounded-md">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-2 my-2">
                    <img
                      className="w-10 h-10 rounded-full shadow-sm shadow-[#0CAF60]"
                      src={video.user?.photo_url || "https://randomuser.me/api/portraits/lego/1.jpg"}
                      alt={video.user?.name || "User"}
                    />
                    <p className="font-mono">{video.user?.name || "Unknown"}</p>
                  </div>
                  <Ellipsis />
                </div>
{/* 
                <div className="mb-2 px-2">
                  <p className="max-w-3xl">{video.url}</p>
                </div> */}

                <div className="w-full flex items-center justify-center">
                  <video
                    src={video.video_files[0].link}
                    controls
                    autoPlay
                    loop
                    muted
                    className="h-[500px] w-full rounded-lg object-cover"
                  />
                </div>

                <div className="flex items-center justify-around gap-5 pl-5 py-4 w-full">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="text-green-500" size={20} />
                    <p className="font-mono font-semibold text-gray-700">Like</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="text-green-500" size={20} />
                    <p className="font-mono font-semibold text-gray-700">Comment</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Send className="text-green-500" size={20} />
                    <p className="font-mono font-semibold text-gray-700">Share</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center font-mono">No videos available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
