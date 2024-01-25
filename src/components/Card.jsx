import React from 'react'
import { useUserContext } from '../context/UserContext'

export default function Card({obj}) {
    let {handleFooter}=useUserContext();
  return (
    <div className='mt-3 p-5 flex flex-col items-center cursor-pointer   hover:bg-black rounded-lg'  style={{width:"220px",height:"260px"}} onClick={()=>handleFooter(true, obj)}>
    <img className="rounded-lg"style={{width:"150px", height:"150px"}}src={obj.thumbnail}/>
    <p className='text-white text-center'>{obj.title} </p>
    <p className='text-gray-400 text-center text-xs'>{
    obj?.artist.map(item=>item.name).join(" & ")
    }</p>


    </div>
  )
}





// 
