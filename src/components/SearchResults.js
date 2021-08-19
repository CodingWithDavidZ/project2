import React from 'react';

function SearchResults(searchUser) {
  console.log(searchUser);
  return (
    <div async class='row'>
      <div class='col-sm-4' id='searchResult'></div>
      <div class='col-sm-4' id='moreInfo1'></div>
      <div class='col-sm-4' id='moreInfo2'></div>
    </div>
  );
}

export default SearchResults;
