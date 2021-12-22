let suggestions = ['Smn1', 'Smn2', 'Smn3', 'Smn4']
let searchWrapper = document.querySelector('.searchInput')
let inputBox = searchWrapper.querySelector('input')
let suggBox = searchWrapper.querySelector('.autocompleteBox')


// Test when typing in input
inputBox.addEventListener('keyup', function (e) {
    let userData = inputBox.value
    let emptyArray = []
    
    // If input value is not empty
    if(userData !== '') {
        emptyArray = suggestions.filter(function (data) {
            for(let i = 0; i < userData.length; ++ i) {
                // Searching for letters that match with suggestions array
                if(data.toLocaleLowerCase().indexOf(userData[i].toLocaleLowerCase()) < 0) {
                    return false
                }
            }

            return true
        })

        // Creating a new array with li tag
        emptyArray = emptyArray.map(function (data) {
            return data = '<li>'+ data +'</li>'
        })

        // Clearing the autocomplete box
        suggBox.innerHTML = ''

        // Putting the li array
        for(let i = 0; i < emptyArray.length; ++ i) {
            suggBox.innerHTML += emptyArray[i]
        }

        // Showing the autocomplete box
        searchWrapper.classList.add('active')

        // Adding the onclick event to the list items
        let allListElements = suggBox.querySelectorAll('li')
        
        for(let i = 0; i < allListElements.length; ++ i) {
            allListElements[i].setAttribute('onclick', 'select(this)')
        }
    }
    // If the input value is empty
    else {
        // Removing everything in autocomplete box and putting the initial values
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


// Onclick event function
function select(element) {
    inputBox.value = element.innerHTML
    searchWrapper.classList.remove('active')

    document.querySelector('.madeByWho p').innerHTML = `made by ${element.innerHTML}`
    document.querySelector('.imageBoxGallery').style.background = `url('./Images/Gallery/Gradient${element.innerHTML}.png')`

    document.querySelector('.imageBoxGallery').addEventListener('click', function () {
        window.open(`./GallerySmn/gall${element.innerHTML}.html`, '_self')
    })
}


// Showing the full autocomplete box if the input is selected
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


// Removing the shown autocomplete box if you click somewhere else
document.querySelector('.heroContent').addEventListener('click', function(event) {
    if(!(event.target.parentNode.className === 'searchInput active' || event.target.parentNode.className === 'autocompleteBox')) {
        searchWrapper.classList.remove('active')
    }
})