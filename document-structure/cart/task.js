let controls = Array.from(document.querySelectorAll('.product__quantity-control'));
let buttons = Array.from(document.querySelectorAll('.product__add'));
let cart = document.querySelector('.cart__products');

function qtyControl(event) {
  let qty = event.target.parentElement.querySelector('.product__quantity-value');
  let qtyValue = parseInt(qty.innerText);
  if (event.target.classList.contains('product__quantity-control_inc')) {qtyValue += 1;}
  else if (qtyValue === 1) {qtyValue === 1;}
  else {qtyValue -= 1;}
  qty.innerText = qtyValue;
};

function addToCart (event) {
  let checkProductId = event.target.closest('.product').getAttribute('data-id');
  let array = Array.from(cart.querySelectorAll('.cart__product'));
  const isProductInCart = array.find(function checkCart(element, index, array) {
    if (parseInt(element.getAttribute('data-id')) === parseInt(checkProductId)) {return true;}
    else {return false};
  });

  if (!isProductInCart) {
    let productIdClone = event.target.closest('.product').cloneNode();
    productIdClone.classList.remove('product');
    productIdClone.classList.add('cart__product');
    cart.appendChild(productIdClone);

    let photo = document.createElement('img');
    photo.classList.add('cart__product-image');
    photo.setAttribute('src', event.target.closest('.product').querySelector('.product__image').getAttribute('src'));
    productIdClone.appendChild(photo);

    let qtyCart = document.createElement('div');
    qtyCart.classList.add('.cart__product-count');
    qtyCart.innerText = event.target.closest('.product').querySelector('.product__quantity-value').innerText;
    productIdClone.appendChild(qtyCart);
    }
  else if(isProductInCart) {
    Array.from(cart.querySelectorAll('.cart__product')).forEach((cartId) => {
      let qtyToInc = cartId.getElementsByTagName('div')[0].textContent;
      let qtyToTake = event.target.previousElementSibling.children[1].textContent;
      cartId.getElementsByTagName('div')[0].textContent = parseInt(qtyToInc) + parseInt(qtyToTake);
    });
  };
};            

controls.forEach((control) => {control.addEventListener('click', qtyControl)})
buttons.forEach((button) => {button.addEventListener('click', addToCart)});
