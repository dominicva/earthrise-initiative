export const missionStatementAnimation = async () => {
  const missionStatement = document.querySelector('.hero__mission-statement');
  let i = 0;
  const text =
    'We act to accelerate the global shift towards equality of consideration for all';
  let speed = 20;

  async function typingEffect() {
    if (i < text.length) {
      missionStatement.textContent += text.charAt(i);
      i++;
      if (i % 13 === 0) {
        speed = 100;
      } else {
        speed = 20;
      }
      setTimeout(typingEffect, speed);
    }
  }

  function transform(pxVal = 0, transition = 'transform 1.75s ease-out') {
    missionStatement.style.transform = `translateY(${pxVal}px`;
    missionStatement.style.transition = transition;
  }

  const delay = 3000;
  await typingEffect().then(setTimeout(transform, delay));
};
