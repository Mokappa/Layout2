let circleClipPath = document.querySelector('#imageBackground2')
let ontopOf = document.querySelector('.boxShadowOn')
let imageScrollAppear = document.querySelector('#boxOnlyImageAppear')
let testIfAppear = true


// Test if the device is desktop or mobile
if(deviceType() === 'tablet' || deviceType() === 'mobile') {
    circleClipPath.style.clipPath = `circle(0 at 0px 0px)`
    ontopOf.addEventListener('click', function () {
        if(testIfAppear) {
            circleClipPath.style.clipPath = `circle(700px at 0px 0px)`
            testIfAppear = false
        }
        else {
            circleClipPath.style.clipPath = `circle(0 at 0px 0px)`
            testIfAppear = true
        }
    })
    
    // The point when Night Image appears on scroll
    window.addEventListener('scroll', function () {
        imageScrollAppear.style.opacity = (imageScrollAppear.offsetHeight - 100 - imageScrollAppear.getBoundingClientRect().top) / imageScrollAppear.offsetHeight
    })
}
else {
    window.addEventListener('mousemove', function (e) {
        let positionCircle = circleClipPath.getBoundingClientRect()

        // Test if the cursor is on the image
        if(e.pageX > offset(ontopOf).left && e.pageY > offset(ontopOf).top && e.pageX < (offset(ontopOf).left + ontopOf.offsetWidth) && e.pageY < (offset(ontopOf) .top + ontopOf.offsetHeight)) {
            circleClipPath.style.opacity = '1'
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
    // The point when Night Image appears on scroll
    window.addEventListener('scroll', function () {
        imageScrollAppear.style.opacity = (imageScrollAppear.offsetHeight - 300 - imageScrollAppear.getBoundingClientRect().top) / imageScrollAppear.offsetHeight
    })
}


// Getting the position function
function offset(element) {
    let rect = element.getBoundingClientRect()

    return { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX
    }
}

