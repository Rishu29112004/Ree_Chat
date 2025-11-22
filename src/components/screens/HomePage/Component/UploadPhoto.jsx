import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "../../../custom/Button";
import FileInput from "../../../custom/FileInput";

const UploadPhoto = ({setPic}) => {
    const [filePreview, setFilePreview] = useState(null);
    const [fileType, setFileType] = useState("");
    const [caption, setCaption] = useState("");
    const [showFile, setShowFile] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileType(file.type);

            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result);
                setShowFile(true); // ✅ now this hides the upload input
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!caption || !filePreview) {
            alert("Please add a description and select a file before submitting!");
            return;
        }

        const payload = {
            id: Date.now(),
            caption: caption,
            previewUrl: filePreview,
            fileType: fileType,
            type: "upload",
            likeCount: 0,
            createdAt: new Date().toISOString(),
            comment: [],
            saved:false
        };

        const oldPosts = JSON.parse(localStorage.getItem("postData")) || [];
        const updatedPosts = [payload, ...oldPosts];
        localStorage.setItem("postData", JSON.stringify(updatedPosts));
        setPic(false)
        setCaption("");
        setFilePreview(null);
        setFileType("");
        setShowFile(false); 
        alert("Post saved successfully ✅");

    };


    return (
        <form className="w-[800px] h-[400px] " onSubmit={handleSubmit}>
            <div className="flex flex-col justify-self-center w-full gap-4 p-5  h-full">
                {/* Profile Section */}
                <div className="flex items-center gap-2">
                    <img
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-[#0CAF60]"
                        src="https://storage.googleapis.com/clean-finder-353810/$jGBQARSkY4ASOM5atg3iuZV5KjlNABR7hQxJw4HKr5WMHD02SkP5OD.jpeg"
                        alt="Neon Avatar"
                    />
                    <p className="font-bold font-mono text-lg ">
                        Upload Picture or Videos here
                    </p>
                </div>

                <hr className="border-gray-400" />

                <div className="flex flex-col gap-2">
                    <p className="font-mono text-xl">Description</p>
                    <textarea
                        placeholder="Describe your post..."
                        onChange={(e) => setCaption(e.target.value)}
                        className="outline-none"
                    />

                    <h3 className="font-mono text-xl">Select Photo to Upload</h3>
                    <FileInput  showFile={showFile} onChange={handleFileChange} filePreview={filePreview} fileType={fileType} setShowFile={setShowFile} />
                </div>

                {/* Submit */}
                <Button type={"submit"} className="" buttonName={"post"}/>
            </div>
        </form>
    );
};

export default UploadPhoto;
