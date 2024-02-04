/* eslint-disable react/prop-types */
import React, { useState } from 'react'



export default function Post({ obj, handleClick, flag, comment }) {


    return (
        <>


            <div className='border border-white hover:border-black transition-transform duration-100 hover:-translate-y-0.5 flex flex-col p-5 rounded-xl w-2/3 sm:w-2/5 ease-linear '>

                <div className='flex flex-col sm:flex-row self-start gap-6 items-center sm:mb-6'>
                    <img className='rounded-full w-10  h-10' src={obj?.channel.image} />

                    <div className='flex flex-col'>
                        <h1 className='text-white text-center sm:mb-4 text-xl text-bold'>{obj?.title}</h1>
                        <p className='text-gray-400 text-center mb-3 text-sm'>By: {obj?.author.name}</p>
                    </div>

                </div>

                <p className='text-white text-center self-center mb-3 sm:mb-8'>{obj?.content}</p>
                <div className='flex flex-col sm:flex-row  text-white justify-between'>
                    <div className='flex justify-center flex-col sm:flex-row sm:gap-4 mb-3  items-center'>
                        <img className='rounded-full w-8  h-8' src={obj?.images} />
                        <p className='text-center text-emerald-500'>channel: {obj?.channel.name}</p>
                    </div>
                    <div className='flex justify-center flex-col mb-3 sm:flex-row sm:gap-2 items-center text-red-500 cursor-pointer'>
                        <p onClick={() => handleClick(obj._id, "like")}>Likes: {obj?.likeCount}</p>
                        <p onClick={() => handleClick(obj?._id, "comment")}>comments: {obj?.commentCount}</p>
                    </div>
                </div>
                {comment && <div>
                    <p className='text-red-500'>Comments :</p>
                    <div><p className='text-white'>Lorem ipsum dolor sit amet!</p></div>
                </div>}
            </div>

        </>
    )
}
