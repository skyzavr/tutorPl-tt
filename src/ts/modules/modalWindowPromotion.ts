const modalWindow = document.querySelector('.modalWrapper');
const modalOverlay = document.querySelector('.overlay');
const onCloseBtn = document.querySelector('.close__btn-wrapper');

const onHandleModal = () => {
  modalWindow?.classList.toggle('active');
  modalOverlay?.classList.toggle('active');

  modalWindow.classList.contains('active')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
};

const onKeyCloseModal = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    onHandleModal();
  }
};

const onShowModal = () => {
  onHandleModal();
  modalOverlay.addEventListener('click', onHandleModal);
  onCloseBtn.addEventListener('click', onHandleModal);
  window.addEventListener('keydown', onKeyCloseModal);
};

export default onShowModal;
