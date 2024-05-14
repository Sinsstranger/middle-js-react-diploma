import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
const Reviews: React.FC = () => {
  const { t } = useTranslation();
  let sliderReviewsRef: any = useRef(null);
  const next = () => {
    sliderReviewsRef.slickNext();
  };
  const previous = () => {
    sliderReviewsRef.slickPrev();
  };
  return (
    <section className="reviews">
      <div className="section-title-with-controls">
        <header className="section-title-with-controls__content">
          <span className="info-tag portfolio__tag">💬 Рекомендации</span>
          <h2 className="section-title">Последние отзывы</h2>
        </header>
        <div className="section-title-with-controls__controls reviews__controls">
          <button
            type="button"
            className="button reviews__button btn-prev"
            onClick={next}
          />
          <button
            type="button"
            className="button reviews__button btn-next"
            onClick={previous}
          />
        </div>
      </div>
      <Slider
        {...slickSettings}
        className="reviews__track"
        ref={(slider) => {
          sliderReviewsRef = slider;
        }}
      >
        {/* <div className="reviews__item review">
        <div className="reviews__item review">
          <div className="review__quote">
            <img src="images/icons/Quotes.svg" alt="#" />
          </div>
          <div className="review__description">
            Рекомендую веб-разработчика как одного из лучших. Он работал над
            моим веб-приложением, все было сделано в срок, качество кода
            отличное. В проекте используются следующие технологии и языки
            программирования: JavaScript, TypeScript и Node.js
          </div>
          <div className="author">
            <div className="author__image">
              <img src="images/icons/Template_images/author.png" alt="#" />
            </div>
            <div className="author__caption">
              <div className="author__title">Роман Иванович</div>
              <div className="author__position">
                Руководитель команды разработчиков
              </div>
            </div>
          </div>
        </div>*/}
        <div className="reviews__item review">
          <div className="review__quote">
            <img src="images/icons/Quotes.svg" alt="#" />
          </div>
          <div className="review__description">
            Я рекомендую Марата Валерьевича для любой роли не ниже Middle в
            области Web-разработки и уверен, что его навыки и опыт будут ценным
            вкладом в любую компанию.
          </div>
          <div className="author">
            <div className="author__image">
              <img src="/images/sviridov.jpg" alt="#" />
            </div>
            <div className="author__caption">
              <div className="author__title">Александр Свиридов</div>
              <div className="author__position">
                Руководитель команды разработчиков
              </div>
              <a
                href="/recommendation-letters/Sviridov_Letter.pdf"
                className="author__link"
              >
                Скачать отзыв полностью
              </a>
            </div>
          </div>
        </div>
        <div className="reviews__item review">
          <div className="review__quote">
            <img src="images/icons/Quotes.svg" alt="#" />
          </div>
          <div className="review__description">
            Марат Валерьевич завершил программу индивидуального обучения по
            Web-Разработке и проявил высокий уровень дисциплины и
            ответственности, выполняя все задания вовремя.
          </div>
          <div className="author">
            <div className="author__image">
              <img
                src="https://filimonov-career.ru/img/author/nextImageExportOptimizer/author-400-opt-640.WEBP"
                alt="#"
              />
            </div>
            <div className="author__caption">
              <div className="author__title">Игорь Филлимонов</div>
              <div className="author__position">
                Fullstack Software Engineer, Преподаватель-исследователь
              </div>
              <a
                href="/recommendation-letters/Filimonov-letter.pdf"
                className="author__link"
              >
                Скачать отзыв полностью
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Reviews;
