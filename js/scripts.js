const gallery = document.getElementById('gallery');
const search = document.querySelector('search-container');
const modal = document.getElementsByClassName('modal');
const card = document.querySelectorAll('.card');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateProfile(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// Generate Profile DOM elements from fetch data
function generateProfile(data){
    const test = data.map(person =>  `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${person.picture.thumbnail}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}</p>
                <p class="card-text cap">${person.location.city}, ${person.location.state}s</p>
            </div>
        </div>`).join('');

gallery.innerHTML = test;
 }

// -------Generate ProfileOverlay  DOM element --------
function generateModal(data){
    const test2 = data.map(person =>`
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${person.picture.thumbnail}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="modal-text">${person.email}</p>
            <p class="modal-text cap">${person.location.city}</p>
            <hr>
            <p class="modal-text">${person.phone}</p>
            <p class="modal-text">${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}  ${person.location.postcode}</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>`).join('');

}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
 card.addEventListener('click', console.log('working'));
 

//console.log(card);
  
// ------------------------------------------
//  POST DATA
// ------------------------------------------
