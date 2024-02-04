import React from 'react'


export default async function likePost(postId, token) {

    let response = await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${postId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'projectID': '36sy5l1suyyd',
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    // console.log("likePost",data);
    return data;


}
