import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SelfEmployed(): ReactElement {
  const { t } = useTranslation();
  return (
    <section className="self-employed">
      <header className="section-title-with-controls__content">
        <span className="info-tag portfolio__tag">🔗 Информация</span>
        <h2 className="section-title">Об о мне</h2>
      </header>
      <div className="self-employed__caption">
        <div>
          <p>
            Являюсь самозанятым (Барашкин Марат Валерьевич), ИНН:{" "}
            <pre style={{ display: "inline" }}>
              <code>682968156110</code>
            </pre>{" "}
          </p>
          <p>
            Занимаюсь технической поддержкой и разработкой сайтов по ставке от
            1000 рублей за час работы
          </p>
        </div>
        <div className="self-employed__requisites">
          {/* <img src="self-employed-data/bank_account_details.webp" alt="#" /> */}
          <Link
            to="self-employed-data/bank_account_details.pdf"
            target="_blank"
            className="main-banner__button"
          >
            Скачать Реквизиты
          </Link>
        </div>
      </div>
    </section>
  );
}
