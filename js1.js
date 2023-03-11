function myFunction(x) {
    x.classList.toggle("fa-multiply");
    $('.page').toggleClass('dim');
    $('nav').toggleClass('appear')
    
}

$('li').hover(function() {
    $(this).toggleClass('hovercolor');
})

// $('h3').hover(function() {
//     $(this).toggleClass('hovercolor2')
// })



