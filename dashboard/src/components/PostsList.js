import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.posts !== this.props.posts) {
      this.props.getPosts();
    }
  }

  renderPosts = () => {
    return this.props.posts.map(post => {
      return (
      <Fragment key={post.id} >
        <section className='ui block header'>
          <div>
            <div>
              <h1><span>{post.title}</span></h1>
            </div>
            <div>
              <Link to={`/posts/post/${post.id}`}>
                <h3>게시물 보기</h3>
              </Link>
            </div>
          </div>
        </section>
      </Fragment>
      )
    })
  }

  render() {
    return (
      <div>
        {!this.props.posts ? (
          <h1 className='ui center aligned basic'>Loading....</h1>
        )
        : this.renderPosts()
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps, {getPosts})(PostsList)