//Nav Background
let header = document.querySelector('header')
let navLinksA = document.querySelectorAll('.navLink')
let cursor = document.querySelector('.cursor')



if(deviceType() === 'desktop') {
    // Ball following cursor    
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX  + 'px'
        cursor.style.top = e.clientY + 'px'
    })
}


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


function deviceType() {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {
        return "tablet"
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        return "mobile"
    }

    return "desktop"
}