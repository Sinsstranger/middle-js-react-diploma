import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/index.ts";
import { RootState } from "@store/store";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const portfolioState = useAppSelector(
    (store: RootState) => store.project.items,
  );
  const { t } = useTranslation();
  return (
    <section className="portfolio pt10rem">
      <div className="section-title-with-controls">
        <header className="section-title-with-controls__content">
          <span className="info-tag portfolio__tag">
            🔗 {t("projects.titleTag")}
          </span>
          <h2 className="section-title">{t("projects.title")}</h2>
        </header>
        {/* <div className="section-title-with-controls__controls portfolio__options">
          <div className="button portfolio__button button-iconic">
            <img src="images/icons/DesignIcon.svg" alt="#" />
            UI Дизайн
          </div>
          <div className="button portfolio__button button-iconic">
            <img src="images/icons/PaleteIcon.svg" alt="#" />
            Дизайн
          </div>
          <div className="button portfolio__button button-iconic">
            <img src="images/icons/DesignIcon.svg" alt="#" />
            UI Дизайн
          </div>
        </div> */}
      </div>
      <div className="portfolio__list">
        {portfolioState.map((item, idx) => (
          <Link
            to={item.sandboxUrl || item.githubUrl}
            className="portfolio__item"
            key={idx}
            target="_blank"
          >
            <h6 className="portfolio__title">
              {item.translationKeyTitle
                ? t(item.translationKeyTitle)
                : item.title}
            </h6>
            <div className="portfolio__caption">
              {item.translationKeyCaption
                ? t(item.translationKeyCaption)
                : item.description}
            </div>
            <div className="portfolio__tags">
              {item.sandboxUrl && (
                <span className="tech-tag tech-tag-online">
                  {t("projects.tags.online")}
                </span>
              )}
              {item.stack.slice(0, item.sandboxUrl ? 2 : 3).map((tag, idx) => (
                <span className="tech-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="portfolio__image">
              <img src={item.image || "images/portfolio_example.png"} alt="#" />
            </div>
          </Link>
        ))}
      </div>
      <footer className="section__footer portfolio__footer">
        <Link to="https://github.com/Sinsstranger" className="show-more">
          {t("projects.moreOnGithub") || "Больше проектов на GitНub"}
        </Link>
      </footer>
    </section>
  );
};

export default Portfolio;
