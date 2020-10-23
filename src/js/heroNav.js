/* eslint-disable indent */
export const navItemHoverHandler = event => {
  event.target.lastElementChild.classList.add('active');
};

export const navItemExitHoverHandler = event => {
  event.target.lastElementChild.classList.remove('active');
};

const setBtnAttribute = link => {
  const exploreProjectsBtn = document.querySelector(
    '.explore-projects-btn.container'
  );

  for (const child of exploreProjectsBtn.children) {
    child.setAttribute('href', link);
  }
};

export const navItemClickHandler = event => {
  const areaTitle = document.getElementById('area-title');
  const areasQuestion = document.getElementById('area-question');

  switch (event.target.innerHTML) {
    case 'education':
      areaTitle.innerHTML = 'education';
      areasQuestion.innerHTML =
        'How can we provide everyone with a world-class education?';
      setBtnAttribute('./education.html');
      break;

    case 'mental health':
      areaTitle.innerHTML = 'mental health';
      areasQuestion.innerHTML =
        'How can we combine science and awareness to end mental suffering?';
      setBtnAttribute('./mental-health.html');
      break;

    case 'basic income':
      areaTitle.innerHTML = 'basic income';
      areasQuestion.innerHTML =
        'What if we could free ourselves from existential wage-reliance?';
      setBtnAttribute('./basic-income.html');
      break;

    case 'animal welfare':
      areaTitle.innerHTML = 'animal welfare';
      areasQuestion.innerHTML =
        'How can we bring an end to factory farming of non-human animals?';
      setBtnAttribute('./animal-welfare.html');
      break;
  }
};
