import React, {memo} from 'react';
import { Item } from 'semantic-ui-react';

const VideoListItem = memo(({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <Item onClick={() => onVideoSelect(video)} style={{cursor: 'pointer'}}>
      <Item.Image src={imageUrl}></Item.Image>
      <Item.Content header={video.snippet.title} 
      description={video.snippet.title} />
    </Item>
  )
});

export default VideoListItem;