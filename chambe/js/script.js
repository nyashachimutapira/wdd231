async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
        `;
        membersList.appendChild(card);
    });
}

document.getElementById('toggleView').addEventListener('click', () => {
    const membersList = document.getElementById('membersList');
    membersList.classList.toggle('grid-view');
    membersList.classList.toggle('list-view');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();