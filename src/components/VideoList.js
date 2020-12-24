import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoClick }) =>{

  const renderList = videos.map((video)=>{
      return <VideoItem key={video.id.videoId} onVideoClick={onVideoClick} video={video}/>;
  })

  return(
    <div className="ui relaxed divided list">{renderList}</div>
  )
}

export default VideoList;
