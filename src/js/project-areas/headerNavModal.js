export let isMenuModalOpen = false;

export const menuToggleBtnHandler = () => {
  const menuToggleBtn = document.getElementById('header__menu-btn');
  const headerNav = document.querySelector('.header__nav');
  if (!isMenuModalOpen) {
    menuToggleBtn.innerHTML = 'close';
    headerNav.classList.add('open');
    isMenuModalOpen = true;
  } else {
    menuToggleBtn.innerHTML = 'menu';
    headerNav.classList.remove('open');
    isMenuModalOpen = false;
  }
};
