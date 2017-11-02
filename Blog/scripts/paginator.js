const blogsTotal = blogArchive.length
const blogsPerPage = 5
const numberOfPages = Math.ceil(blogsTotal / blogsPerPage)
const pageButtons = document.getElementById("pageButtons")

let array = document.getElementsByClassName("blog__article")
const allBlogs = Array.from(array)

let current = 0
let pageString = ""

pageString += "<button id ='prev'> Prev </button>"
let idCounter = 0

for (let i = 0; i < numberOfPages; i++) {
    pageString += `<button id = "${idCounter}" class = "page__${i+1}">${i+1}</button>`
    idCounter += (blogsPerPage)
}
pageString += "<button id = 'next'> Next </button>"
pageButtons.innerHTML = pageString

let prevPage = document.getElementById("prev")
let nextPage = document.getElementById("next")


function paginate(event) {
    let start
    if(event.type === "click"){
        start = parseInt(event.target.id)
    } else {
        start = event
    }
    current = start

    allBlogs.forEach(
        function(blog) {
            if(blog.classList.contains("hidden") === false)
            {blog.classList.add("hidden")}
        }
    )
    
    for (let i = start; i < (start + (blogsPerPage)) ; i++) {
        let blog = allBlogs[i];
        if(blog){
            blog.classList.toggle("hidden")
        }
    }
    
    arrowCheck()

}


let buttonCounter = 0
for (let i = 0; i < numberOfPages; i++) {
    let button = document.getElementById(buttonCounter)
    button.addEventListener("click", paginate)
    buttonCounter += (blogsPerPage)
    
}
function arrowCheck(){
    if(current === 0 ){
        prevPage.style.display="none"
    } else {
        prevPage.style.display="inline"
    }

    if(current===(idCounter-blogsPerPage)){
        nextPage.style.display="none"
    } else {
        nextPage.style.display="inline"
    }
}
function prev(){
    paginate((current - blogsPerPage))
}

function next(){
    paginate((current + blogsPerPage))
}

prevPage.addEventListener("click", prev)
nextPage.addEventListener("click", next)

paginate(0)



