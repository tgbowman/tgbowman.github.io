contactOut = document.getElementsByClassName("contacts")[0];


   for (var i = 0; i < storedContact.length; i++) {
       var contact = storedContact[i];
       

        contactOut.innerHTML += 
        `
        <li><img src="${contact.img}" alt="${contact.name}-icon" width="25px"><a href="${contact.url}">${contact.name}</a></li>
        `
    }







