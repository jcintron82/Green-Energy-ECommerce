const qtyBtnUp = document.querySelector('#qtybtnup');
const qtyBtnDown = document.querySelector('#qtybtndown');
const itemQty = document.querySelectorAll('.qtyinput');
const seeMoreBtn = document.querySelector('.expand-products-btn');
const productsWrap = document.querySelector('.responsive-wrap-items')
qtyBtnDown.addEventListener('click', () => {
    itemQty++;
} )

seeMoreBtn.addEventListener('click', () => {
    productsWrap.classList.toggle('expanded-products-toggle')
})