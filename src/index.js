import './styles/index.scss';

const header = document.querySelector('.header'),
        headerH = header.clientHeight,
        subMenu = document.querySelector('.header__subnav'),
        headerB = document.querySelector('.header__burger'),
        headerLst = document.querySelectorAll('.header__lst'),
        headerMenu = document.querySelectorAll('.header__wrap'),
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
    if(Boolean('active-subnav')) {
        document.body.style.overflow = "hidden";
        console.log(Boolean('active-subnav'))
    }
    else {
        document.body.style.overflow = "visible";
        console.log("&_&")
    }
})

for(let i=0; i<headerMenu.length; i++){

    let key = headerMenu[i]
    let keySub = headerLst[i]
    let arrowKey = arrow[i]

    key.addEventListener('click', () => {
        keySub.classList.toggle('active-menu')
        arrowKey.classList.toggle('open')
    })
    
}


