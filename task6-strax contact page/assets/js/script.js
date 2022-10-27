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
});

// giving position's top and left for overlay on hovering additiional buttons
const additionsButtons = [...addition.children];
additionsButtons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        const overlay = e.target.children[2];
        overlay.setAttribute('style', `left: ${e.offsetX}px; top: ${e.offsetY}px`);
   })
});

const navLinksWithInnerMenu = [...document.getElementsByClassName('have-inner-links')];
navLinksWithInnerMenu.forEach(mLinks => {
    mLinks.addEventListener('click', function (e) {
        e.preventDefault();
        let innerLinks = this.nextElementSibling;
        innerLinks.classList.toggle('inner-links-active');
    })
});