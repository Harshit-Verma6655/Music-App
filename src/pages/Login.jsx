import React, { useEffect, useState, } from 'react'
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
export default function Login() {
    let navigate=useNavigate();
    
    let [err, setErr]=useState(false);
    let { handleUser}=useUserContext();
    let fetchTokken=async (detail)=>{
       try{
            let res=await fetch('https://academics.newtonschool.co/api/v1/user/login',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    "projectID":"36sy5l1suyyd",
                    

                },
                body: JSON.stringify(detail),
            });
            let data=await res.json();
            console.log("res",data);
            if(data.status==='fail'){
                setErr(data.message);
                return;
            }
            if(!res.ok){
                throw new Error("something went wrong try again");
            }
          
            localStorage.setItem('user',JSON.stringify({name:data.data.name,email:data.data.email,token:data.token}));
            handleUser({name:data.data.name,email:data.data.email,token:data.token});
        }catch(error){
            setErr(error);
        }
            
        

    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        let detail={"name":e.target[0].value, "email":e.target[1].value, "password":e.target[2].value,"appType": "music"};
        if(!err){
            navigate("/");
        }
       

        fetchTokken(detail);
       
        
        // e.target[0].value="";
        // e.target[1].value="";
        // e.target[2].value="";
    }
   
    
  return (<>
    <div className={styles.container} style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        {err && <h1 className='text-red-600 text-center pt-6 font-bold '>{err}</h1> }
    <form className='flex justify-center items-center flex-col pt-2' onSubmit={handleSubmit} >
    <label className='outline-0  pt-4 text-center '><span className='text-white'>Name: </span><br/>
        <input type='text' required placeholder='Enter your name..' className='my-3 p-1 rounded outline-0 '/>
    </label>
   
    <label className=' outline-0  pt-4 text-center '><span className='text-white'>Email: </span><br/>
        <input type='text' required placeholder='Enter your name..' className='my-3 p-1 rounded outline-0 '/>
    </label>
    <label className=' outline-0  pt-4 text-center '><span className='text-white'>Password: </span><br/>
        <input type='password' required placeholder='Enter your name..' className='my-3 p-1 rounded outline-0 '/>
    </label>
    <button className='bg-blue-500 text-white p-1 rounded mt-2 w-fit'>Log in</button>
   
    </form>
    <p className='text-white mt-3 text-center'>Don't have an account?</p>
        <button className='bg-blue-500 text-white p-1 rounded mt-2 w-fit' ><Link to={"/signup"}>sign up here</Link></button>

    </div>
    </>
  )
}
