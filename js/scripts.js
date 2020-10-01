const gallery = document.getElementById('gallery');
const search = document.querySelector('search-container');
const modal = document.getElementsByClassName('modal');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateProfile(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateProfile(data){

    const test = data.map(person =>  `

    <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>`).join('');

    //     <div class="card-info-container">
    //         <h3 id="name" class="card-name cap"> ${person.name.first} ${person.name.last}</h3>
    //     </div>
    // `).join('');
gallery.innerHTML = test;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

