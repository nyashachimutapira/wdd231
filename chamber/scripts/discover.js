document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const visitorMessage = document.getElementById('visitor-message');

    // Fetch JSON data
    fetch('data/data.json') // Ensure the path is correct
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name}">
                        <figcaption>${item.address}</figcaption>
                    </figure>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                gridContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Visitor message logic
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentTime - lastVisit) / oneDay);
        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
        }
    }
    localStorage.setItem('lastVisit', currentTime);
});