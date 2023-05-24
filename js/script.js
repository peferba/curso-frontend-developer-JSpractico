const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); 
const menuHamIcon=document.querySelector("#burger-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const mobileMenu=document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',togglecarritoicom)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoicom (){
    aside.classList.toggle('inactive');
}