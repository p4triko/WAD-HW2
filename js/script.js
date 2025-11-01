// fetch("https://api.jsonbin.io/v3/b/690323f7d0ea881f40c6c044")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error("Error fetching JSON data:", error));

fetch("data/posts.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => console.error("Error fetching JSON data:", error));

// Load navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("/navbar.html")
    .then(response => response.text())
    .then(html => {
      navbarContainer.innerHTML = html;

      const profileButton = navbarContainer.querySelector("#profile-button");
      const profileMenu = navbarContainer.querySelector("#profile-menu");
      const logoutButton = navbarContainer.querySelector("#logout-button");

      profileButton.onclick = event => {
        event.preventDefault();
        profileMenu.classList.toggle("hidden");
      };

      logoutButton.onclick = () => alert("Logging out...");
    })
    .catch(error => console.error("Navbar load error:", error));
});

