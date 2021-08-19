import React from 'react';

function SearchBar() {
  return (
    <form id='searchForm' autocomplete='off'>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='search'
          placeholder='Search Username'
          required
        />
      </div>
      <div className='form-group'>
        <button id='searchButton' className='btn btn-danger btn-block'>
          Search User
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
