/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


export default function Modal({handleClick}) {

  return (
   <>
   <div className='flex items-center fixed z-20 justify-center bg-black bg-opacity-60 h-screen w-screen '>
    <div className='bg-white p-8 flex justify-center items-center flex-col px-3 rounded-lg'>
    <h3 className='font-bold'>You need to login to like this post.</h3>
    <p className='my-3 flex-col flex sm:block justify-center items-center' ><span>if you don't have an account.you can</span> <Link to={"/signup"}><button className='bg-blue-700 p-1 rounded text-white px-2 my-2  '>sign up here</button></Link></p>
    <div className='mt-3'><button className='bg-blue-700 p-1 rounded text-white px-2' onClick={()=>handleClick()}>close</button></div>


    </div>


   </div>
   
   </>
  )
}
