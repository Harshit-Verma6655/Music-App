
import Axios from "./axiosInstance";

export default async function searchMusic(music) {
    let url=`https://academics.newtonschool.co/api/v1/music/song?search={"title":"${music}"}`
    let res=await Axios.get(url);


   
    console.log("likePost",res.data);
    return res.data;


}