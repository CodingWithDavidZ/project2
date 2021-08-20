import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SavedSearches from './components/SavedSearches';

function App() {
  const [searchData, setSearchData] = useState('');
  const [searchJSON, setSearchJSON] = useState('');
  return (
    <div className='App'>
      <Header />
      <Title />
      <SearchBar setData={setSearchData} />
      <SearchResults data={searchData} />
      {/* <SavedSearches searchJSON={searchJSON} setSearchJSON={setSearchJSON} /> */}
    </div>
  );
}

export default App;
