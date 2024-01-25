import Axios from "./axiosInstance";
export let   musics=async()=>{
let res=await Axios.get('https://academics.newtonschool.co/api/v1/music/song?limit=50');
// console.log(res.data.data);
return res.data.data;
}
export let posts=async ()=>{

let res=await Axios.get(' https://academics.newtonschool.co/api/v1/quora/post?limit=100');
return res.data;
}
