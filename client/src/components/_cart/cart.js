import React from 'react';

const Cart = () => {

    return (
        <div> My cart</div>

    )
}


/*let carts = document.querySelectorAll();

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        cartsNumbers(products[i]);
        totalCost(products[i])
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart').textContent= 1;
    }
}
function cartsNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
      productNumbers = parseInt(productNumbers);
      if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart').textContent= productNumbers + 1;
      } else {
          localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart').textContent= 1;
    }
    setItems(product);
}

//usar id o tags
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);

    if(cartItems !== null) {
        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart= 1;
        cartItems = {
            [product.id]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItems('totalCost', cartCost + product.price);
    } else {
        localStorage.setItems('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems= localStorage.getItems('productsInCart');
    cartItems= JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.value(cartItems).map(item => {
            productContainer.innerHTML +=`
            <div class= "product">
                <ion-icon name= "close-circle"></ion-icon>
                <img src="./images/${item.id}.jpg"/>
                <span> ${item.name}</span>
            </div>
                 <div class ="price">${item.price},00</div>
                 <div class="quantity">
            </div>
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
            </div>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total"> $${itemInCart * item.price},00</div>`
            ;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle"> basket Total</h4>
            <h4 class="basketTotal"> $${cartCost},00</h4>`
        ;
    }
}
    onLoadCartNumbers();
    displayCart();*/

    export default Cart;