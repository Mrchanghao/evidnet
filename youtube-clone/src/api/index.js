import {API_KEY} from '../config/index';
import search from 'youtube-api-v3-search';


const fetchYoutube = async (term) => {
  const videos = await search(API_KEY, {q: term, type:'video' });

  return videos;
};

export default fetchYoutube;