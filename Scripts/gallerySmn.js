// Clicking arrow to go to Gallery
document.querySelector('.goBackBox').addEventListener('click', function () {
    window.open('../gallery.html', '_self')
})


// Ball following cursor
let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})