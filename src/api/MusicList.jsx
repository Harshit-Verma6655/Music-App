import Axios from "./axiosInstance";
export let   musics=async(page)=>{
let res=await Axios.get(`https://academics.newtonschool.co/api/v1/music/song?page=${page}&limit=20`);
// console.log(res.data.data);
return res.data.data;
}
export let posts=async (page)=>{

let res=await Axios.get(` https://academics.newtonschool.co/api/v1/quora/post?page=${page}&limit=20`);
return res.data;
}
