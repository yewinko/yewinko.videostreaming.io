import React,{useRef,useEffect} from 'react'

const Videoplayer = ({videoId})=>{
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
    return(
        <video ref={videoRef} width='320' height='240' controls autoPlay>
            <source src={`http://localhost:4000/videos/${videoId}`} type='video/mp4'></source>
            Your browser does not support video tag
        </video>
    )
}

export default Videoplayer;