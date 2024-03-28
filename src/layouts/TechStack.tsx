import React from "react";
import { useTranslation } from "react-i18next";

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="tech-stack">
      <header className="section-title-without-controls__content tech-stack__header">
        <span className="info-tag portfolio__tag">
          🧑‍💻 {t("techStack.titleTag")}
        </span>
        <h2 className="section-title">{t("techStack.title")}</h2>
      </header>
      <h6 className="tech-stack__title">{t("techStack.list.mainTitle")}</h6>
      <div className="tech-stack__row">
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/React.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Javascript.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/TypeScript.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Nextjs.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Css3.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Html5.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Figma.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Github.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Git.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Stack_item.svg" alt="#" />
        </div>
      </div>
      <h6 className="tech-stack__title">{t("techStack.list.subTitle")}</h6>
      <div className="tech-stack__row">
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/bitbucket.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/VueJs.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Nodejs.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/TailwindCSS.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Sass.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Python.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/PostgreSql.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/MySql.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/MongoDb.svg" alt="#" />
        </div>
        <div className="tech-stack__ico">
          <img src="images/icons/Template_images/Docker.svg" alt="#" />
        </div>
      </div>
    </section>
  );
};
export default TechStack;
