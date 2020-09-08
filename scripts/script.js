const headerBurger = document.querySelector('.header_burger')
const navTag = document.querySelector('nav')
const body = document.querySelector('body')
const linkNav = navTag.querySelectorAll('.link-nav')

window.onload = function() {
    headerBurger.onclick = function() {
        headerBurger.classList.toggle('active')
        navTag.classList.toggle('active')
        body.classList.toggle('lock')
    }
    for(let i=0; i<linkNav.length; i++) {
        linkNav[i].onclick = function() {
            navTag.classList.remove('active')
            headerBurger.classList.remove('active')  
        }
    }
 }