import React, { useEffect, useRef, useState } from "react";
import "./Details.css";

const Details = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`details ${isVisible ? "visible" : ""}`}
      id="details"
    >
      <div className="details-container">
        <h2 className="details-title">Место проведения</h2>

        <div className="details-info">
          <p><strong>Город:</strong> Краснодар</p>
          <p><strong>Адрес:</strong> ул. Вишняковой, 1/10, стр. 2</p>
          <p><strong>Дата:</strong> 16 ноября 2025</p>
          <p><strong>Стоимость:</strong> 500 ₽</p>
          <p><strong>Дресс-код:</strong> обязательно на каблуках 👠</p>
        </div>

        <div className="details-map">
          <iframe
            title="Карта места проведения"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae30bb556b091fae48ce9604c0da62e1c0d6949875e9f36f2ef7db3a3a157e13b&amp;source=constructor"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="https://yandex.ru/maps/?text=Краснодар%2C%20ул.%20Вишняковой%201%2F10%20стр%202"
          target="_blank"
          rel="noopener noreferrer"
          className="details-button"
        >
          📍 Открыть в Яндекс.Картах
        </a>

        <div className="details-support">
          <hr className="details-line" />
          <p className="details-support-text">
            При поддержке Союза пиарщиков России
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
