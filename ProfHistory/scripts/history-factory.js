const licenseInfo = []
const educationInfo = []
const jobList= []
const profHist = []

//Job History
let  job1 = {
    "job" : "Student Teacher",
    "location" : "Scales Elementary",
    "start" : "January, 2011",
    "end" : "March, 2011",
    "boss" : "Rick West",
    "phone" : "615-472-4830",
    "supervisor" : "Gail Merritt"
}

let  job2 = {
    "job" : "Student Teacher",
    "location" : "Independence High School",
    "start" : "March, 2011",
    "end" : "May, 2011",
    "boss" : "Dr. Todd Campbell",
    "phone" : "615-472-4600",
    "supervisor" : "MaryLee Atenhan"
}

let  job3 = {
    "job" :  "Teacher",
    "location" : "Holloway High School",
    "start" : "April, 2013",
    "end" : "May, 2017",
    "boss" : "Sumatra Drayton",
    "phone" : "615-890-6004",
    "supervisor" : "Fred Campbell"
}

jobList.push(job1, job2, job3)

//Education info
let education1 = {
    "school": "Trevecca Nazarene University",
    "major": "Music Education",
    "minor": "Vocal Performance",
    "gradDate": "May, 2011"
}


educationInfo.push(education1)

//Teaching License Info
let license = {
    "type": "Professional",
    "number": "000564255",
    "ExpDate": "8/31/2022",
    "end1": "421 History 7-12",
    "end2": "423 Government 7-12",
    "end3": "428 Vocal/Gen Music K-12"
}

licenseInfo.push(license)

profHist.push(jobList, educationInfo, licenseInfo)

//Storing info in local storage
let profHistStringify = JSON.stringify(profHist)
const storedHist = localStorage.setItem("historyArchive", profHistStringify)


