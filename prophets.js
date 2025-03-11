const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // Uncomment for testing
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    cards.innerHTML = ''; // Clear existing cards
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        card.classList.add('card');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order} Latter-day Prophet`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        const dob = document.createElement('p');
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        
        const pob = document.createElement('p');
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(dob);
        card.appendChild(pob);
        cards.appendChild(card);
    });
};

// Filtering functionality
document.getElementById('utah-prophets').addEventListener('click', () => filterProphets('utah'));
document.getElementById('outside-us').addEventListener('click', () => filterProphets('outside-us'));
document.getElementById('95-plus').addEventListener('click', () => filterProphets('95-plus'));
document.getElementById('10-or-more-kids').addEventListener('click', () => filterProphets('10-or-more-kids'));
document.getElementById('president-15-years').addEventListener('click', () => filterProphets('president-15-years'));

function filterProphets(criteria) {
    getProphetData().then(data => {
        let filteredProphets;
        switch (criteria) {
            case 'utah':
                filteredProphets = data.filter(prophet => prophet.birthplace.includes('Utah'));
                break;
            case 'outside-us':
                filteredProphets = data.filter(prophet => !prophet.birthplace.includes('United States'));
                break;
            case '95-plus':
                filteredProphets = data.filter(prophet => calculateAge(prophet.birthdate) >= 95);
                break;
            case '10-or-more-kids':
                filteredProphets = data.filter(prophet => prophet.numChildren >= 10);
                break;
            case 'president-15-years':
                filteredProphets = data.filter(prophet => prophet.yearsAsPresident >= 15);
                break;
        }
        displayProphets(filteredProphets);
    });
}

function calculateAge(birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}