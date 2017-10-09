const projectArchive = [];
let Project1 = {
    "title": "Overly Excited",
    "Developer": "Tyler Bowman",
    "Description": "In this project I was given an array of words and I needed to create a function that would print them out in sequence to the console log.  Each line had to increase the number of words by one.  I then had to figure out a way to add punctuation after every third word.",
    "Project Link": "https://tgbowman.github.io/overly-excited/"
}
projectArchive.push(Project1);

let Project2 = {
    "title": "Coins to Cash",
    "Developer": "Tyler Bowman",
    "Description": "In this project I had to create a function that would take an object filled with coin values and return the dollar amount.",
    "Project Link": "https://tgbowman.github.io/Coins-to-Cash/"
}
projectArchive.push(Project2);




const projectArchiveString = JSON.stringify(projectArchive);
localStorage.setItem("ProjectArchive", projectArchiveString)

const storedProjects = JSON.parse(localStorage.getItem("ProjectArchive"))