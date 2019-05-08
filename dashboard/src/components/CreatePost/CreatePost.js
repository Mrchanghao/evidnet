import React, { Component } from 'react'
import formFields from '../common/formField';
import inputField from '../common/inputField'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
  
  renderFields = () => {
    return formFields.map(({name, label, placeholder} )=> {
      return (
        <Field
        key={name}
        component={inputField}
        label={label}
        type='text'
        placeholder={placeholder}
        name={name}
        />
      )
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const {values } = this.props.formValues
  //   this.props.createPost(values)
  //   this.props.reset();
  // }

  render() {
    return (
      <div className='ui container'>
        <form className="ui fluid form" 
        onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}
        >
          {this.renderFields()}
          <Link to='/'>
            <button className='ui red button'>취소</button>
          </Link>
          <button 
          type='submit' className='ui secondary button'>내용 확인</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  formFields.forEach(({name}) => {
    if(!values[name]) {
      errors[name] = '빈 칸을 채워 주시기 바랍니다'
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(CreatePost);
