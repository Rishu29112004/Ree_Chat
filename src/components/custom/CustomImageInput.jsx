import { Upload } from 'lucide-react'
import React, { useRef } from 'react'

const CustomImageInput = ({ onChange }) => {

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div onClick={handleClick} className=' h-40 w-full flex flex-col justify-center items-center '>
            <Upload className='h-24 w-24' />
            <p className='text-slate-400'>Select photos or video MAX (4Mb)</p>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*, video/*"
                onChange={onChange}
                className="hidden"
            />
        </div>
    )
}

export default CustomImageInput