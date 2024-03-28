import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MainMenu() {
  const { t } = useTranslation();
  return (
    <nav className="main-menu">
      <Link to="#" className="main-menu__link">
        {t("mainMenu.main")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.aboutMe")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.portfolio")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.experience")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.career")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.recommendations")}
      </Link>
      <Link to="#" className="main-menu__link">
        {t("mainMenu.contacts")}
      </Link>
    </nav>
  );
}

export default MainMenu;
