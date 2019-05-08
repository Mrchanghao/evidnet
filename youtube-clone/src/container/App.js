import React, { useState, useEffect, lazy, Suspense } from 'react'
// components
import SearchBar from '../components/SearchBar/SearchBar';
import VideoDetail from '../components/VideoDetail/VideoDetail';

import './App.css';

import { Container,
  Segment, Dimmer, Loader, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import fetchYoutube from '../api/index';

const List = lazy(() => import('../components/VideoList/VideoList.js'));

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const videoSearch = async (term) => {
    const {items} = await fetchYoutube(term);
    setVideos(items);
    setSelectedVideo(items[0]);
  }

  useEffect(() => {
    videoSearch('react.js');
    
  }, [])

  const termVideoSearch = _.debounce((term) => {videoSearch(term)}, 300);

  return (
    <Container>
      <SearchBar videoSearch={termVideoSearch} />
        {!videos || !selectedVideo ? (
          <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </Segment>
        ) : (
          <div className='app'>
            <Grid celled relaxed='very'>
              <Grid.Row >
              <Grid.Column width={10}>
                <VideoDetail video={selectedVideo} />
              </Grid.Column>
            
              <Grid.Column width={6}>
                <Suspense fallback={<div>Fallback</div>}>
                  <List 
                  videos={videos}
                  onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)} />
                </Suspense>
              </Grid.Column>

              </Grid.Row>
            </Grid>
          </div>
        )}
    </Container>
  )
}




export default App;