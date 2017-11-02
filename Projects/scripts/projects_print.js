projectOut = document.getElementsByClassName("projects")[0];

storedProjects.forEach(function(project) {
    
    
    projectOut.innerHTML += 
        `
        <article class="project__entry white-bg">
            <h1>${project.title}</h1>
            <h2>Description</h2>
            <p>${project.Description}</p>
            <h2>Link to Project</h2>
            <p>${project.Link}</p>    
        </article>

        `
    
})