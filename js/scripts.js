const gallery = document.getElementById('gallery');
const search = document.querySelector('search-container');
const modal = document.getElementsByClassName('modal-container');
const card = document.querySelectorAll('card');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    function fetchData (url) {
        return fetch(url)
            .then(res => res.json())
    }

    fetchData('https://randomuser.me/api/?results=12')
    .then(data => generateProfile(data.results))
    .catch(err => console.log(err));
});

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// Generate Profile DOM elements from fetch data
function generateProfile(data){
    const profileHtml = data.map(person =>  `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${person.picture.thumbnail}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}</p>
                <p class="card-text cap">${person.location.city}, ${person.location.state}s</p>
            </div>
        </div>

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
                    <p class="modal-text">Birthday: ${person.phone}</p>
                </div>
        </div>
    
        `).join('');
    gallery.innerHTML = profileHtml;
    
    //---------- Generate Modal -----------
    // const modalContainer = document.getElementsByClassName('modal-container');
    // const modalHtml = data.map(person => `
    // <div class="modal-container">
    // <div class="modal">
    //     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    //     <div class="modal-info-container">
    //         <img class="modal-img" src="${person.picture.thumbnail}" alt="profile picture">
    //         <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
    //         <p class="modal-text">${person.email}</p>
    //         <p class="modal-text cap">${person.location.city}</p>
    //         <hr>
    //         <p class="modal-text">${person.phone}</p>
    //         <p class="modal-text">${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}  ${person.location.postcode}</p>
    //         <p class="modal-text">Birthday: ${person.phone}</p>
    //     </div>
    // </div>`).join('');
    // modal.innerHTML = modalHtml;

    //------------ Event Listener -----------------
    gallery.addEventListener('click', (e) => {
            console.log(e.target);
            modal.style.display = 'block';
    });
}

// -------Generate ProfileOverlay  DOM element --------

// function generateModal(data){
//     const modalContainer = document.getElementsByClassName('modal-container');
//     const modalHtml = data.map(person =>`
//     <div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src="${person.picture.thumbnail}" alt="profile picture">
//             <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
//             <p class="modal-text">${person.email}</p>
//             <p class="modal-text cap">${person.location.city}</p>
//             <hr>
//             <p class="modal-text">${person.phone}</p>
//             <p class="modal-text">${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}  ${person.location.postcode}</p>
//             <p class="modal-text">Birthday: 10/21/2015</p>
//         </div>
//     </div>`).join('');
//     modal.innerHTML = modalHtml;
// }

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
// function cardListener(){
//     gallery.addEventListener('click', (e) => {
//         if (e.target.className === 'card'){
//             console.log(`${person.name.last}`);
//         };
//     });
// };

// ------------------------------------------
//  POST DATA
// ------------------------------------------
