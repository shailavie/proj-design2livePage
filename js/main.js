'use strict';



function toggleArrow(ev) {
    ev.stopPropagation();
    var elBtn= ev.fromElement
    var elArrow = elBtn.querySelector('span.btn-arrow')
    elArrow.classList.toggle('hide-visibility');
}


function toggleMenu(){
    var elMenu = document.querySelector('.menu');
    elMenu.classList.toggle('open')
    elMenu.classList.toggle('show')
    var elMenuBtn = document.querySelector('.menu-mobile-btn')
    if (elMenu.classList.contains('open')) {
        elMenuBtn.innerHTML = '<i class="fas fa-times">'
    } else {
        elMenuBtn.innerHTML = '<i class="fas fa-bars">'
    }
}