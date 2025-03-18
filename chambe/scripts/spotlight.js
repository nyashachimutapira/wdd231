document.addEventListener("DOMContentLoaded", () => {
    // Fetch company spotlight data from members.json
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const spotlightCards = document.getElementById('spotlight-cards');
            const goldSilverMembers = data.filter(member => member.membership_level <= 2); // Assuming 1 and 2 are gold and silver
            const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3); // Randomly select 2-3 members

            selectedMembers.forEach(member => {
                const card = document.createElement('div');
                card.className = 'spotlight-card';
                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                `;
                spotlightCards.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching member data:', error);
        });
});