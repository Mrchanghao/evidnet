import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {withRouter} from 'react-router-dom';

class Post extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  goBack = () => {
    this.props.history.push('/');
  };

  handleDelte = () => {
    if(window.confirm('정말 삭제 하시겠습니까')) {
      this.props.deletePost(this.props.match.params.id);
      this.props.history.push('/');
    }
    return;
  }

  render() {
    const {post } = this.props;
    return (
      !this.props.post ? (
        <h1 className='ui header'>Loading ...</h1>
      ) : (
        <div className='ui container'>
          <div className='ui raised segment'>
            <h2 className='ui header'>{post.title}</h2>
            <h4>{post.content}</h4>
          </div>
          <button onClick={this.goBack} className='ui secondary button'>Go Back</button>
          <button onClick={this.handleDelte} className='ui red button'>DELETE</button>
        </div>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}

const routerPost = withRouter(Post)

export default connect(mapStateToProps, {fetchPost, deletePost})(routerPost);