// fetch("https://api.jsonbin.io/v3/b/690323f7d0ea881f40c6c044")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error("Error fetching JSON data:", error));

fetch("data/posts.json")
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => console.error("Error fetching JSON data:", error));