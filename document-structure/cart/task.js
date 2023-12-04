let controls = Array.from(document.querySelectorAll('.product__quantity-control'));
let buttons = Array.from(document.querySelectorAll('.product__add'));
let cart = document.querySelector('.cart__products');

function qtyControl(event) {
  let productQty = event.target.parentElement.querySelector('.product__quantity-value');
  let productQtyValue = parseInt(productQty.innerText);
  let increaseQtyIsTrue = event.target.classList.contains('product__quantity-control_inc');
  if (increaseQtyIsTrue) {
    productQty.innerText = productQtyValue + 1;
  }
  else if (!increaseQtyIsTrue && productQtyValue !== 1) {
    productQty.innerText = productQtyValue - 1;
  };
};

function addToCart (event) {
  let productSelected = event.target.closest('.product');
  let productSelectedId = parseInt(productSelected.getAttribute('data-id'));
  let productSelectedQty = parseInt(productSelected.querySelector('.product__quantity-value').textContent);
  let productsInCart = Array.from(cart.querySelectorAll('.cart__product'));
  const productInCartWithSelectedId = productsInCart.find((element) => {
    if (parseInt(element.getAttribute('data-id')) === productSelectedId) {
      return element
    };
  });

  if (!productInCartWithSelectedId) {
    cart.innerHTML +=`
    <div class="cart__product" data-id="${productSelectedId}">
      <img class="cart__product-image" src="${productSelected.querySelector('.product__image').getAttribute('src')}">
      <div class="cart__product-count">${productSelectedQty}</div>
    </div>`;
    }
  else {
   let productInCartCount = productInCartWithSelectedId.children[1];
   productInCartCount.textContent = parseInt(productInCartCount.textContent) + productSelectedQty;
  };
};

controls.forEach((control) => {control.addEventListener('click', qtyControl)})
buttons.forEach((button) => {button.addEventListener('click', addToCart)});
