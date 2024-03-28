import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@hooks/index.ts";
import { Link } from "react-router-dom";

const Career: React.FC = () => {
  const education = useAppSelector((state) => state.education.educations);
  const jobs = useAppSelector((state) => state.job.jobs);
  const { t } = useTranslation();
  return (
    <section className="career">
      <header className="section-title-without-controls__content career__header">
        <span className="info-tag portfolio__tag">
          💼 {t("studyAndJob.titleTag")}
        </span>
        <h2 className="section-title">{t("studyAndJob.title")}</h2>
      </header>
      <div className="career__track">
        <section className="career__column column">
          <header className="column__header">
            <h3 className="column__title">{t("studyAndJob.career.title")}</h3>
            <p className="column__subtitle">
              2016 · {t("studyAndJob.tillNow")}
            </p>
          </header>
          <div className="column__list">
            {jobs.map((job) => (
              <section className="place" key={job.translationKey}>
                <h5 className="place__title">
                  {job.linkTo ? (
                    <Link to={job.linkTo}>
                      {t(
                        `studyAndJob.career.list.${job.translationKey}.companyName`,
                      )}
                    </Link>
                  ) : (
                    t(
                      `studyAndJob.career.list.${job.translationKey}.companyName`,
                    )
                  )}{" "}
                  -{" "}
                  {t(`studyAndJob.career.list.${job.translationKey}.position`)}
                </h5>
                <p className="place__caption">
                  {t(`studyAndJob.career.list.${job.translationKey}.caption`)}
                </p>
                <div className="place__period">
                  {t(`studyAndJob.career.list.${job.translationKey}.fromYear`)}{" "}
                  · {t(`studyAndJob.career.list.${job.translationKey}.toYear`)}
                </div>
              </section>
            ))}
          </div>
        </section>
        <section className="career__column column">
          <header className="column__header">
            <h3 className="column__title">{t("studyAndJob.study.title")}</h3>
            <p className="column__subtitle">
              2014 · {t("studyAndJob.tillNow")}
            </p>
          </header>
          <div className="column__list">
            {education.map((edu) => (
              <section className="place" key={edu.translationKey}>
                <h5 className="place__title">
                  {edu.linkTo ? (
                    <Link to={edu.linkTo}>
                      {t(
                        `studyAndJob.study.list.${edu.translationKey}.universityName`,
                      ) || edu.title}
                    </Link>
                  ) : (
                    <>
                      {t(
                        `studyAndJob.study.list.${edu.translationKey}.universityName`,
                      ) || edu.title}
                    </>
                  )}
                </h5>
                <p className="place__caption">
                  {t(
                    `studyAndJob.study.list.${edu.translationKey}.description`,
                  ) || edu.description}
                </p>
                <div className="place__period">
                  {t(`studyAndJob.study.list.${edu.translationKey}.fromYear`)} ·{" "}
                  {t(`studyAndJob.study.list.${edu.translationKey}.toYear`)}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Career;
