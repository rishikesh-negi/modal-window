'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlayBG = document.querySelector('.overlay');
const modalWin = document.querySelector('.modal');

const openModal = function () {
  overlayBG.classList.remove('hidden');
  modalWin.classList.remove('hidden');
};

const closeModal = function () {
  modalWin.classList.add('hidden');
  overlayBG.classList.add('hidden');
};

// Method-1 for selecting & modifying the elements from the Nodelist
for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
}

// Method-2 (cleaner) for selecting & modifying elements from the Nodelist
showModal.forEach(e => e.addEventListener('click', openModal));

overlayBG.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWin.classList.contains('hidden')) {
    closeModal();
  }
});
