// remove file extension from imports for webpack
// check out academind lesson on multiple entry points for multi page projects

import { isMenuModalOpen, menuToggleBtnHandler } from './project-areas/headerNavModal';

import arrowGreen from '../media/arrow-green.svg';
import arrowWhite from '../media/arrow-white.svg';
import rightArrowDark from '../media/right-arrow-dark.svg';

import '../styles/resets.scss';
import '../styles/style-guide.scss';
import '../styles/shared.scss';
import '../styles/index.scss';

const menuToggleBtn = document.getElementById('header__menu-btn');
menuToggleBtn.addEventListener('click', menuToggleBtnHandler);

export { isMenuModalOpen, menuToggleBtnHandler };
