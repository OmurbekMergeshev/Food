//tabs
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display =  'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item,i) => {
            if (event.target === item) {
                hideTabContent()
               showTabContent(i)
            }
        })
    }
}

let indexValue = 0

const Slideshow = () => {
        setTimeout(Slideshow,2000)
    let x
    for (x = 0; x < tabContent.length; x++){
        tabContent[x].style.display = 'none'
        tabs[x].setAttribute('class','tabheader__item')
    }
    indexValue++
    if (indexValue > tabContent.length){indexValue = 1}
    tabContent[indexValue - 1].style.display = 'block'
    tabs[indexValue -1].setAttribute('class','tabheader__item tabheader__item_active')
}
Slideshow()

//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'

    clearInterval(modalTimeout)

}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false;
window.onkeydown =(event) => event.code === 'Bacspace' ? closeModal() : false

const openModalScroll = () => {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
    }
}
window.addEventListener('scroll',openModalScroll)
const modalTimeout = setTimeout(openModal, 40000)

//data

 const deadline = '2023-02-25'

function getTimerRemaining(deadline) {
    const t = new Date(deadline) - new Date(),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60)

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
    }
}

function setClock(element, deadline){
    const elem = document.querySelector(element)
    days = elem.querySelector('#days')
    hours = elem.querySelector('#hours')
    minutes = elem.querySelector('#minutes')
    seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function makeZero(num) {
        if(num > 0 && num < 10) {
            return `0${num}`
        }else {
            return num
        }
    }

    function updateClock() {
        const t = getTimerRemaining(deadline)
        days.innerHTML = makeZero(t.days)
        hours.innerHTML = makeZero(t.hours)
        minutes.innerHTML = makeZero(t.minutes)
        seconds.innerHTML = makeZero(t.seconds)
    }
}


setClock('.timer', deadline)






// post data
// const forms = document.querySelectorAll('form')

// const postData = (form) => {
    // form.addEventListener('submit', (e) => {
//         e.preventDefault()

//         const request = new XMLHttpRequest()
//         request.open("POST","server.php")
//         request.setRequestHeader("Content-type", "application/json")

//         const formData = new FormData(forms[0])
//         const object = {}

//         formData.forEach()
//     })
// }
