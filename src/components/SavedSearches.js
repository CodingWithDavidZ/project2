import React from 'react';

function SavedSearches(props) {
  function fetchSaved() {
    fetch('http://localhost:3000/saved')
      .then((res) => res.json())
      .then((savedData) => {
        console.log(savedData);
        const html = savedData
          .slice(1, 51)
          .map((data) => {
            return `
          
          <p id=pTag${data.id}> <a target="_blank" href="${data.url}"><img src="${data.picture}" alt="${data.id}" width="100" height="100"/></a><button class="btn btn-link" id="removeButton${data.id}">Remove</button></p>`;
          })
          .join('');
        saved.innerHTML = html;
        savedData.slice(1, 51).map((data) => {
          document
            .getElementById(`removeButton${data.id}`)
            .addEventListener('click', (e) => {
              fetch(`http://localhost:3000/saved/${data.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchSaved();

  return <div></div>;
}

export default SavedSearches;
