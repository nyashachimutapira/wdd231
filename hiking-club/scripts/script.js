const trails = [
    { title: "Sunny Ridge Trail", description: "A beautiful trail with stunning views." },
    { title: "Mountain Peak Trail", description: "A challenging hike to the peak." },
    { title: "Forest Walk", description: "A serene walk through the forest." },
    { title: "Lake View Trail", description: "A scenic trail around the lake." }
];

// Load trails into the section
document.getElementById("load-data")?.addEventListener("click", () => {
    const trailSection = document.getElementById("trail-section");
    trailSection.innerHTML = ''; // Clear previous trails
    trails.forEach(trail => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${trail.title}</h2>
            <p>${trail.description}</p>
            <button onclick="saveToFavorites('${trail.title}')">Save as Favorite</button>
        `;
        trailSection.appendChild(div);
    });
});

// Function to save favorite trails to localStorage
function saveToFavorites(trailTitle) {
    let favorites = JSON.parse(localStorage.getItem('favoriteTrails')) || [];
    if (!favorites.includes(trailTitle)) {
        favorites.push(trailTitle);
        localStorage.setItem('favoriteTrails', JSON.stringify(favorites));
        alert(`${trailTitle} has been added to your favorites!`);
    } else {
        alert(`${trailTitle} is already in your favorites.`);
    }
}

// Load favorite trails on page load
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favoriteTrails')) || [];
    const favoritesSection = document.getElementById('favorites-section');
    favoritesSection.innerHTML = ''; // Clear previous favorites
    favorites.forEach(title => {
        const favoriteElement = document.createElement('div');
        favoriteElement.textContent = title;
        favoritesSection.appendChild(favoriteElement);
    });
}

// Call loadFavorites when the page loads
document.addEventListener('DOMContentLoaded', loadFavorites);

// Handling membership form submission
document.getElementById("membership-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you for joining, ${name}! A confirmation has been sent to ${email}.`);

    // Save membership data to localStorage
    localStorage.setItem('membershipName', name);
    localStorage.setItem('membershipEmail', email);
});

// Handling contact form submission
document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const contactName = document.getElementById("contact-name").value;
    alert(`Thank you for your message, ${contactName}! We will get back to you soon.`);
    
    // Optionally, save contact name to localStorage
    localStorage.setItem('contactName', contactName);
});