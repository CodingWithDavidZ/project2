import React, { useEffect } from 'react';

function SearchResults(props) {
  useEffect(() => {
    console.log(props.data);
    if (props.data === '') {
      document.getElementsByClassName('row')[0].style.display = 'none';
    } else {
      document.getElementsByClassName('row')[0].style.display = 'initial';
    }

    let basicInfoArray = [
      `Name: ${props.data.name}`,
      `Location: ${props.data.location}`,
      `Email: ${props.data.email}`,
      `Twitter: ${props.data.twitter_username}`,
    ];
    basicInfoArray.forEach(function (element) {
      list1 += '<li>' + element + '</li>';
    });

    const creation = `Created: ${props.data.created_at}`;
    const creationDateWithoutTime = creation.split('T')[0];
    const lastUpdate = `Last update: ${props.data.updated_at}`;
    const lastUpdateWithoutTime = lastUpdate.split('T')[0];

    let moreInfoArray = [
      `Created: ${creationDateWithoutTime}`,
      `Last Update: ${lastUpdateWithoutTime}`,
      `Public Repos: ${props.data.public_repos}`,
      `Seeking Employment: ${props.data.hireable}`,
    ];
    moreInfoArray.forEach(function (element) {
      list2 += '<li>' + element + '</li>';
    });

    document.getElementById('moreInfo1').innerHTML = list1;
    document.getElementById('moreInfo2').innerHTML = list2;
    document.getElementById('searchResult').innerHTML = `
        <a target="_blank" href="${props.html_url}"> <img src= "${props.data.avatar_url}" width="333" height="333"/></a>
      `;
  });

  let list1 = '';
  let list2 = '';

  return (
    <div async class='row'>
      <div id='searchResult'></div>
      <div id='moreInfo1'>{list1}</div>
      <div id='moreInfo2'>{list2}</div>
    </div>
  );
}

export default SearchResults;
