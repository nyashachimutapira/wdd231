const membersContainer = document.querySelector("#members");
const url = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

getMembers();

const displayMembers = (companies) => {
  companies.forEach(company => {
    let card = document.createElement("section");
    card.classList.add("member-card");
    
    let name = document.createElement("h2");
    let image = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let membershipLevel = document.createElement("p");

    name.textContent = company.name;
    address.textContent = company.address;
    phone.textContent = company.phone;

    website.href = company.website;
    website.textContent = "Website";
    website.target = "_blank";

    membershipLevel.textContent = `Membership: ${company.membership_level === 3 ? "Gold" : company.membership_level === 2 ? "Silver" : "Member"}`;

    image.setAttribute("src", company.image);
    image.setAttribute("alt", `Logo of ${company.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "auto");
    image.setAttribute("height", "100");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);

    membersContainer.appendChild(card);
  });
};