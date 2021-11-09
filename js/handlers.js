// Переключает модификатор на классе
const toggleModifier = (className, boolean, mod1, mod2) => {
  return !boolean ? `${className}${mod1}` : `${className}${mod2}`;
}

// Переключает класс на элементе
const swapClass = (target, className, isVisible) => {
  target.classList.remove(toggleModifier(className, isVisible, '--hidden', '--visible'));
  target.classList.add(toggleModifier(className, !isVisible, '--hidden', '--visible'));
}

// Закрывает поповер нажатием вне его
const closePopover = (e) => {
  for (element of cartElements) {
    if (e.target === cartPopover || e.target === element) {
      return;
    }
  }
  cartPopover.classList.remove(toggleModifier(cartPopover.classList[0], cartPopoverIsOn, '--hidden', '--visible'));
  cartPopover.classList.add(toggleModifier(cartPopover.classList[0], !cartPopoverIsOn, '--hidden', '--visible'));
  cartPopoverIsOn = !cartPopoverIsOn;
  document.body.removeEventListener('click', closePopover);
}

// Закрывает модальное окно нажатием на фон или кнопку "Закрыть"
const closeModal = (e) => {
  if (e.target !== modal && e.target !== modalCloseButton) {
    return;
  }
  deliveryModal.classList.remove(toggleModifier(deliveryModal.classList[0], deliveryModalIsOn, '--hidden', '--visible'));
  deliveryModal.classList.add(toggleModifier(deliveryModal.classList[0], !deliveryModalIsOn, '--hidden', '--visible'));
  deliveryModalIsOn = !deliveryModalIsOn;
  deliveryModal.removeEventListener('click', closeModal);
  modalCloseButton.removeEventListener('click', closeModal);
}
