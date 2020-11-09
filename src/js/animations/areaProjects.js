export const projectsSlideIn = () => {
  document.querySelectorAll('.project.container').forEach(project => {
    project.style =
      'transform: translateX(0px); transition: transform 1.2s cubic-bezier(0.1, 0.26, 0.63, 1.11) 0s;';
  });
};
