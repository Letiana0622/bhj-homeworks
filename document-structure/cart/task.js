let controls = Array.from(document.querySelectorAll('.product__quantity-control'));
let buttons = Array.from(document.querySelectorAll('.product__add'));
let cart = document.querySelector('.cart__products');

function qtyControl (event) {
   let qty = event.target.parentElement.querySelector('.product__quantity-value');
   let qtyValue = parseInt(qty.innerText);
   if (event.target.classList.contains('product__quantity-control_inc')) {qtyValue += 1}
   else if (qtyValue === 1) {qtyValue === 1}
   else {qtyValue -= 1};
   qty = event.target.parentElement.querySelector('.product__quantity-value').innerText = qtyValue};

function addToCart (event) {
    let checkProductId = event.target.closest('.product').getAttribute('data-id');
    let array = Array.from(cart.querySelectorAll('.cart__product'));

    function checkCart(element, index, array) {
        let checkProductId = event.target.closest('.product').getAttribute('data-id');
        if (parseInt(element.getAttribute('data-id')) === parseInt(checkProductId)) {return true}
        else {return false};
      };    

    if (array.find(checkCart) === undefined) {
                let productId = event.target.closest('.product');
                let productIdClone = productId.cloneNode();
                productIdClone.classList.remove('product');
                productIdClone.classList.add('cart__product');
                cart.appendChild(productIdClone);
        
                let photo = document.createElement('img');
                photo.classList.add('cart__product-image');
                let srcLink = productId.querySelector('.product__image').getAttribute('src');
                photo.setAttribute('src', srcLink);
                productIdClone.appendChild(photo);
        
                let qtyCart = document.createElement('div');
                qtyCart.classList.add('.cart__product-count');
                let qtyProduct = productId.querySelector('.product__quantity-value').innerText;
                qtyCart.innerText = qtyProduct
                productIdClone.appendChild(qtyCart);
            }
    
            else {Array.from(cart.querySelectorAll('.cart__product')).forEach((cartId) => {
                if(parseInt(cartId.getAttribute('data-id')) === parseInt(checkProductId)) 
                {
                let qtyToInc = cartId.getElementsByTagName('div')[0].textContent;
                let qtyToTake = event.target.previousElementSibling.children[1].textContent;
                cartId.getElementsByTagName('div')[0].textContent = parseInt(qtyToInc) + parseInt(qtyToTake);
                    } })};
        };            

controls.forEach((control) => {control.addEventListener('click', qtyControl)})
buttons.forEach((button) => {button.addEventListener('click', addToCart)});
