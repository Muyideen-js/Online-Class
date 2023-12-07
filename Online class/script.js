

const menuIcon = document.getElementById('menuIcon');
const menuBar = document.getElementById('menuBar');
const navLinks = document.querySelector('nav ul');

menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});







var type = new Typed(".auto-input", {
    strings: ["Largest Online Web Development School Worldwide.", "The Globe's Biggest Web Developer School Online.", "World's Largest Web Developer Training Platform."],
    typeSpeed: 70,
    backSpeed: 20,
    loop: true
})

AOS.init();




let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let slider = document.querySelector('.slider')

btn1.onclick = function () {
    this.style.background = 'white'

    btn2.style.background = 'transparent'
    btn3.style.background = 'transparent'
    slider.style.marginLeft = '0px'
}
btn2.onclick = function () {
    this.style.background = 'white'

    btn1.style.background = 'transparent'
    btn3.style.background = 'transparent'
    slider.style.marginLeft = '-600px'

}
btn3.onclick = function () {
    this.style.background = 'white'

    btn1.style.background = 'transparent'
    btn2.style.background = 'transparent'
    slider.style.marginLeft = '-1200px'

}

let scrlFxd = document.getElementById('scrlFxd');


if (window.screenY > 100) {
    scrlFxd.style.display = 'block'
} else {
    scrlFxd.style.display = 'none'
}


let btns1 = document.getElementById('btns1')
let btns2 = document.getElementById('btns2')
let btns3 = document.getElementById('btns3')
let outerLine = document.querySelector('.outerLine')

btns1.onclick = function () {
    this.style.background = 'white'

    btn2.style.background = 'transparent'
    btn3.style.background = 'transparent'
    outerLine.style.marginLeft = '0%'
}
btns2.onclick = function () {
    this.style.background = 'white'

    btn1.style.background = 'transparent'
    btn3.style.background = 'transparent'
    outerLine.style.marginLeft = '30%'

}
btns3.onclick = function () {
    this.style.background = 'white'

    btn1.style.background = 'transparent'
    btn2.style.background = 'transparent'
    outerLine.style.marginLeft = '30%'

}



$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
})

$('.flex-container').smoove({
    offset: '40%'
});