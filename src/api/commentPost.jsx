import React from 'react'

export default async function commentPost(postId, token) {
  
    let response=await fetch(`https://academics.newtonschool.co/api/v1/music/post/${postId}/comments`,{
        method:'POST',
        headers:{
            'Authorization':`Bearer ${token}`,
            'projectID':'36sy5l1suyyd',
            'Content-Type': 'application/json'
        }
    });
    let data=await response.json();
    console.log("cmntPost",data);
    return data;
}
