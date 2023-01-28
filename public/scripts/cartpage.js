// const qtyBtnUp = document.querySelector('#qtybtnup');
// const qtyBtnDown = document.querySelector('#qtybtndown');

const seeMoreBtn = document.querySelector('.expand-products-btn');
const productsWrap = document.querySelector('.responsive-wrap-items');
const desktop = document.querySelector('.item-wrap-desktop-view');
const bottombanner = document.querySelector('.bottom-banner-total-wrap');
const loginWrap = document.querySelector('.login-coupon-parent-wrap');

// qtyBtnDown.addEventListener('click', () => {
//     itemQty++;
// } )

seeMoreBtn.addEventListener('click', () => {
    productsWrap.classList.toggle('expanded-products-toggle');
    desktop.classList.toggle('expanded-products-toggle');
    bottombanner.classList.toggle('marginadd');
    loginWrap.classList.toggle('login-wrap-margin-toggle')
    seeMoreBtn.classList.toggle('desktop-expand-btn-toggle')
})
