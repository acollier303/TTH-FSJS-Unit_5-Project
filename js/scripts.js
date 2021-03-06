/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */

const gallery = document.getElementById('gallery');
const search = document.querySelector('search-container');
const modal = document.getElementsByClassName('modal-container');
const card = document.querySelectorAll('.card');
const modals = document.createElement('DIV');
const randomPerson = 'https://randomuser.me/api/?results=12&nat=us'

// ------------------------------------------
//  Fetch Request
// ------------------------------------------

async function getEmployees(url)  {
    const employeesResponse = await fetch(url);
    const employeesJSON = await employeesResponse.json();
    
    return {...employeesJSON};
}

console.log(getEmployees(randomPerson));

// ------------------------------------------
//  Generate Card & Modal FUNCTIONS
// ------------------------------------------

// ---- Employee Profile Card ----
function generateProfile(data){
    const profileHtml = data.map(person => `
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
    gallery.innerHTML = profileHtml;
    gallery.appendChild(modals);
}

// ------- Employee Modal --------
function generateModal(data){

    const modalHtml = data.map(person =>`
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
                    <p class="modal-text">Birthday: ${person.number}</p>
                </div>
            </div>
        </div>`).join('');
    modals.innerHTML = modalHtml; 

   // console.log(modals)
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
function cardListener(){
    gallery.addEventListener('click', async (e) => {
        const employees = await getEmployees(randomPerson);
        console.log(employees);

    });
};
