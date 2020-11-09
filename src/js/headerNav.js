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

export const headerNavColorHandler = () => {
  const headerNav = document.querySelector('.main-header.wrapper');

  const quoteContainerHeight = document.querySelector('.quote.container')
    .clientHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= quoteContainerHeight) {
    headerNav.classList.add('light-bg');
  } else {
    headerNav.classList.remove('light-bg');
  }
};

export let lastScroll = 0;

export const getScrollDirection = () => {
  const headerNav = document.querySelector('.main-header.wrapper');

  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    headerNav.style.transform = 'translateY(-64px)';
  } else if (lastScroll > currentScroll) {
    lastScroll = currentScroll;
    headerNav.style.transform = 'translateY(0px)';
  }
};
