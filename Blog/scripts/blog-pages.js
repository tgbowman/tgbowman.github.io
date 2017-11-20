const totalBlogs = storedBlogs.length;
const itemsPerPage = 5;
const totalPages = Math.ceil(totalBlogs / itemsPerPage);
let blogOut = document.getElementById("blogs");
let buttonsOut = document.getElementById("pageButtons")

