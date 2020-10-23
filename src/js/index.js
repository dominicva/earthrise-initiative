import {
  isNavOpen,
  headerNavToggleHandler,
} from './headerNav';
import {
  navItemHoverHandler,
  navItemExitHoverHandler,
  navItemClickHandler,
} from './heroNav';

import {
  exploreProjectsBtn,
  exploreProjectsBtnHover,
} from './exploreProjectsHover';

import arrowGreen from '../media/arrow-green.svg';
import arrowWhite from '../media/arrow-white.svg';
import rightArrowDark from '../media/right-arrow-dark.svg';

import '../styles/app.scss';

const menuBtn = document.getElementById('main-header__menu-btn');
menuBtn.addEventListener('click', headerNavToggleHandler);

const navItems = document.querySelectorAll('.hero__nav-item.container');
const navItemsArray = Array.from(navItems);

for (const navItem of navItemsArray) {
  navItem.addEventListener('mouseenter', navItemHoverHandler);
  navItem.addEventListener('mouseleave', navItemExitHoverHandler);
  navItem.addEventListener('click', navItemClickHandler);
}

exploreProjectsBtn.addEventListener('mouseover', exploreProjectsBtnHover);
exploreProjectsBtn.addEventListener('mouseout', exploreProjectsBtnHover);

export {
  isNavOpen,
  headerNavToggleHandler,
  navItemHoverHandler,
  navItemExitHoverHandler,
  navItemClickHandler,
  exploreProjectsBtnHover,
};
