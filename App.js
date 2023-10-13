
import './App.css';
import { useState } from 'react';
import Videoplayer from './Components/videoPlayer';

function App() {
  let [ videoId,setVideoId ] = useState(null)
  function playVideo(e,videoId){
    setVideoId(videoId)
  }
  return (
    <div className="App">
      {videoId && <Videoplayer videoId={videoId}></Videoplayer>}
      <button onClick={(e)=>{playVideo(e,'cdn')}}>Play Vidoe-1</button>
      <button onClick={(e)=>{playVideo(e,'generate-pass')}}>Play Vidoe-2</button>
      <button onClick={(e)=>{playVideo(e,'get-post')}}>Play Vidoe-3</button>
    </div>
  );
}

export default App;
