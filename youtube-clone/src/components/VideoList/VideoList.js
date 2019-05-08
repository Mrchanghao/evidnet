import React from 'react';
import { Item } from 'semantic-ui-react';
import VideoListItem from '../VideoListItem/VideoListItem';


const VideoList = React.memo(({videos, onVideoSelect}) => {

  const videoItems = videos.map(video => {
    return (
      <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
    )
  })

  return (
    <Item.Group>
      {videoItems}
    </Item.Group>
  )
});

export default VideoList;