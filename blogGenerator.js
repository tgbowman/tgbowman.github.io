const createBlogButton = document.getElementById("createBlog")
const blogCancelButton = document.getElementById("cancelForm")
const showFormButton = document.getElementById("showBlogForm")
const form = document.getElementById("form")

let blogArchive = JSON.parse(localStorage.getItem("BlogArchive")) || [];


const blogIdGenerator = function*() {
    let uniqueId = 1
    while(true){
        yield uniqueId
        uniqueId++
    }
}

const blogIdFactory = blogIdGenerator()

function blogObjectFactory (title, author, entry, ...tags) {
    return Object.create(null, {
        "id": {
            enumerable: true,
            value: blogIdFactory.next().value
        },
        "title":{
            enumerable: true,
            value: title
        },
        "author": {
            enumerable: true,
            value: author
        },
        "entry": {
            enumerable: true,
            value: entry
        },
        "tags": {
            enumerable: true,
            value: tags
        },
        "published": {
            enumerable: true,
            value: Date.now()
        }

    })
}
function getStorage() {
    if(blogArchive.length > 0){blogArchive = JSON.parse(localStorage.getItem("BlogArchive"))
    printBlogs()}
}


function printBlogs() {
    let blogOut = document.getElementById("blogs")
     blogArchive.sort((p,n) => {
         n.id - p.id 
     })
     
        for (let i = 0; i < blogArchive.length; i++) {
        let blog = blogArchive[i];
        
        blogOut.innerHTML += 
            `
            <article class="blog__article white-bg">
                <h1>${blog.title}</h1>
                <h2>by: ${blog.author}</h2>
                <p>${blog.entry}</p>
            </article>
    
            `
        
    }
}



function setStorage(){
    const BlogArchiveString = JSON.stringify(blogArchive);
    localStorage.setItem("BlogArchive", BlogArchiveString)
    
   
    blogArchive = JSON.parse(localStorage.getItem("BlogArchive"))
    
  
}

function createNewBlog(){

    let blogTitle = document.getElementById("blogTitle").value
    let blogAuthor = document.getElementById("blogAuthor").value
    let blogEntry = document.getElementById("blogEntry").value 
    let blogTags = document.getElementById("blogTags").value

    let newBlog = blogObjectFactory(blogTitle, blogAuthor, blogEntry, blogTags)

    blogArchive.push(newBlog)
    setStorage()
  
}

function showForm() {
    form.style.display="block"
}

function hideForm() {
    form.style.display="none"
}




showFormButton.addEventListener("click", showForm) 
blogCancelButton.addEventListener("click", hideForm)
createBlogButton.addEventListener("click" , createNewBlog)

getStorage()
