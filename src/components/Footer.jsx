import React, { useEffect, useState } from 'react'
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useUserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { Player } from './Player';

export default function Footer() {
    let {user, currsong}=useUserContext();
    let{render, setRender}=useUserContext();
    let added=false;
    
    
      let arr=JSON.parse(localStorage.getItem('songs'))||[];
      arr.map((obj)=>{
        if(currsong._id===obj._id){
         added=true;
          return;
        }
      });

     let handleRemove=()=>{

      let arr=JSON.parse(localStorage.getItem('songs'))||[];
      let updatedArr=arr.filter((obj)=>{
        return currsong._id!==obj._id
      })
      added=false;
      
     
      localStorage.setItem('songs',JSON.stringify(updatedArr));
      setRender(!render);

     }
    

    let handleSave=()=>{
      let arr=JSON.parse(localStorage.getItem('songs'))||[];
      arr.map((obj)=>{
        if(currsong._id===obj._id){
         added=true;
          return;
        }
      })
      if(added)
      return;


      let updatedArr=[...arr, currsong];
     
      localStorage.setItem('songs',JSON.stringify(updatedArr));
      setRender(!render);
    }
  return (
    <div className=' bg-red-500 w-screen sm:flex fixed bottom-0'>
        
       <div className='flex gap-1 pt-2 pl-2 pb-1 justify-start  items-center '>

        <img style={{width:"70px"}}src={currsong.thumbnail}/>
        {user?.token?<div className='flex-col'>
        <p className='text-white text-center text-sm'>{currsong.title} </p>
        <p className='text-gray-600 text-center text-xs'>{currsong.artist[0]?.name}</p>
        </div>:<p className='text-white'>Please Sign up First</p>}
        {/* {user?.token &&<PauseCircleFilledIcon style={{fontSize:"36px", color:"white"}}/>} */}
       


        {user?.token ? <Player />
        :<button className='text-blue ml-2 underline'><Link to={'/signup'}>signup here</Link></button>}
      {added && user?.token ?<FavoriteIcon className='text-white' onClick={handleRemove} />: user?.token && <FavoriteBorderIcon className='text-white ' onClick={handleSave}/>}
       
</div>
    </div>
  )
}
