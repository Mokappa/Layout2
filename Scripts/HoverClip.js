let circleClipPath = document.querySelector('#imageBackground2')
let ontopOf = document.querySelector('.boxShadowOn')
let imageScrollAppear = document.querySelector('#boxOnlyImageAppear')

window.addEventListener('mousemove', function (e) {
    let positionCircle = circleClipPath.getBoundingClientRect()
    if(e.pageX > offset(ontopOf).left && e.pageY > offset(ontopOf).top && e.pageX < (offset(ontopOf).left + ontopOf.offsetWidth) && e.pageY < (offset(ontopOf) .top + ontopOf.offsetHeight)) {
        circleClipPath.style.opacity = '1'
        console.log(positionCircle.left, positionCircle.top)
        circleClipPath.style.clipPath = `circle(170px at ${e.pageX - positionCircle.left}px ${e.clientY - positionCircle.top}px)`
        
        cursor.style.height = '0'
        cursor.style.width = '0'
    }
    else {
        circleClipPath.style.clipPath = `circle(0px)`
        circleClipPath.style.opacity = '0'

        cursor.style.height = '25px'
        cursor.style.width = '25px'
    }

})



window.addEventListener('scroll', function () {
    imageScrollAppear.style.opacity = (imageScrollAppear.offsetHeight - 300 - imageScrollAppear.getBoundingClientRect().top) / imageScrollAppear.offsetHeight
})



function offset(element) {
    let rect = element.getBoundingClientRect()

    return { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX
    }
}

