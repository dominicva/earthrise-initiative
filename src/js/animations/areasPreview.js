export const areasPreviewSlideUpHandler = () => {
  const heroContainerHeight = document.querySelector('.hero.container')
    .clientHeight;

  const areasPreviewSubHeading = document.querySelector(
    '.areas-preview__sub-heading'
  );
  const areasPreviewMainHeading = document.querySelector(
    '.areas-preview__main-heading'
  );
  const exploreProjectsBtnContainer = document.querySelector(
    '.explore-projects-btn.container'
  );

  const elements = [
    areasPreviewSubHeading,
    areasPreviewMainHeading,
    exploreProjectsBtnContainer,
  ];

  if (window.scrollY >= heroContainerHeight * 0.5) {
    console.log('starting animation');

    for (const el of elements) {
      el.style.animation = 'effects-system-up 0.3s ease-out 0.75s forwards';
    }
    // elements.forEach(element => {
    //   setTimeout(
    //     () =>
    //       (element.style.animation =
    //         'effects-system-up 0.75s ease-out 0.75s forwards'),
    //     500
    //   );
    // });
  }
};
