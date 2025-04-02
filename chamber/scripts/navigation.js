const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const display = document.querySelector("article");
const menu = document.querySelector(".menu");

if (display && menu) {
  display.classList.add("grid");

  menu.addEventListener("click", (event) => {
    if (event.target.id === "grid") {
      display.classList.add("grid");
      display.classList.remove("list");
    } else if (event.target.id === "list") {
      display.classList.add("list");
      display.classList.remove("grid");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navigation a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active");
    }
  });
});