let contactArchive = {
    "email": "bowmant388@hotmail.com",
    "Twitter": "https://twitter.com/Tgbowman",
    "Facebook": "https://www.facebook.com/tgbowman?ref=bookmarks",
    "Resume": "Tyler%20Bowman%20Resume%20May%202017.pdf"
}

const ContactArchiveString = JSON.stringify(contactArchive);
localStorage.setItem("ContactArchive", ContactArchiveString)

const storedContact = JSON.parse(localStorage.getItem("ContactArchive"))