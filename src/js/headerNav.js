export let isNavOpen = false;

const openHeaderNav = (button, nav) => {
  button.textContent = 'close';
  nav.classList.add('open');
};

const closeHeaderNav = (button, nav) => {
  button.textContent = 'menu';
  nav.classList.remove('open');
};

export const headerNavToggleHandler = () => {
  const menuBtn = document.getElementById('main-header__menu-btn');
  const headerNav = document.querySelector('.main-header__nav');
  if (!isNavOpen) {
    openHeaderNav(menuBtn, headerNav);
    isNavOpen = true;
  } else {
    closeHeaderNav(menuBtn, headerNav);
    isNavOpen = false;
  }
};
