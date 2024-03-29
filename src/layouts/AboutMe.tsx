import React from "react";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__image hide-mobile">
        <img src="/images/icons/AvatarAndIcons.svg" alt="#" />
      </div>
      <div className="about-me__content">
        <span className="info-tag">🧐 Обо мне</span>
        <h5 className="about-me__title">Ваше Имя</h5>
        <p>👋 Привет! Можешь позвонить мне. С удовольствием проконсультирую!</p>
        <p>
          👨‍💻 Более 2 лет разрабатываю интерфейсы и программирую на JavaScript,
          React.js и Typescript.
        </p>
        <p>🎓 Выпускник факультета "Системный анализ и разработка".</p>
        <p>
          💡 Интересуюсь веб-разработкой на JavaScript, TypeScript, React.js и
          UX/UI.
        </p>
        <p>
          🚀 Постоянно развиваюсь и каждый день стараюсь становиться немного
          лучше.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
