import React from 'react'

const Button = ({type,buttonName,className}) => {
    return (
        <div className="flex items-center justify-center">
            <button
                type={type}
                className={`${className} font-mono mb-4 cursor-pointer rounded-md p-2 text-xl bg-green-500 text-white border-gray-400 border w-full`}
            >
               {buttonName}
               
            </button>
        </div>
    )
}

export default Button