// fetch("https://api.jsonbin.io/v3/b/690323f7d0ea881f40c6c044")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.record)
//         createPosts(json.record);
//     })
//     .catch(error => console.error("Error fetching JSON data:", error));

fetch("data/posts.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    createPosts(json);
  })
  .catch((error) => console.error("Error fetching JSON data:", error));

function createPosts(data) {
  let output = document.getElementById("content");

  for (let i = 0; i < data.length; i++) {
    let post = document.createElement("article");

    //creating header for post
    let header = document.createElement("div"); // div
    header.className = "post-header";
    let postImage = document.createElement("img"); // profile icon
    postImage.className = "post-profile-image";
    postImage.src = data[i].profile_image;
    let author = document.createElement("p"); // author
    author.className = "post-author";
    author.innerText = data[i].author;
    let postDate = document.createElement("p"); // datetime
    postDate.className = "post-date";
    postDate.innerText = data[i].time + " " + data[i].date;
    header.appendChild(postImage);
    header.appendChild(author);
    header.appendChild(postDate);
    post.appendChild(header);

    //creating body for post
    let body = document.createElement("div"); // div
    body.className = "post-body";
    try {
      if (data[i].content_image) {
        // if exists
        let contentImage = document.createElement("img"); // post content image
        contentImage.src = data[i].content_image;
        contentImage.className = "post-content-picture";
        body.appendChild(contentImage);
      }
    } catch (error) {}
    let contentText = document.createElement("h2"); // post content text
    contentText.className = "post-h2";
    contentText.innerHTML = data[i].content;
    body.appendChild(contentText);
    post.appendChild(body);

    //creating footer
    let footer = document.createElement("div"); // div
    footer.className = "post-footer";
    let emoji = document.createElement("img"); // emoji
    emoji.className = "post-emoji";
    emoji.src = "style/img/thumbs-up-svgrepo-com.svg";
    footer.appendChild(emoji);
    post.appendChild(footer);

    output.appendChild(post);
  }
}

// Load navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => {
      navbarContainer.innerHTML = html;

      const profileButton = navbarContainer.querySelector("#profile-button");
      const profileMenu = navbarContainer.querySelector("#profile-menu");
      const logoutButton = navbarContainer.querySelector("#logout-button");

      profileButton.onclick = (event) => {
        event.preventDefault();
        profileMenu.classList.toggle("hidden");
      };

      logoutButton.onclick = () => alert("Logging out...");
    })
    .catch((error) => console.error("Navbar load error:", error));
});
