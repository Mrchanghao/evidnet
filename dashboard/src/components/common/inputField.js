import React from 'react'

const inputField = ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className="ui field">
      <label>{label}</label>
      <input placeholder={placeholder} {...input} style={{ marginBottom: '5px' }} />
      <div className="ui error message">
        {touched &&
        (error && <span>{error}</span>)}
      </div> 
    </div>
  );
};



export default inputField;