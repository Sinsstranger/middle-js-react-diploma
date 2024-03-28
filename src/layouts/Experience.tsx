import React from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="experience">
      <div className="experience__advantages advantages">
        <section className="advantages__item">
          <div className="advantages__image">
            <img src="/images/icons/CodeIcon.svg" alt="#" />
          </div>
          <div className="advantages__period">
            {t("experience.advantages.developer.experienceTime")}
          </div>
          <h5 className="advantages__title">
            {t("experience.advantages.developer.experienceType")}
          </h5>
        </section>
        <section className="advantages__item">
          <div className="advantages__image">
            <img src="images/icons/ProjectsIcon.svg" alt="#" />
          </div>
          <div className="advantages__period">
            {t("experience.advantages.inIt.experienceTime")}
          </div>
          <h5 className="advantages__title">
            {t("experience.advantages.inIt.experienceType")}
          </h5>
        </section>
        <section className="advantages__item">
          <div className="advantages__image">
            <img src="images/icons/DesignIcon.svg" alt="#" />
          </div>
          <div className="advantages__period">
            {t("experience.advantages.freelancer.experienceTime")}
          </div>
          <h5 className="advantages__title">
            {t("experience.advantages.freelancer.experienceType")}
          </h5>
        </section>
      </div>
      <div className="advantages-exp hide-mobile">
        <div className="advantages-exp__item">
          <div className="advantages-exp__subtitle">
            {t("experience.advantagesSub.developer.experiencePosition")}
          </div>
          <div className="advantages-exp__title">
            {t("experience.advantagesSub.developer.experienceType")}
          </div>
        </div>
        <div className="advantages-exp__item">
          <div className="advantages-exp__subtitle">
            {t("experience.advantagesSub.inIt.experiencePosition")}
          </div>
          <div className="advantages-exp__title">
            {t("experience.advantagesSub.inIt.experienceType")}
          </div>
        </div>
        <div className="advantages-exp__item">
          <div className="advantages-exp__subtitle">
            {t("experience.advantagesSub.freelancer.experiencePosition")}
          </div>
          <div className="advantages-exp__title">
            {t("experience.advantagesSub.freelancer.experienceType")}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
