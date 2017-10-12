projectOut = document.getElementsByClassName("projects")[0];

for (let i = 0; i < storedProjects.length; i++) {
    let project = storedProjects[i];
    
    projectOut.innerHTML += 
        `
        <article class="white-bg">
            <h1>${project.title}</h1>
            <h2>Description</h2>
            <p>${project.Description}</p>
            <h2>Link to Project</h2>
            <p>${project.Link}</p>    
        </article>

        `
    
}