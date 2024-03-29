import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BsTelegram } from "react-icons/bs";

interface IContactsProps {
  toTopRef: React.RefObject<HTMLDivElement>;
}
const Contacts: React.FC<IContactsProps> = ({ toTopRef }) => {
  const { t } = useTranslation();
  return (
    <section className="contacts">
      <span className="info-tag">📬 {t("contacts.titleTag")}</span>
      <h2 className="section-title">{t("contacts.title")}</h2>
      <div className="contacts__links">
        <Link
          to="https://t.me/sinstranger"
          target="_blank"
          className="main-banner__button"
        >
          <span style={{ fontSize: 24 }}>
            <BsTelegram />
          </span>
          {t("mainBanner.textMe")}
        </Link>
        <div className="contacts__mail">
          <a href="mailto:sinstranger@yandex.ru" className="post-col">
            <span className="post-plain">
              <img src="/images/icons/PaperPlaneTilt.svg" alt="#" />
              {t("contacts.mail")}
            </span>
            sinstranger@yandex.ru
          </a>
        </div>
      </div>
      <div
        className="to-top"
        onClick={() => {
          if (toTopRef.current) {
            toTopRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
      >
        {t("contacts.toTop")}{" "}
        <img
          src="/images/icons/ArrowUp.svg"
          alt="#"
          className="to-top__arrow"
        />
      </div>
    </section>
  );
};

export default Contacts;
