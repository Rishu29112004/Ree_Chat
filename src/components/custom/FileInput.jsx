import React from 'react'
import CustomImageInput from './CustomImageInput'
import { Trash2, X } from 'lucide-react'

const FileInput = ({ filePreview, fileType, onChange, showFile ,setShowFile }) => {
    return (
        <div className='border border-dotted bg-slate-100 rounded-lg p-4'>
            {!showFile ? (
                <div>
                    <CustomImageInput onChange={onChange} />
                </div>
            ) : (
                <div className='flex justify-center items-center relative'>
                    <Trash2 onClick={()=>setShowFile(false)} className="text-red-500 absolute right-2 top-2"/>
                    {fileType.startsWith("image/") ? (
                        <img
                            src={filePreview}
                            alt="Preview"
                            className="w-[150px] h-[150px] object-cover rounded-lg border"
                        />
                    ) : (
                        <video
                            controls
                            className="w-[200px] h-[200px] object-cover rounded-lg border"
                        >
                            <source src={filePreview} type={fileType} />
                        </video>
                    )}
                </div>
            )}
        </div>
    )
}

export default FileInput
