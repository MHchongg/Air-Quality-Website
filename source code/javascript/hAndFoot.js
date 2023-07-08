let dropdownContent = document.querySelector('.dropdown-content')
let dropdown = document.querySelector('.dropdown')
let dropbtn = document.querySelector('.dropbtn')

function showMenu() {

    if(dropbtn.style.transform === 'rotate(90deg)' || dropdownContent.style.display === 'block') {
        dropbtn.style.transform = 'rotate(0deg)'
        dropdownContent.style.display = 'none'
    }
    else {
        dropbtn.style.transform = 'rotate(90deg)'
        dropdownContent.style.display = 'block'
    }
}