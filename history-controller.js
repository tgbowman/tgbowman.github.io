const getHistory = JSON.parse(localStorage.getItem("historyArchive"))
let workOut = document.getElementById("workHist")
let educationOut = document.getElementById("education")
let licenseOut = document.getElementById("license")


for (let i = 0; i < getHistory[0].length; i++) {
    let job = getHistory[0][i];

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
}

for (let i = 0; i < getHistory[1].length; i++) {
    let education = getHistory[1][i];

    educationOut.innerHTML += 
    `
    <section class= "education">
        <h2>${education.school}</h2>
        <ul>
            <li>Major: ${education.major}</li>
            <li>Minor: ${education.minor}</li>
            <li>Graduation Date: ${education.gradDate}</li>

    `

}

for (let i = 0; i < getHistory[2].length; i++) {
    let license = getHistory[2][i];

    licenseOut.innerHTML +=
    `
    <h2>Teacher License</h2>
    <ul>
        <li>License Number: ${license.number}</li>
        <li>Expiration Date: ${license.ExpDate}</li>

    `

}