// fetch("https://api.jsonbin.io/v3/b/690323f7d0ea881f40c6c044")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error("Error fetching JSON data:", error));

fetch("data/posts.json")
    .then(response => response.json())
    .then(json => {
        console.log(json)

        let output = document.getElementById('content')

        for (let i = 0; i < json.length; i++){
            let post = document.createElement('article');

            //creating header for post
            let header = document.createElement('div'); // div
            header.className='post-header';
            let postImage = document.createElement('img'); // profile icon
            postImage.className = 'post-profile-image';
            postImage.src = json[i].profile_image;
            let author = document.createElement('p') // author
            author.className = 'post-author';
            author.innerText = json[i].author
            let postDate = document.createElement('p'); // datetime
            postDate.className = 'post-date'
            postDate.innerText = json[i].date + " " + json[i].time
            header.appendChild(postImage);
            header.appendChild(author);
            header.appendChild(postDate);
            post.appendChild(header);

            //creating body for post
            let body = document.createElement('div'); // div
            body.className = 'post-body';
            try {
                if (json[i].content_image) { // if exists
                    let contentImage = document.createElement('img') // post content image
                    contentImage.src = json[i].content_image;
                    contentImage.className = 'post-content-picture'
                    body.appendChild(contentImage)
                }
            } catch (error) {

            };
            let contentText = document.createElement('h2'); // post content text
            contentText.className = 'post-h2'
            contentText.innerHTML = json[i].content;
            body.appendChild(contentText)
            post.appendChild(body)

            //creating footer
            let footer = document.createElement('div') // div
            footer.className = 'post-footer'
            let emoji = document.createElement('img') // emoji
            emoji.className = 'post-emoji'
            emoji.src = 'style/img/thumbs-up-svgrepo-com.svg'
            footer.appendChild(emoji);
            post.appendChild(footer)

            output.appendChild(post)
        }



    })
    .catch(error => console.error("Error fetching JSON data:", error));

