const qtyBtnUp = document.querySelector('#qtybtnup');
const qtyBtnDown = document.querySelector('#qtybtndown');
const itemQty = document.querySelectorAll('.qtyinput');

qtyBtnDown.addEventListener('click', () => {
    itemQty++;
} )