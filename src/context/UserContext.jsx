/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

let UserContext = createContext();

export let useUserContext = () => {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    let [currsong, setCurrsong] = useState(null);
    let [user, setUser] = useState(null);
    let [footer, setFooter] = useState(false);
    let [musicList, setMusicList] = useState();
    let [localsongs, setLocal] = useState();
    let [render, setrender] = useState(false);
    let setRender = () => {
        setrender(!render);
    }
    let setLocalSongs = (data) => {
        setLocal(data);
    }
    let setMusic = (data) => {
        setMusicList(data);
    }
    let handleFooter = (flag, currSong) => {
        console.log("currSong", currSong);
        setFooter(flag);
        setCurrsong(currSong);
    }
    let handleUser = (obj) => {

        setUser(obj);
    }
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }



    }, []);
    return (
        <UserContext.Provider value={{ user, footer, handleFooter, handleUser, currsong, musicList, setMusic, localsongs, setLocalSongs, setRender, render }}>


            {children}

        </UserContext.Provider>
    )
}