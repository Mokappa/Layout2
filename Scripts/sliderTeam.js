let slider = document.querySelector('.swiperTeamSlides')
let isDown = false
let startX
let scrollLeft


// Setting the slider to be in the middle for the first time
slider.scrollLeft = (Math.floor(slider.scrollWidth / 2) - Math.floor(slider.offsetWidth / 2))


// Test if the device is desktop or mobile
if(deviceType() === 'tablet' || deviceType() === 'mobile') {
    // Mobile touch test the class of target
    window.addEventListener('touchstart', function (e) {
        if(e.target.parentNode.className !== 'swiperTeamSlides' && e.target.parentNode.className !== 'swiperSlide' && e.target.parentNode.className !== 'svgFlex' && e.target.parentNode.className.animVal !== 'svgFlexChild' && e.target.parentNode.className !== 'heroContent') {
            setTimeout(function () {
                slider.scrollTo({
                    left: (Math.floor(slider.scrollWidth / 2) - Math.floor(slider.offsetWidth / 2)),
                    behavior: 'smooth'
                })
            }, 500)
        }
    })
}
else {
    slider.addEventListener('mouseenter', function () {
        cursorId.classList.remove('cursor')
    })

    slider.addEventListener('mousedown', function (e) {
        isDown = true
    
        startX = e.pageX
        scrollLeft = slider.scrollLeft
    })
    
    slider.addEventListener('mousemove', function (e) {
        if(!isDown) {
            return
        }
    
        e.preventDefault()
    
        let x = e.pageX - slider.offsetLeft
    
        slider.scrollLeft = scrollLeft - (x - startX)
    })

    slider.addEventListener('mouseup', function () {
        isDown = false
    })
    
    slider.addEventListener('mouseleave', function () {
        cursorId.classList.add('cursor')
    
        isDown = false
    
        setTimeout(function () {
            slider.scrollTo({
                left: (Math.floor(slider.scrollWidth / 2) - Math.floor(slider.offsetWidth / 2)),
                behavior: 'smooth'
            })
        }, 500)
    })
}