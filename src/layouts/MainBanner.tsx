import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@components/Header";
import { useTranslation } from "react-i18next";
import { BsTelegram } from "react-icons/bs";

const MainBanner: React.ForwardRefExoticComponent<
  Omit<any, "ref"> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, any>((props, toTopRef: any) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  useImperativeHandle(toTopRef, () => bannerRef.current, []);
  return (
    <div className="main-banner" ref={bannerRef}>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <section className="main-banner__content-wrapper">
          <div className="main-banner__content">
            <span className="info-tag">👋 {t("mainBanner.hi")}</span>
            <h1 className="main-banner__title">{t("mainBanner.name")}</h1>
            <p className="main-banner__subtitle">{t("mainBanner.position")}</p>
            <div className="main-banner__socials hide-mobile">
              <Link
                to="https://www.linkedin.com/in/sinstranger/"
                className="main-banner__social"
              >
                <img src="/images/icons/linkedin.svg" alt="#" />
              </Link>
              <Link
                to="https://github.com/Sinsstranger"
                className="main-banner__social"
              >
                <img src="/images/icons/github.svg" alt="#" />
              </Link>
              {/* <Link to="#" className="main-banner__social">
                <img src="/images/icons/behance.svg" alt="#" />
              </Link> */}
            </div>
          </div>
          <div className="main-banner__image">
            <div className="main-banner__socials hide-desktop">
              <Link
                to="https://www.linkedin.com/in/sinstranger/"
                className="main-banner__social"
              >
                <img src="/images/icons/linkedin.svg" alt="#" />
              </Link>
              <Link
                to="https://github.com/Sinsstranger"
                className="main-banner__social"
              >
                <img src="/images/icons/github.svg" alt="#" />
              </Link>
              {/* <Link to="#" className="main-banner__social">
                <img src="/images/icons/behance.svg" alt="#" />
              </Link> */}
            </div>
            {/* <img src="/images/icons/AvatarAndIcons.svg" alt="#" /> */}
            <img src="/images/MainPhoto-round.png" alt="#" />
          </div>
          <div className="main-banner__contacts">
            {/*<Link to="#" className="main-banner__link">*/}
            {/*  {t("mainBanner.downloadCV")}*/}
            {/*</Link>*/}
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
          </div>
        </section>
      </div>
    </div>
  );
});
export default MainBanner;
