import {
  isMenuModalOpen,
  menuToggleBtnHandler,
} from './project-areas/headerNavModal';
import {
  navItemHoverHandler,
  navItemExitHoverHandler,
  navItemClickHandler,
} from './missionPanelNav';

import {
  exploreProjectsBtn,
  exploreProjectsBtnHover,
} from './exploreProjectsHover';

import arrowGreen from '../media/arrow-green.svg';
import arrowWhite from '../media/arrow-white.svg';
import rightArrowDark from '../media/right-arrow-dark.svg';

import '../styles/resets.scss';
import '../styles/_style-guide.scss';
import '../styles/shared.scss';
import '../styles/index.scss';

const menuToggleBtn = document.getElementById('header__menu-btn');
menuToggleBtn.addEventListener('click', menuToggleBtnHandler);

const navItems = document.querySelectorAll('.mission__nav-item__container');
const navItemsArray = Array.from(navItems);

for (const navItem of navItemsArray) {
  navItem.addEventListener('mouseenter', navItemHoverHandler);
  navItem.addEventListener('mouseleave', navItemExitHoverHandler);
  navItem.addEventListener('click', navItemClickHandler);
}

exploreProjectsBtn.addEventListener('mouseover', exploreProjectsBtnHover);
exploreProjectsBtn.addEventListener('mouseout', exploreProjectsBtnHover);

export {
  isMenuModalOpen,
  menuToggleBtnHandler,
  navItemHoverHandler,
  navItemExitHoverHandler,
  navItemClickHandler,
  exploreProjectsBtnHover,
};
