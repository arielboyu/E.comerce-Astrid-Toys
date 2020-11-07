let carts = document.querySelectorAll();

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        cartsNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
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
    onLoadCartNumbers();
       
           // localStorage.setItems('cartNumbers', productsNumbers + 1);
         
       
}


      



