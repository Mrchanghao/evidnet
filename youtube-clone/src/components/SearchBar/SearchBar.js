import React, { Component } from 'react'
import {Input } from 'semantic-ui-react';
import './SearchBar.css'

class SearchBar extends Component {
  
  state = {
    term: ''
  }

  handleChange = (term) => {
    this.setState({term});
    this.props.videoSearch(term);
  }

  render() {
    const {term} = this.state;
    return (
      <div className='search__bar'>
        <Input 
        icon='search' placeholder='search' fluid
        value={term} name='term' onChange={(e) => this.handleChange(e.target.value)}  />
      </div>
    );
  }
}

export default SearchBar;