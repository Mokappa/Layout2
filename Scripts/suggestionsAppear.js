let suggestions = ['Smn1', 'Smn2', 'Smn3', 'Smn4', 'Smn5', 'Smn6', 'Smn7', 'Smn8', 'Smn9', 'Smn10', 'Smn11', 'Smn12' ]
let searchWrapper = document.querySelector('.searchInput')
let inputBox = searchWrapper.querySelector('input')
let suggBox = searchWrapper.querySelector('.autocompleteBox')

inputBox.addEventListener('keyup', function (e) {
    let userData = inputBox.value
    let emptyArray = []
    
    if(userData !== '') {
        emptyArray = suggestions.filter(function (data) {
            for(let i = 0; i < userData.length; ++ i) {
                if(data.toLocaleLowerCase().indexOf(userData[i].toLocaleLowerCase()) < 0) {
                    return false
                }
            }

            return true
        })

        emptyArray = emptyArray.map(function (data) {
            return data = '<li>'+ data +'</li>'
        })

        suggBox.innerHTML = ''

        for(let i = 0; i < emptyArray.length; ++ i) {
            suggBox.innerHTML += emptyArray[i]
        }

        searchWrapper.classList.add('active')

        let allListElements = suggBox.querySelectorAll('li')
        
        for(let i = 0; i < allListElements.length; ++ i) {
            allListElements[i].setAttribute('onclick', 'select(this)')
        }
    }
    else {
        suggBox.innerHTML = ''

        for(let i = 0; i < suggestions.length; ++ i) {
            suggBox.innerHTML += '<li>'+ suggestions[i] +'</li>'
        }

        let allListElements = suggBox.querySelectorAll('li')

        for(let i = 0; i < allListElements.length; ++ i) {
            allListElements[i].setAttribute('onclick', 'select(this)')
        }

        document.querySelector('.imageBoxGallery').style.background = `url('./Images/Gallery/GradientReset.png')`
        document.querySelector('.madeByWho p').innerHTML = ``
    
        document.querySelector('.imageBoxGallery').addEventListener('click', function () {
            window.open('#')
        })
    }
})

function select(element) {
    inputBox.value = element.innerHTML
    searchWrapper.classList.remove('active')

    document.querySelector('.madeByWho p').innerHTML = `made by ${element.innerHTML}`
    document.querySelector('.imageBoxGallery').style.background = `url('./Images/Gallery/Gradient${element.innerHTML}.png')`

    document.querySelector('.imageBoxGallery').addEventListener('click', function () {
        window.open(`./GallerySmn/gall${element.innerHTML}.html`, '_self')
    })
}

function focusFunction() {
    suggBox.innerHTML = ''

    for(let i = 0; i < suggestions.length; ++ i) {
        suggBox.innerHTML += '<li>'+ suggestions[i] +'</li>'
    }

    let allListElements = suggBox.querySelectorAll('li')

    for(let i = 0; i < allListElements.length; ++ i) {
        allListElements[i].setAttribute('onclick', 'select(this)')
    }

    searchWrapper.classList.add('active')
}

document.querySelector('.heroContent').addEventListener('click', function(event) {
    if(!(event.target.parentNode.className === 'searchInput active' || event.target.parentNode.className === 'autocompleteBox')) {
        searchWrapper.classList.remove('active')
    }
})