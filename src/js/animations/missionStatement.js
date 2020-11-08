export const missionStatementAnimation = () => {
  let i = 0;
  const text = 'global shift towards equality of consideration for all';
  const speed = 50;

  function typingEffect() {
    if (i < text.length) {
      document.querySelector(
        '.hero__mission-statement'
      ).textContent += text.charAt(i);
      i++;
      setTimeout(typingEffect, speed);
    }
  }

  typingEffect();
};
