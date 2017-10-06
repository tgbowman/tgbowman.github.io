let contactArchive = {
    "email": "bowmant388@hotmail.com",
    "Twitter": "https://twitter.com/Tgbowman",
    "Facebook": "https://www.facebook.com/tgbowman?ref=bookmarks"
}

const ContactArchiveString = JSON.stringify(contactArchive);
localStorage.setItem("ContactArchive", ContactArchiveString)

const storedContact = JSON.parse(localStorage.getItem("ContactArchive"))