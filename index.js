// Write your code here!

// DISPALY POSTS IN DOM
function displayPosts(posts) {
    const postList = document.querySelector("#post-list")

   
    posts.forEach(post => {
        const li = document.createElement("li")
        
        const h1 = document.createElement("h1")
        h1.textContent = post.title

        const p = document.createElement("p")
        p.textContent = post.body

        li.appendChild(h1)
        li.appendChild(p)
        postList.appendChild(li)

    })
}

// FETCH POSTS
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()

        displayPosts(posts)
    }
    catch(error) {
        console.log("Failed to fetch posts:", error)
    }
}

fetchPosts()