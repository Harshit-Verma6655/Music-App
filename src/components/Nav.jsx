import React, { useRef, useState } from 'react'
import styles from './Nav.module.css';
import HomeIcon from '@mui/icons-material/Home';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import searchMusic from '../api/searchMusic';
function Nav() {
   let navigate= useNavigate();
   let inputRef=useRef();
   
   let { user,handleUser,setMusic}=useUserContext();
    let [flag, setFlag]=useState(false);

   let handleClick=()=>{
    localStorage.removeItem("user");
    handleUser(null);
    setFlag(false);
   }
   let handleSearch= async()=>{
      
      let data= await searchMusic(inputRef.current.value);
      console.log("search2",data);
      setMusic(data.data);
      if(inputRef.current.value)
      navigate("/search");
      inputRef.current.value="";
   }
  
  return (
 <>
 <div className='bg-black flex flex-col sm:flex-row items-center justify-around py-5 px-3 border-b  border-white w-screen fixed top-0 z-10 '>

    <div className='flex justify-center mb-2'>
        <img className='w-24 h-12' src='https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg.jpg'/> 
         </div>
 
 <div className={"flex justify-center m-4"}>
    <ul className='bg-black flex text-white justify-around gap-10'>
    <Link to={"/"}><li className='flex justify-center items-center gap-1 hover:bg-blue-700 p-1 rounded'><HomeIcon/>Home </li></Link>
        <Link to={"/social"} ><li className='flex justify-center items-center p-1 rounded  hover:bg-blue-700 gap-1'><CrisisAlertIcon/>Social</li></Link>
        <Link to={"/library"} > <li className='flex justify-center p-1 rounded items-center hover:bg-blue-700 gap-1'><HeadphonesIcon/>Library</li>
        </Link>
    </ul>
 </div>
 <div className='flex gap-1 items-center justify-center'>
   
 <div style={{position:"relative"}}>

    <div style={{position:'absolute', right:"4px", top:"6px"}}>
      <SearchIcon style={{color:"gray"}} onClick={handleSearch}/>
      </div>
   <input type='text' placeholder='search here' className='py-2 rounded-full pl-3 '  ref={inputRef}  />
 </div>
<div  >
 <AccountCircleIcon style={{color:"white", fontSize:"32px"}}   />

 </div>
{user?.token && <span className='text-white'>{user.name}</span>}
 <div className='relative'>
{user?.token && <ArrowDropDownIcon className='text-white' onClick={()=>setFlag(!flag)}/>}
 {flag && <button style={{background:"white", position:"absolute", top:"27px", left:"-8px",borderRadius:"7px", padding:"2px"}} className='text-xs text-bold' onClick={handleClick}>logout</button>}
 </div>
 </div>

 </div>

 
 </>
  )
}

export default Nav