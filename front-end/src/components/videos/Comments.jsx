import React, { useState } from 'react'
import profieImage from './../../assets/me.png'


const Comments = () => {
    const [newComment, setNewComment] = useState("")

    const addNewComment = (e) => {
        setNewComment(e.target.value)
    }

    return (
    <div className='h-[5vh] dark:text-neutral-100'>
        <div className='py-6'>Comments</div>
        <div className='flex h-14 justify-center items-center'>
        <img className='w-11 h-11 rounded-full bg-neutral-100' src={profieImage} alt=""/>
        <input onChange={addNewComment} name="newComment" value={newComment} placeholder='Add a comment...' className='w-[90%] ml-4 dark:bg-neutral-900 border-b border-neutral-700 outline-none focus:border-neutral-100 focus: transition focus:ease-linear placeholder:dark:text-neutral-400/75 pb-1'/>
        </div>
        <div className='w-[100%] flex justify-end pr-6 gap-6'>
        <button>Cancel</button>
        <button className='w-24 h-9 text-sm bg-sky-500/[100%] shadow-lg text-neutral-900 font-semibold disabled:dark:text-neutral-400/75 disabled:dark:bg-neutral-800 rounded-full' disabled={!newComment}>Comment</button>
        </div>
    </div>
  )
}

export default Comments