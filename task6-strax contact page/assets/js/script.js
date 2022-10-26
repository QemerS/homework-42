const menuBtn = document.querySelector('#mobile-menu');
const navBar = document.querySelector('.nav-links');
menuBtn.addEventListener('click', function () {
    navBar.classList.toggle('nav-active');
    // changing icon of button
    const btnIcon = this.children[0];
    if (btnIcon.classList.contains('fa-bars')) {
        btnIcon.setAttribute('class', 'fa-solid fa-xmark fa-2xl');
    } else {
        btnIcon.setAttribute('class', 'fa-solid fa-bars fa-2xl');
    }
});

const dotBtn = document.querySelector('#dot-menu');
const addition = document.querySelector('.additional-buttons');
dotBtn.addEventListener('click', function () {
    addition.classList.toggle('additional-buttons-active')
})