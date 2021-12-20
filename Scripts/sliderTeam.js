let slider = document.querySelector('.swiperTeamSlides')
let isDown = false
let startX
let scrollLeft

slider.scrollLeft = (Math.floor(slider.scrollWidth / 2) - Math.floor(slider.offsetWidth / 2))

slider.addEventListener('mousedown', function (e) {
    isDown = true

    startX = e.pageX
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseup', function () {
    isDown = false
})

slider.addEventListener('mouseenter', function () {
    cursorId.classList.remove('cursor')
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

slider.addEventListener('mousemove', function (e) {
    if(!isDown) {
        return
    }

    e.preventDefault()

    let x = e.pageX - slider.offsetLeft

    slider.scrollLeft = scrollLeft - (x - startX)
})