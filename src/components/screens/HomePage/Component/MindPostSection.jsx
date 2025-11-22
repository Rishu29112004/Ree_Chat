import React, { useState } from 'react'
import Button from '../../../custom/Button'
import { comment } from 'postcss'
import toast from 'react-hot-toast'

const MindPostSection = () => {

    const [inputValue,setInputValue]=useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!inputValue){
            alert("Please write your thoughts🙂")
            return;
        }
    

    const payload={
        id:Date.now(),
        type:"mind",
        likeCount:0,
        comment:[],
        text: inputValue,
        createdAt:new Date().toISOString()
    }

    const oldMind=JSON.parse(localStorage.getItem("postData"))||[];
    const updatedMind=[payload,...oldMind]
    localStorage.setItem("postData",JSON.stringify(updatedMind))

    toast.success("saved!")
    setInputValue("")
}
  return (
    <form 
    onSubmit={handleSubmit}
    className='w-full mt-2'>
      <div className='flex flex-col gap-3'>
          <h1 className='flex py-2 items-center justify-center font-bold'>What's on your mind, Rishu?</h1>
        <input 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        className='border rounded-md px-2 py-2 border-gray-300'
        placeholder='Write here...'
        type="text" />
        <Button type="submit" buttonName="Add" className=""/>
      </div>
    </form>
  )
}

export default MindPostSection
