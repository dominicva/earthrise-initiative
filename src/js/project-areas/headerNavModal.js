// refactor: this file shouldn't be in this directory.
// beware of dependencies
export let isMenuModalOpen = false;

const openMenuModal = (button, nav) => {
  button.textContent = 'close';
  nav.classList.add('open');
};

const closeMenuModal = (button, nav) => {
  button.textContent = 'menu';
  nav.classList.remove('open');
};

export const menuToggleBtnHandler = () => {
  const menuToggleBtn = document.getElementById('header__menu-btn');
  const headerNav = document.querySelector('.header__nav');
  if (!isMenuModalOpen) {
    openMenuModal(menuToggleBtn, headerNav);
    isMenuModalOpen = true;
  } else {
    closeMenuModal(menuToggleBtn, headerNav);
    isMenuModalOpen = false;
  }
};
