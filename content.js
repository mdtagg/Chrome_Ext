
window.addEventListener("load",() => {
    const test = localStorage.getItem("peer")
    if(test) addLink(test);
})
const partnerButton = document.querySelector(".partner")

partnerButton.addEventListener("click",(e) => {
    const input = document.querySelector(".partner-input")
    const url = input.value
    if(url) {
        localStorage.setItem("peer",url)
        addLink(url);
    }
})

function addLink(url) {
    
    const container = document.querySelector(".container")
    const newLink = document.createElement("a")
    newLink.textContent = "Partner"
    newLink.setAttribute("href",url)
    newLink.setAttribute("target","_blank")
    container.appendChild(newLink)
}


/*
CODE GRAVEYARD

struggles:

finding idea
connecting js file to run (content script in manifest.json... docs)
manifest json file 
iframe not working (cors and x frame denial)
calendar data not working (cors)
why input element and dom manip works in the popup html file but not in the popup itself

const iFrame = document.createElement("iframe")
iFrame.setAttribute("class", "ourIFrame")
iFrame.setAttribute("height", "500px")
iFrame.setAttribute("width", "500px")
iFrame.setAttribute("src", "https://www.google.com/")

// iFrame.classList.add("ourIFrame")
// iFrame.style.height = "500px"
// iFrame.style.width = "500px"
// iFrame.src = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"
document.body.appendChild(iFrame)

// const head = document.head 
// const meta = document.createElement("meta")
// meta.setAttribute("http-equiv","Content-Security-Policy")
// meta.setAttribute("content","upgrade-insecure-requests")
// head.appendChild(meta)

// fetch("https://cohort-calendars.us-west-2.elasticbeanstalk.com/calendar/WCRI/64")
// .then((res) => {
//     if(!res.ok) {
//         throw new Error('No data');
//       }
//     return res.json()
// })
// .then(res => {
//     console.log(res)
    
// })

// const xhttp = new XMLHttpRequest()

//     xhttp.onload = function() {
//         let data = this.responseText
//         data = JSON.parse(data)
//         console.log("data")

//     }
//     xhttp.open("GET","http://cohort-calendars.us-west-2.elasticbeanstalk.com/calendar/WCRI/64" )
//     xhttp.send()
*/