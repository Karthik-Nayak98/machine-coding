function modalFunctionality() {
  const modalButton = document.getElementById('mdl-btn');
  const modal = document.querySelector('.modal');
  const closeButton = document.getElementById('close-btn');
  const container = document.querySelector('#container');

  function callback(isOpen) {
    console.log(container);
    if (!isOpen) {
      modal.style.display = 'none';
      container.classList.remove('container-active');
    } else {
      modal.style.display = 'block';
      container.classList.add('container-active');
    }
  }
  callback(false);

  const openModal = () => {
    callback(true);
  };
  const closeModal = () => {
    callback(false);
  };

  modalButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
}

modalFunctionality();
