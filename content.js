
window.addEventListener("load",() => {
    console.log(localStorage)
    if(!localStorage.getItem("links")) localStorage.setItem("links",JSON.stringify([]))
    else {
        const links = JSON.parse(localStorage.getItem("links"))
        console.log(links)
        for(let link of links) {
            addLink(link)
        }
    }
    // const test = localStorage.getItem("links")
    // if(test) addLink(test);
})
const partnerButton = document.querySelector(".partner-button")

partnerButton.addEventListener("click",(e) => {
    const input = document.querySelector(".partner-input")
    const url = input.value
    if(url) {
        const oldArray = JSON.parse(localStorage.getItem("links"))
        const newLinks = [...oldArray,url]
        localStorage.setItem("links",JSON.stringify(newLinks))
        addLink(url,newLinks.length - 1);
    }
})


function addLink(url,length) {
    
    // console.log(JSON.parse(localStorage.getItem("links")))


    const container = document.querySelector(".container")
    const linkContainer = document.createElement("div")
    const newLink = document.createElement("a")
    const deleteButton = document.createElement("button")
    const partnerLinks = document.querySelector(".partner-links")

    deleteButton.addEventListener("click",(e) => {
        const {id} = e.target.dataset
        const oldArray = JSON.parse(localStorage.getItem("links"))
        oldArray.splice(id,1)
        localStorage.setItem("links",JSON.stringify(oldArray))

        console.log(localStorage)
        partnerLinks.innerHTML = ""
        for(let link of oldArray) {
            addLink(link)
        }
        // localStorage.clear()

        // console.log(container.ch)
        // container.removeChild(linkContainer)
    })
    deleteButton.setAttribute("data-id",length)
    deleteButton.setAttribute("id","deleteButton")
    deleteButton.textContent = "X"

    linkContainer.setAttribute("id","linkContainer")

    newLink.textContent = "Partner"
    newLink.setAttribute("href",url)
    newLink.setAttribute("target","_blank")

    linkContainer.appendChild(newLink)
    linkContainer.appendChild(deleteButton)

    partnerLinks.appendChild(linkContainer)
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