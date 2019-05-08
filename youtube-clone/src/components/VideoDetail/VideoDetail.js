import React from 'react';
import { Embed, Segment } from 'semantic-ui-react'
// import { embedUrl } from '../../config';

const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const image = video.snippet.thumbnails.default.url;

  if(!video) {
    return <div>Loading ...</div>
  }
  return (
    <Segment>
      <Embed id={videoId} source='youtube' placeholder={image}  />
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </Segment>
  )
};

export default VideoDetail;