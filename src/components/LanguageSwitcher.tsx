import { IoLanguageOutline } from "react-icons/io5";
import cn from "classnames";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const handleChangeLanguage =
    (event: React.SyntheticEvent) => async (lang: string) => {
      event.preventDefault();
      await i18n.changeLanguage(lang);
      setIsShowTranslationMenu(!isShowTranslationMenu);
    };
  const [isShowTranslationMenu, setIsShowTranslationMenu] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div className="translation">
      <button
        className="translation__button"
        onClick={() => setIsShowTranslationMenu(!isShowTranslationMenu)}
      >
        <IoLanguageOutline />
      </button>
      <ul
        className={cn("translation__list", {
          open: isShowTranslationMenu,
        })}
      >
        {/* FIXME: не работает, вероятно проблема на стороне библиотеки, i18n.languages - содержит не все настроенные языки */}
        {/* i18n.languages.map((lang) => (
          <li
            className={cn("translation__item", {
              active: lang === i18n.language,
            })}
            key={lang}
          >
            <Link
              to="#"
              className="translation__link"
              onClick={(event) => handleChangeLanguage(event)(lang)}
            >
              {lang.toUpperCase()}
            </Link>
          </li>
        )) */}
        <li
          className={cn("translation__item", {
            active: i18n.resolvedLanguage === "ru",
          })}
        >
          <Link
            to="#"
            className="translation__link"
            onClick={(event) => handleChangeLanguage(event)("ru")}
          >
            RU
          </Link>
        </li>
        <li
          className={cn("translation__item", {
            active: i18n.resolvedLanguage === "en",
          })}
        >
          <Link
            to="#"
            className="translation__link"
            onClick={(event) => handleChangeLanguage(event)("en")}
          >
            EN
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default LanguageSwitcher;
