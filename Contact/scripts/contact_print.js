contactOut = document.getElementsByClassName("contacts")[0];


   storedContact.forEach(function (contact) {
       

        contactOut.innerHTML += 
        `
        <li><img src="${contact.img}" alt="${contact.name}-icon" width="25px"><a href="${contact.url}">${contact.name}</a></li>
        `
    })







