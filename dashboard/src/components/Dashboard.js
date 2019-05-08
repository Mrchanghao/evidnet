import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';

const Dashboard = () => {
  return (
    <div>
      <div className='ui segment'>
        <Link to='/posts/create' 
          className="ui floated right white secondary button ">
          <span>글 쓰기</span>
        </Link>
      </div>
      <PostsList />
      
    </div>
  );
};

export default Dashboard;
