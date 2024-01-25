import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useUserContext } from '../context/UserContext';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export const Player = () => {
    let {currsong}=useUserContext();
    return<>
  <AudioPlayer
    autoPlay
    src={currsong.audio_url
    }
    onPlay={e => console.log("onPlay",e)}
    // other props here
    className='bg-red-500 border-none shadow-none text-white'
    style={{height:"80px",fontSize:"small"}}

  />
  </>
};