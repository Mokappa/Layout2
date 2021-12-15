//Nav Background
let header = document.querySelector('header')
let navLinksA = document.querySelectorAll('.navLink')

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 10
    if(!windowPosition) {
        document.querySelector(':root').style.setProperty('--backgroundColor', 'black')
    }
    else {
        document.querySelector(':root').style.setProperty('--backgroundColor', 'white')
    }

    header.classList.toggle('scrollingActive', windowPosition);

    for(let i = 0; i < navLinksA.length; ++ i) {
        navLinksA[i].classList.toggle('scrollNavLinks', windowPosition)
    }
})


// Ball following cursor
let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX  + 'px'
    cursor.style.top = e.clientY + 'px'
})