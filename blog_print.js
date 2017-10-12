let blogOut = document.getElementsByClassName("blogs")[0];

for (let i = 0; i < storedBlogs.length; i++) {
    let blog = storedBlogs[i];
    
    blogOut.innerHTML = 
        `
        <article class="white-bg">
            <h1>${blog.title}</h1>
            <h2>by: ${blog.author}</h2>
            <p>${blog.entry}</p>
            <h4 class="date">${blog.date}</h4>
        </article>

        `
    
}
