const menuEmail =document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); 
const menuHamIcon=document.querySelector("#burger-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const mobileMenu=document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productCardRight = document.querySelector('.product-detail-right');
const closeProductRight =document.querySelector('.product-detail-right-close');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',togglecarritoicon);
closeProductRight.addEventListener('click',closeProduct);




function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productCardRight.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productCardRight.classList.add('inactive');
    aside.classList.add('inactive');
}

function togglecarritoicon (){
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productCardRight.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function openProductRight(){
    productCardRight.classList.remove('inactive'); 
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function closeProduct(){
    productCardRight.classList.add('inactive');
}

const productList =[];

productList.push({
    name: "bike",
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: "pantalla",
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: "laptop",
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for(product of arr){
        const producCard = document.createElement('div');
        producCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.src = product.image;
        productImg.addEventListener('click',openProductRight);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv =document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfofigure =document.createElement('figure');
        const productImgCart =document.createElement('img');
        productImgCart.src="./icons/bt_add_to_cart.svg";
    
        productInfofigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfofigure);
        productInfo.appendChild(productInfofigure);
    
        producCard.appendChild(productImg);
        producCard.appendChild(productInfo);
    
        cardsContainer.appendChild(producCard);
    }
}

renderProducts(productList);