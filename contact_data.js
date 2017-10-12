let contactArchive = [
     {"url": "mailto:bowmant388@hotmail.com",
              "img" : "mail_icon.png",
              "name" : "Email"
            },
    {"url":"https://twitter.com/Tgbowman",
                "img": "twitter_icon2.png",
                "name" : "Twitter"

                },
     {"url": "https://www.facebook.com/tgbowman?ref=bookmarks",
                 "img": "facebook_icon.png",
                 "name": "Facebook"
                },
    {"url":"Tyler%20Bowman%20Resume%20May%202017.pdf",
                "img" : "pdf_icon.png",
                "name": "Resume"
                }
            ]

const ContactArchiveString = JSON.stringify(contactArchive);
localStorage.setItem("ContactArchive", ContactArchiveString)

const storedContact = JSON.parse(localStorage.getItem("ContactArchive"))