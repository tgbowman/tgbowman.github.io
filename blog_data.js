const blogArchive = [];
let Blog1 = {
    "date": "October 5, 2017", 
    "author": "Tyler Bowman",
    "title": "First Week of NSS",
    "entry": "This is my first blog post on my personal website!  I have just started NSS and we are currently learning the basics of JavaScript and git.  I am very thankful I took the tim to complete the pre-work.  We are covering so many concepts so quickly that I would be completely lost if I hadn't done it.  I am really enjoying NSS so far!  I look forward to coming to class each day.  There are times when things get very challenging.  I am not going to give up though.  My teachers are excellent!  They really care that we learn the material and are always willing to answer as many questions as we have.  It is evident that they love what they do!"
}

blogArchive.push(Blog1);

const BlogArchiveString = JSON.stringify(blogArchive);
localStorage.setItem("BlogArchive", BlogArchiveString)

const storedBlogs = JSON.parse(localStorage.getItem("BlogArchive"))