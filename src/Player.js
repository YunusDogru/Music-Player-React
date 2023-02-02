import React, { useState, useEffect, useRef } from 'react'


const Player = ({songs ,audioElement, isPlaying, setIsPlaying, currentSong,setCurrentSong, currentTime, duration, width, setWidth, shuffle, repeat, setShuffle, setRepeat, obj}) => {

    const progress = useRef();
    const [mouseOver, setMouseOver] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorited, setFavorited] = useState();
    
    const play = () => {
        setIsPlaying(!isPlaying);
    }

    const next = () => {
        let index = songs.findIndex(item => item.title === currentSong.title);
        if(index < (songs.length - 1)) {
            setCurrentSong(songs[index + 1]);
        }
        else {
            setCurrentSong(songs[0]);
        }
    }

    const prev = () => {
        let index = songs.findIndex(item => item.title === currentSong.title);
        if(index === 0) {
            setCurrentSong(songs[songs.length - 1]);
        }
        else {
            setCurrentSong(songs[index - 1]);
        }
    }

    const onSliderClicked = (event) => {
        let x = event.nativeEvent.offsetX;
        setWidth((width) => (x / 3.6));
        audioElement.current.currentTime = audioElement.current.duration * (x / 360);
    }

    const shuffleAction = () => {
        if(repeat) {
            setRepeat(!repeat);
        }
        setShuffle(!shuffle);
    }

    const repeatAction = () => {
        if(shuffle) {
            setShuffle(!shuffle);
        }
        setRepeat(!repeat);
    }

    const onVolumeChanged = (event) => {
        audioElement.current.volume = event.target.value / 100;
    }

    useEffect(()=>{
        if(isPlaying) {
            audioElement.current.play(); 
        }
        else {
            audioElement.current.pause();
        }
    }, [isPlaying, currentSong]);

    useEffect(()=>{
        let index = songs.findIndex(item => item.title === currentSong.title);
        setCurrentIndex(index);
    },[currentSong]);

    useEffect(()=>{
        setFavorited(songs[currentIndex].favorited)
    })

  return (
    <div className="music-player">
        <div className={`hearth-icon button ${favorited ? "favorited": null}`} onClick={()=>{
            songs[currentIndex].favorited = !songs[currentIndex].favorited;
            setFavorited(songs[currentIndex].favorited)
        }}>
            <i className="fa-solid fa-heart heart"></i>
        </div>
        <div className={`volume button ${mouseOver ? 'volumeOnClick' : null}`} onMouseOver={()=>{setMouseOver(true)}} onMouseOut={()=>{setMouseOver(false)}}>
            <i className="uil uil-volume volume-on"></i>
            <input type="range" className="volume-range" onChange={onVolumeChanged}/>
            <i className="uil uil-volume-mute volume-off"></i>
        </div>
        <div className="image-wrap">
            <img alt="" className='image' src={currentSong.cover}/>
        </div>
        <div className="song-singer">
            <p className="singer">{currentSong.artist}</p>
            <p className="song">{currentSong.title}</p>
        </div>
        <div className="play-icons">
            <div className="play button" onClick={play}>
                <i className={`fa-solid fa-${isPlaying ? 'pause': 'play'}`}></i>
            </div>
            <div className="prev button" onClick={prev}>
                <i className="fa-solid fa-backward-step"></i>
            </div>
            <div className="next button" onClick={next}>
                <i className="fa-solid fa-forward-step"></i>
            </div>
        </div>
        <div className="progress-bar" onClick={(event) => onSliderClicked(event)}>
            <div className="progress" ref={progress} style={{"width": `${width}%`}}></div>
        </div>
        <div className="footer">
            <div className="current-time">{currentTime === "NaN:NaN"? "0:00": currentTime}</div>
            <div className="footer-buttons">
                <i className={`fa-solid fa-shuffle shuffle ${shuffle ? 'active': null}`} onClick={shuffleAction}></i>
                <i className={`fa-solid fa-repeat repeat ${repeat ? 'active' : null}`} onClick={repeatAction}></i>
            </div>
            <div className="duration">{duration === "NaN:NaN"? "0:00": duration}</div>
        </div>
    </div>
  )
}

export default Player;