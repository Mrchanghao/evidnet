import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Spinner from '../components/common/Spinner';

const Dashboard = Loadable({
  loader: () => import('../components/Dashboard'),
  loading: () => <Spinner />
})

const Post = Loadable({
  loader: () => import('../components/Post'),
  loading: () => <Spinner />
})

const NewPost = Loadable({
  loader: () => import('../components/CreatePost/NewPost'),
  loading: () => <Spinner />
})

const App = () => {
    return (
      <div className='ui container' style={{marginTop: '1rem'}}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/posts/post/:id' component={Post} />
            <Route path='/posts/create' component={NewPost}  />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }




export default (App);