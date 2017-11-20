
let userInput = document.getElementById("blogSearch")



userInput.addEventListener("keyup", event => {
    
    if(event.target.value.length >= 3) {
        allBlogs.forEach(blog => {
            if(blog.classList.contains("hidden")===false){
                blog.classList.add("hidden")
            }
        })

        let filteredBlogs = allBlogs.filter(
            blog => {
                return blog.innerHTML.toLowerCase().includes(userInput.value.toLowerCase())  
            })
        if (filteredBlogs.length < 5){
            pageButtons.classList.add("hidden")
        }

        filteredBlogs.forEach(
            blog => {
                blog.classList.remove("hidden")
            }
        )
    }else {
        pageButtons.classList.remove("hidden")
        paginate(0)
    }
})
