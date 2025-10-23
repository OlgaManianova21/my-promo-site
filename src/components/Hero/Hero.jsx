import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import speakers from "../../assets/speakers.jpg";

const Hero = () => {
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
    <section id="hero" ref={sectionRef} className={`hero ${isVisible ? "visible" : ""}`}>
      <div className="hero-image">
        <img src={speakers} alt="Каблук мероприятие" />
      </div>

      <div className="hero-text">
        <h1>
          Когда последний раз ты делала что-то <br /> только для себя?
        </h1>
        <p>
          <strong>Каблук</strong> — мероприятие для женщин, которые хотят больше:
          вдохновения, новых знакомств и свободы быть собой.
        </p>
        <p>16 ноября 2025 в 16:00 Краснодар ул. Вишняковой 1/10, стр.2</p>
        <p>Подробности по телефону +7 918 495-19-89</p>

        {/* 💳 Кнопка оплаты */}
        <a
          href="https://sbp.life-pay.ru/v1/sbp/static_url/payment/714777bd-1b62-42e1-b449-200d0657171d" // ← вставь свою ссылку LifePay
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn pay-btn"
        >
          Купить билет 500₽
        </a>

        <p className="payment-info">
          Оплата через безопасный сервис LifePay. После оплаты чек поступит на вашу почту.
        </p>
      </div>
    </section>
  );
};

export default Hero;
