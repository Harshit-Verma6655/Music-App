import React, { useState } from 'react'
import Card from '../components/Card'
import  {musics} from '../api/MusicList'
import { useEffect } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from '../context/UserContext';
export default function Library() {
    let [localMusicList, setmusicList]=useState();
    let {user, footer,handleFooter, render}=useUserContext();
useEffect(  ()=>{

   let arr=JSON.parse(localStorage.getItem('songs'));
   setmusicList(arr);
   handleFooter(false);
    
},[render])
  return (


    <>
    <div className='bg-gray-900  w-full box-border p-2 flex justify-center  flex-wrap overflow-scroll overflow-x-hidden  hero absolute mt-48 sm:mt-24 ' style={{minHeight:"83vh"}}  >
        {localMusicList?.map(obj=><Card key={obj._id} obj={obj}/>)}
 
    </div>
   {footer && <Footer/>}
    
    
    
    
    </>
  )
}
