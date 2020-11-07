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
          localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart').textContent= 1;
    }
    setItems(product);
}

function setItems(product) {
    product.inCart = 1;

    let cartItems = {
        [product.id]: product
    }
    localStorage.setItem('productsInCart', cartItems);
}
    onLoadCartNumbers();
       
           // localStorage.setItems('cartNumbers', productsNumbers + 1);
         
       
}


      



