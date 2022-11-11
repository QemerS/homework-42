// defining behaviour of hamburger menu for mobile nabar
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

// defining behaviour of dot menu for displaying 'Get started' and 'Log In' buttons
const dotBtn = document.querySelector('#dot-menu');
const addition = document.querySelector('.additional-buttons');
dotBtn.addEventListener('click', function () {
    addition.classList.toggle('additional-buttons-active')
});

// giving position's top and left for overlay on hovering additiional buttons
const additionsButtons = [...addition.children];
additionsButtons.forEach(btn => addOverlay(btn));
function addOverlay(btn) {
    btn.addEventListener('mouseenter', (e) => {
        const overlay = e.target.children[2];
        overlay.setAttribute('style', `left: ${e.offsetX}px; top: ${e.offsetY}px`);
    })
}

// defining behaviuor of nested nav item's parent nav-link
function parentNavClickHandle(e) {
    e.preventDefault();
    let innerLinks = this.nextElementSibling;
    innerLinks.classList.toggle('inner-links-active');
}
// if screen ize not more than 990px adding event listener to the parent navlink
let mediaQuery = window.matchMedia("(max-width:990px)");
function addingEvent(mediaQuery) {
    const navLinksWithInnerMenu = [...document.getElementsByClassName('have-inner-links')];
    // @param(aditionalBtnText) forchanging text of firts additional button in devices with bigger screen
    const aditionalBtnText = document.getElementById('get-started').children[1];
    if (mediaQuery.matches) {
        navLinksWithInnerMenu.forEach(mLinks => {
            mLinks.addEventListener('click', parentNavClickHandle);
        });
        // change additional btn text
        aditionalBtnText.textContent = 'Get Started';
    } else {
        navLinksWithInnerMenu.forEach(mLinks => {
            mLinks.removeEventListener('click', parentNavClickHandle)
        });
        // change additional btn text
        aditionalBtnText.textContent = 'Try It Free Now';
    }
}
addingEvent(mediaQuery);
mediaQuery.addListener(addingEvent);

const sendMsgBtn = document.getElementById('send-msg-btn');
addOverlay(sendMsgBtn);

// adding basic validation to the form
const myForm = document.forms[0];
myForm.addEventListener('input', inputEventHandler);
myForm.addEventListener('click', inputEventHandler);

function inputEventHandler(e) {
    const inputValueLength = e.target.value.length;
    const errorOfInput = e.target.nextElementSibling;
    const specifiedErrText = e.target.getAttribute('name');
    if (inputValueLength > 0) {
        errorOfInput.textContent = '';
        errorOfInput.classList = 'error';
    } else {
        errorOfInput.textContent = `Please enter your ${specifiedErrText}`;
        errorOfInput.classList = 'error-active';
    }
}

