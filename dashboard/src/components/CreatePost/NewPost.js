import React, { Component } from 'react'
import {reduxForm} from 'redux-form';
import CreatePost from './CreatePost';
import PostConfirm from './PostConfirm';

class NewPost extends Component {

  state = {
    showForm: false
  }

  renderForm = () => {
    if(this.state.showForm) {
      return (
        <PostConfirm
        onCancel={() => this.setState({showForm: false})}
        />
      )
    }
    return (
      <CreatePost
      onPostSubmit={() => this.setState({showForm: true})}
      />
    )
  }

  render() {
    return (
      <div className='ui container'>
        {this.renderForm()}
      </div>
    )
  }
}


export default reduxForm({
  form: 'postForm'
})(NewPost);