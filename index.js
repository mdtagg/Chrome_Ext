
document.addEventListener('DOMContentLoaded', () => {
   
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
      let data = this.responseText
      data = JSON.parse(data)
      console.log("data")
  
    }
    xhttp.open("GET","http://cohort-calendars.us-west-2.elasticbeanstalk.com/calendar/WCRI/64" )
    xhttp.send()
  });


const button = document.querySelector(".ourButton")

button.addEventListener("click",() => {
    // console.log("test")
    // alert("hello world")
    const newWindow = browser.extension.getBackgroundPage()
    console.log(newWindow)
    // window.localStorage.setItem("url",window.location.href)
    // console.log(window.localStorage)
})
