(()=>{"use strict";const e=document.querySelector(".header"),t=e.clientHeight,l=document.querySelector(".header__subnav"),o=document.querySelector(".header__burger"),c=document.querySelectorAll(".header__lst"),s=document.querySelectorAll(".header__wrap"),r=document.querySelectorAll(".arrow");document.onscroll=function(){window.scrollY>t?(e.classList.add("header__fixed"),document.body.style.marginTop=`${t}px`):(e.classList.remove("header__fixed"),document.body.removeAttribute("style"))},o.addEventListener("click",(()=>{l.classList.toggle("active-subnav"),o.classList.toggle("active"),1==boolean(l.classList.toggle("active-subnav"))?document.html.style.overflow="hidden":document.html.style.overflow="visible"}));for(let e=0;e<s.length;e++){let t=s[e],l=c[e],o=r[e];t.addEventListener("click",(()=>{l.classList.toggle("active-menu"),o.classList.toggle("open")}))}})();