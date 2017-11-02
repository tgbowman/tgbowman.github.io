const getHistory = JSON.parse(localStorage.getItem("historyArchive"))
let workOut = document.getElementById("workHist")
let educationOut = document.getElementById("education")
let licenseOut = document.getElementById("license")


getHistory[0].forEach(function(job) {
    

    workOut.innerHTML += 
    `
    <section class="job">
        <h2>${job.location}</h2>
        <ul>
            <li>Job Title: ${job.job}</li>
            <li>Start Date: ${job.start}</li>
            <li>End Date: ${job.end}</li>
        </ul>
        <h3>School Contact Info:</h3>
        <ul>
            <li>Phone: ${job.phone}</li>
            <li>Principal: ${job.boss}</li>
            <li>Supervisor: ${job.supervisor}</li>
    </section>

    `
})

getHistory[1].forEach(function(education) {

    educationOut.innerHTML += 
    `
    <section class= "education">
        <h2>${education.school}</h2>
        <ul>
            <li>Major: ${education.major}</li>
            <li>Minor: ${education.minor}</li>
            <li>Graduation Date: ${education.gradDate}</li>

    `

})

getHistory[2].forEach(function(license) {

    licenseOut.innerHTML +=
    `
    <h2>Teacher License</h2>
    <ul>
        <li>License Number: ${license.number}</li>
        <li>Expiration Date: ${license.ExpDate}</li>

    `

})