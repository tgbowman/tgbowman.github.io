const createBlogButton = document.getElementById("createBlog")
const blogCancelButton = document.getElementById("cancelForm")
const showFormButton = document.getElementById("showBlogForm")
const form = document.getElementById("form")
let editMode = false
let currentArticle = null

let blogArchive = JSON.parse(localStorage.getItem("BlogArchive")) || [];


const idGenerator = function* (from) {
    let id = 1
    while (true) {
        yield from + id
        id++
    }
}
const lastId = blogArchive[blogArchive.length - 1] ||  {id: 0}
const articleUUIDGen = idGenerator(lastId.id)



function blogObjectFactory (title, author, entry, id, ...tags) {
    return Object.create(null, {
        "id": {
            enumerable: true,
            value:  (id===null) ? articleUUIDGen.next().value : id 
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
     blogArchive.sort((p, n) => {
         return (n.id - p.id)
     })
     
        blogArchive.forEach(function(blog) {
            
        
        blogOut.innerHTML += 
            `
            <article class="blog__article white-bg hidden">
                <h1>${blog.title}</h1>
                <h2>by: ${blog.author}</h2>
                <p>${blog.entry}</p>
            </article>
    
            `
        
    })
}



function setStorage(){
    const BlogArchiveString = JSON.stringify(blogArchive);
    localStorage.setItem("BlogArchive", BlogArchiveString)
    
   
    blogArchive = JSON.parse(localStorage.getItem("BlogArchive"))
    
  
}

const listArticleTitles = () => {
    let blogEditOut = document.getElementById("blogEdit")
    let titleList = ""
    blogArchive.forEach(
        blog => {
            titleList += 
            `
            <article id=${blog.id}>
            <span class="${blog.title}">${blog.title}</span>
            <button id="editArticle-${blog.id}">Edit</button>
            </article>
            `
        }
    )
    blogEditOut.innerHTML = titleList
}

document.getElementById("blogEdit").addEventListener("click", e => {
    if(e.target.id.startsWith("editArticle-")){
        currentArticle = blogArchive.find(
            blog => blog.id === parseInt(e.target.id.split("-")[1])
        )}

        document.getElementById("blogTitle").value = currentArticle.title
        document.getElementById("blogAuthor").value = currentArticle.author 
        document.getElementById("blogEntry").value = currentArticle.entry
        document.getElementById("blogTags").value = currentArticle.tags 
        

        editMode = true
    
    })

function createNewBlog(){

    let blogTitle = document.getElementById("blogTitle").value
    let blogAuthor = document.getElementById("blogAuthor").value
    let blogEntry = document.getElementById("blogEntry").value 
    let blogTags = document.getElementById("blogTags").value

    
    if(editMode){
        const articleIndex = blogArchive.findIndex(
            blog => blog.id === currentArticle.id
        )

        blogArchive[articleIndex] = blogObjectFactory(blogTitle, blogAuthor, blogEntry, currentArticle.id, blogTags)

        editMode = false

    } else {
    let newBlog = blogObjectFactory(blogTitle, blogAuthor, blogEntry, blogId, blogTags)
    blogArchive.push(newBlog)
    }
    listArticleTitles()
    setStorage()
    
}

function showForm() {
    form.style.display="block"
}

function hideForm() {
    form.style.display="none"
}

listArticleTitles()



showFormButton.addEventListener("click", showForm) 
blogCancelButton.addEventListener("click", hideForm)
createBlogButton.addEventListener("click" , createNewBlog)


