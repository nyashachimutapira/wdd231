const membersContainer = document.querySelector("#members");
const url = "data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
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
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.href = company.website;
    website.textContent = company.website;;
    website.target = "_blank";
    membershipLevel.textContent = `Membership: ${company.membership_level === 3 ? "Gold" : company.membership_level === 2 ? "Silver" : "Member"}`;

    image.setAttribute("src", company.imageurl);
    image.setAttribute("alt", `Logo of ${company.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "auto");
    image.setAttribute("height", "100");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    membersContainer.appendChild(card);
  });
};