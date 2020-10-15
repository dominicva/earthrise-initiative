const menuToggleBtn = document.getElementById('header__menu-btn');
const headerNav = document.querySelector('.header__nav');
let isMenuModalOpen = false;

const menuToggleBtnHandler = () => {
  if (!isMenuModalOpen) {
    menuToggleBtn.innerHTML = 'close';
    headerNav.classList.add('open');
    isMenuModalOpen = true;
  } else {
    menuToggleBtn.innerHTML = 'menu';
    headerNav.classList.remove('open');
    isMenuModalOpen = false
  }
};

menuToggleBtn.addEventListener('click', menuToggleBtnHandler);
