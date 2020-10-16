import { isMenuModalOpen, menuToggleBtnHandler } from '../project-areas/headerNavModal';

import '../../styles/resets.scss';
import '../../styles/style-guide.scss';
import '../../styles/shared.scss';
import '../../styles/areas.scss';

import khanAcademyLogo from '../../media/khan-academy-logo.svg';
import freeCodeCampLogo from '../../media/freecodecamp-vector-logo.svg';

const menuToggleBtn = document.getElementById('header__menu-btn');
menuToggleBtn.addEventListener('click', menuToggleBtnHandler);

export { isMenuModalOpen, menuToggleBtnHandler };