$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger').toggleClass('active')
        $('nav').toggleClass('active')
        $('body').toggleClass('lock')
    $('.link-nav').click(function() {
        $('nav').removeClass('active')
        $('.header_burger').removeClass('active')
    })
    })
})