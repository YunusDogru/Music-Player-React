import './App.css';
import React, { useState, useRef } from 'react'
import Player from './Player'


const App = ({songs}) => {

  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [width, setWidth] = useState(0);


  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(false)

  const audioElement = useRef();

  const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
  
  const onTimeUpdate = () => {
    let dur= audioElement.current.duration;
    let cur= audioElement.current.currentTime;
    setDuration((duration) => convertTime(dur));
    setCurrentTime((currentTime) => convertTime(cur));
    setWidth((width) => (cur / dur) * 100)
  }

  const onEnded = () => {
    if (shuffle) {
      setCurrentSong(songs[Math.floor(Math.random() * (songs.length - 1))]);
    } 
    else if (repeat) {
      audioElement.current.currentTime = 0;
      audioElement.current.play();
    } else {
      let index = songs.findIndex(item => item.title === currentSong.title);
      if(index < (songs.length - 1)) {
        setCurrentSong(songs[index + 1]);
      }
      else {
          setCurrentSong(songs[0]);
      }
    }
}

  return (
  
   <div className="App">
    <audio src={currentSong.source} ref={audioElement} onTimeUpdate={onTimeUpdate} onEnded={onEnded}/>
    <Player songs={songs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentSong={currentSong} setCurrentSong={setCurrentSong} currentTime={currentTime} duration={duration} width={width} setWidth={setWidth} shuffle={shuffle} setShuffle={setShuffle} repeat={repeat} setRepeat={setRepeat}/>
   </div>
  )
}

export default App