import React, { useEffect, useState } from 'react'
import styles from './Signup.module.css';
import { posts } from '../api/MusicList';
import Post from '../components/Post';

import { useUserContext } from '../context/UserContext';
import Modal from '../components/Modal';
import likePost from '../api/likePost';
import commentPost from '../api/commentPost';
export default function Social() {
  let [post, setPost] = useState();
  let [modal, setModal] = useState(false);
  let { user } = useUserContext();
  let [flag, setFlag] = useState(true);
  let [comment, setcomment] = useState(false);
  let handleClick = (id, input) => {
    if (!user?.token) {
      // console.log("click", modal, id);
      setModal(!modal);
    }
    else if (input == 'like') {
      likePost(id, user.token);
      setFlag(!flag);
    } else {
      commentPost(id, user.token);
      setcomment(!comment);
    }
  }

  useEffect(() => {

    posts().then((data) => {
      // console.log("posts", data.data);
      setPost(data.data);
    }
    );

  }, [flag]);
  return (
    <div className='sm:mt-24 mt-48 sm:gap-9 gap-4 min-h-full ' style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", background: "rgb(43, 42, 42)", position: "absolute" }}>

      {modal && <Modal handleClick={handleClick} />}
      <div className='text-red-700 mt-3 text-bold'>Social Posts</div>
      {post?.map((obj) => <Post key={obj._id} handleClick={handleClick} obj={obj}
        comment={comment} flag={flag} />)}


    </div>
  )
}
