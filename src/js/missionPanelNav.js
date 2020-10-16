/* eslint-disable indent */
export const navItemHoverHandler = (event) => {
  event.target.lastElementChild.classList.add('active');
};

export const navItemExitHoverHandler = (event) => {
  event.target.lastElementChild.classList.remove('active');
};

export const navItemClickHandler = (event) => {
  const areaTitle = document.getElementById('area__title');
  const areasQuestion = document.getElementById('areas-question');
  const exploreProjectsBtn = document.getElementById('explore-projects__btn');

  switch (event.target.innerHTML) {
    case 'education':
      areaTitle.innerHTML = 'education';
      areasQuestion.innerHTML =
        'How can we provide everyone with a world-class education?';
      exploreProjectsBtn.setAttribute('href', './education.html');
      break;

    case 'mental health':
      areaTitle.innerHTML = 'mental health';
      areasQuestion.innerHTML =
        'How can we combine science and awareness to end mental suffering?';
      exploreProjectsBtn.setAttribute('href', './mental-health.html');
      break;

    case 'basic income':
      areaTitle.innerHTML = 'basic income';
      areasQuestion.innerHTML =
        'What if we could free ourselves from existential wage-reliance?';
      break;

    case 'animal welfare':
      areaTitle.innerHTML = 'animal welfare';
      areasQuestion.innerHTML =
        'How can we bring an end to factory farming of non-human animals?';
      break;
  }
};
