let searchButton = document.getElementById("search")

function searchBlogs() {
    let blogArray = document.getElementsByClassName("blog__article")
    let userInput = document.getElementById("blogSearch").value
    
   const blogsToHide = Array.from(blogArray)
   
   blogsToHide.forEach(article => article.classList.add("hidden"))
    
   const blogsToSearch = blogsToHide.filter( function(blog){
       return blog.innerHTML.includes(userInput)})
       
       blogsToSearch.forEach(article => article.classList.remove("hidden"))
   }



searchButton.addEventListener("click", searchBlogs)
