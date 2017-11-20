
let userInput = document.getElementById("projectSearch")
let projects= document.getElementsByClassName("project__entry")
let allProjects = Array.from(projects)



userInput.addEventListener("keyup", event => {
    
    if(event.target.value.length >= 3) {
        allProjects.forEach(project => {
            if(project.classList.contains("hidden")===false){
                project.classList.add("hidden")
            }
        })

        let filteredProjects = allProjects.filter(
            project => {
                return project.innerHTML.toLowerCase().includes(userInput.value.toLowerCase())  
            })
      
        filteredProjects.forEach(
            project => {
                project.classList.remove("hidden")
            }
        )
    }else {
        allProjects.forEach(project => {
            project.classList.remove("hidden")
        })
    }
})