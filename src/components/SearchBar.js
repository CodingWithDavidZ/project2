import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

function SearchBar() {
  const [searchUser, setSearchUser] = useState('');

  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //find name
    const search = e.target.value;
    //remove spaces in search query
    const originalName = search.split(' ').join('');

    fetch('https://api.github.com/users/' + originalName)
      .then((result) => result.json())
      .then((data) => {
        return data;
      });
  }

  return (
    <>
      <form id='searchForm' autocomplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Search Username'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button id='searchButton' className='btn btn-danger btn-block'>
            Search User
          </button>
        </div>
      </form>
      <SearchResults searchUser={searchUser} />
    </>
  );
}

export default SearchBar;
