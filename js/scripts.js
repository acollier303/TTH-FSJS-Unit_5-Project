const gallery = document.getElementById('gallery');
const search = document.querySelector('search-container');
const modal = document.getElementsByClassName('modal');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json)
    .then(data => console.log(data))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

