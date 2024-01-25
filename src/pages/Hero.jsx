import React, { useState } from 'react'
import Card from '../components/Card'
import  {musics} from '../api/MusicList'
import { useEffect } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from '../context/UserContext';
export default function Hero() {
    let [musicList, setMusicList]=useState([]);
    let {user, footer,handleFooter}=useUserContext();
    let [page, setPage]=useState(0);
useEffect(  ()=>{

    musics(page).then((data)=>{

      setMusicList(prev=>[...prev, ...data]);
        // console.log("data", data);
    });
    handleFooter(false);
   

    // 
},[page])
  return (


    <>
    <div className='flex flex-col items-center justify-center mt-48 sm:mt-24  absolute bg-gray-900 '>
    <div className='bg-gray-900 w-full  box-border p-2 flex justify-center  flex-wrap overflow-scroll overflow-x-hidden  hero   '   >
        {musicList?.map(obj=><Card key={obj._id} obj={obj}/>)}

        
    </div>
    <button className='bg-green-500 z-20 text-white px-1 rounded mt-1  w-fit text-xs' onClick={()=>setPage(++page)}>Load More</button>
    {footer && <Footer/>}
    </div>
   
    
    
    
    
    </>
  )
}
