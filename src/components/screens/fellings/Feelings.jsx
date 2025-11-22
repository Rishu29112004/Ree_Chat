import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const emojiMoodData = [
  { id: 1, name: "Happy", icon: "😊" },
  { id: 2, name: "Loved", icon: "😍" },
  { id: 3, name: "Lovely", icon: "🥰" },
  { id: 4, name: "Excited", icon: "😄" },
  { id: 5, name: "Crazy", icon: "🤪" },
  { id: 6, name: "Blissful", icon: "😇" },
  { id: 7, name: "Dilly", icon: "😜" },
  { id: 8, name: "Blessed", icon: "😇" },
  { id: 9, name: "Sad", icon: "😢" },
  { id: 10, name: "Thankful", icon: "😊" },
  { id: 11, name: "In love", icon: "🥰" },
  { id: 12, name: "Grateful", icon: "🤗" },
  { id: 13, name: "Fantastic", icon: "😎" },
  { id: 14, name: "Festive", icon: "🎉" },
];

const Feelings = () => {
  const [selectEmoji, setSelectEmoji] = useState(null);

  const handleSelect = (emoji) => {
    setSelectEmoji(emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectEmoji) {
      alert("Please select how you feel 😊");
      return;
    }

    const payload = {
      id: Date.now(),
      selectEmoji: selectEmoji,
      type: "feeling",
      likeCount: 0,
      comment: [],
      createdAt: new Date().toISOString()
    };

    const oldFeelings = JSON.parse(localStorage.getItem("postData")) || [];
    const updatedFeelings = [payload, ...oldFeelings];
    localStorage.setItem("postData", JSON.stringify(updatedFeelings)); // ✅ corrected key

    toast.success(`Feeling "${selectEmoji.name}" saved! ✅`);
    setSelectEmoji(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl h-[500px]"
    >
      <div className="flex flex-col justify-self-center w-full gap-4 p-5 h-full">
        {/* Header */}
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-[#0CAF60]"
            src="https://storage.googleapis.com/clean-finder-353810/$jGBQARSkY4ASOM5atg3iuZV5KjlNABR7hQxJw4HKr5WMHD02SkP5OD.jpeg"
            alt="User Avatar"
          />
          <p className="font-bold font-mono text-lg text-green-500">
            How are you feeling today?
          </p>
        </div>

        <hr className="border-gray-400" />

        {/* Emoji Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-5 py-4">
          {emojiMoodData.map((item) => {
            const isSelected = selectEmoji?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`flex flex-col lg:flex-row items-center justify-center cursor-pointer border rounded-md gap-1 p-2 transition-all
                  ${isSelected
                    ? "bg-[#0CAF60] text-white border-[#0CAF60]" // ✅ stays green when selected
                    : "bg-gray-50 text-[#0CAF60] border-gray-300 hover:bg-[#0CAF60]/10 hover:text-[#0CAF60]"
                  }`}
              >
                <p className="p-1 text-2xl">{item.icon}</p>
                <p className="font-mono hidden md:block">{item.name}</p>
              </div>
            );
          })}
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="font-mono rounded-md cursor-pointer p-2 text-xl bg-green-500 text-white border-gray-400 border w-full hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Feelings;
