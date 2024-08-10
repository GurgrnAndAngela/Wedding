const checkBox = document.querySelector('.play-btn')
const audio = document.querySelector('audio')
const dateElements = document.querySelectorAll('.js-date')

let currentDate = new Date()
let weddingDate = new Date(2024, 10, 11) 

let start = Date.parse(currentDate)
let end = Date.parse(weddingDate)

let day = 0

for(let i = start; i <= end; i = i + 24*60*60*1000){
        day++
}

dateElements[0].textContent = day 

if(day !== 0){
function updateClock(){
    const time = new Date()
    let hours = time.getHours().toString().padStart(2, '0')
    let minutes = time.getMinutes().toString().padStart(2, '0')
    let seconds = time.getSeconds().toString().padStart(2, '0')
    dateElements[1].textContent = hours
    dateElements[2].textContent = minutes 
    dateElements[3].textContent = seconds 
}

setInterval(updateClock, 1000)
updateClock()

}else {
    dateElements[0].textContent = '00'
    dateElements[1].textContent = '00'
    dateElements[2].textContent = '00'
    dateElements[3].textContent = '00'
}

checkBox.addEventListener('click', function(e){
    if(checkBox.checked) {
        audio.play()   
    }else {       
        audio.pause()
    }
})

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image.hidden')

  const observer = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
  })
  }, {
    threshold: 0.1
  })
  
  images.forEach(image => {
    observer.observe(image)
  })
})
 
