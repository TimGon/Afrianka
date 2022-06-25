import './styles/index.scss';

const header = document.querySelector('.header'),
        headerH = header.clientHeight,
        subMenu = document.querySelector('.header__subnav'),
        headerB = document.querySelector('.header__burger'),
        headerMenu = document.querySelectorAll('.header__lst'),
        headerLst = document.querySelectorAll('.header__wrap'),
        arrow = document.querySelectorAll('.arrow');

document.onscroll = function () {
    let scroll = window.scrollY;

    if(scroll > headerH) {
        header.classList.add('header__fixed')
        document.body.style.marginTop =`${headerH}px`
    }
    
    else {
        header.classList.remove('header__fixed')
        document.body.removeAttribute('style')
    }
}

headerB.addEventListener('click', () => {
    subMenu.classList.toggle('active-subnav')
    headerB.classList.toggle('active');
    if(boolean(subMenu.classList.toggle('active-subnav')) == true) {
        document.html.style.overflow = "hidden";
    }
    else {
        document.html.style.overflow = "visible";
    }
})

for(let i=0; i<headerLst.length; i++){

    let key = headerLst[i]
    let keySub = headerMenu[i]
    let arrowKey = arrow[i]

    key.addEventListener('click', () => {
        keySub.classList.toggle('active-menu')
        arrowKey.classList.toggle('open')
    })
    
}


