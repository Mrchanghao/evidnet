import React, { Component } from 'react'
import { connect } from 'react-redux';
import formFields from '../common/formField';
import {withRouter} from 'react-router-dom';
import {createPost} from '../../actions/index';

class PostConfirm extends Component {

  renderContent = () => {
    const {values} = this.props;
    
    return formFields.map(({label, name}) => {
      return (
        <div key={name} className='ui segment basic'>
          <label className='ui label large'>{label}</label>
          <div className='ui basic message'>{values[name]}</div>
        </div>
      )
    })
  }

  handleSubmit = (e) => {
    const { createPost, history, values } = this.props;

    createPost(values);

    history.push('/');
  }

  render() {
    console.log(this.props.values)
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          {this.renderContent()}
          <button onClick={this.props.onCancel} 
          style={{marginLeft: '1rem'}}
          className='ui red button'>취소</button>
          <button className='ui secondary button'
            type='submit'>저장</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    values: state.form.postForm.values 
  };
}

export default connect(mapStateToProps, {createPost})(withRouter(PostConfirm));