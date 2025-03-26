const trails = [
    { title: "Sunny Ridge Trail", description: "A beautiful trail with stunning views." },
    { title: "Mountain Peak Trail", description: "A challenging hike to the peak." },
    { title: "Forest Walk", description: "A serene walk through the forest." },
    { title: "Lake View Trail", description: "A scenic trail around the lake." }
];

document.getElementById("load-data")?.addEventListener("click", () => {
    const trailSection = document.getElementById("trail-section");
    trails.forEach(trail => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${trail.title}</h2><p>${trail.description}</p>`;
        trailSection.appendChild(div);
    });
});

// Handling membership form submission
document.getElementById("membership-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you for joining, ${name}! A confirmation has been sent to ${email}.`);
});

// Handling contact form submission
document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const contactName = document.getElementById("contact-name").value;
    alert(`Thank you for your message, ${contactName}! We will get back to you soon.`);
});