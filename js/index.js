const cartLink = document.querySelector('.user-menu__link--cart');
const cartPopover = document.querySelector('.minicart');
let cartPopoverIsOn = false;

const deliveryButton = document.querySelector('.delivery__button');
const deliveryModal = document.querySelector('.delivery-modal');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.delivery-modal__close');
let deliveryModalIsOn = false;

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

deliveryButton.addEventListener('click', event => {
  event.stopPropagation();
  swapClass(deliveryModal, deliveryModal.classList[0], deliveryModalIsOn);
  if (!deliveryModalIsOn) {
    modal.addEventListener('click', closeModal);
    modalCloseButton.addEventListener('click', closeModal);
  } else {
    modal.removeEventListener('click', closeModal);
    modalCloseButton.removeEventListener('click', closeModal);
  }
  deliveryModalIsOn = !deliveryModalIsOn;
});
