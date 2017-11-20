let searchButton = document.getElementById("search")

function searchProjects() {
    let projectArray = document.getElementsByClassName("project__entry")
    let userInput = document.getElementById("projectSearch").value
    
   const projectsToHide = Array.from(projectArray)
   
   projectsToHide.forEach(project => project.classList.add("hidden"))
    
   const projectsToSearch = projectsToHide.filter( function(project){
       return project.innerHTML.includes(userInput)})
       
       projectsToSearch.forEach(project => project.classList.remove("hidden"))
   }



searchButton.addEventListener("click", searchProjects)