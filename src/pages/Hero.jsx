import React, { useState } from 'react'
import Card from '../components/Card'
import  {musics} from '../api/MusicList'
import { useEffect } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from '../context/UserContext';
export default function Hero() {
    let [musicList, setMusicList]=useState();
    let {user, footer,handleFooter}=useUserContext();
useEffect(  ()=>{

    musics().then((data)=>{
      setMusicList(data);
        // console.log("data", data);
    });
    handleFooter(false);
   

    // 
},[])
  return (


    <>
    <div className='bg-gray-900 w-full  box-border p-2 flex justify-center  flex-wrap overflow-scroll overflow-x-hidden  hero absolute mt-48 sm:mt-24 ' style={{minHeight:"71vh"}}  >
        {musicList?.map(obj=><Card key={obj._id} obj={obj}/>)}
 
    </div>
   {footer && <Footer/>}
    
    
    
    
    </>
  )
}
