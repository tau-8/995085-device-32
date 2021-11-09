const cartLink = document.querySelector('.user-menu__link--cart');
const cartPopover = document.querySelector('.minicart');
const cartElements = document.querySelectorAll('.minicart *');
let cartPopoverIsOn = false;

cartLink.addEventListener('click', event => {
  event.stopPropagation();
  swapClass(cartPopover, cartPopover.classList[0], cartPopoverIsOn);
  if (!cartPopoverIsOn) {
    document.body.addEventListener('click', closePopover);
  } else {
    document.body.removeEventListener('click', closePopover);
  }
  cartPopoverIsOn = !cartPopoverIsOn;
});
