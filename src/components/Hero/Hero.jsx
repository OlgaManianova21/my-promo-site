// src/components/Hero/Hero.jsx

import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import speakers from "../../assets/speakers.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ❗️ ИСПРАВЛЕННЫЙ useEffect
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
  }, []); // <-- Пустой массив здесь

  return (
    <section id="hero" ref={sectionRef} className={`hero ${isVisible ? "visible" : ""}`}>
      <div className="hero-image">
        <img src={speakers} alt="Каблук мероприятие" />
      </div>

      <div className="hero-text">
        <h1>
          Как давно ты делала что-то <br /> для себя?
        </h1>
        <p>
          <strong>Каблук</strong> — проект, объединяющий сообщества, клубы и лидеров мнений. 
          Здесь Вы можете найти себя, войти в «ту дверь» и открыть новые возможности! 
          А также заявить о своём сообществе и найти своих людей!
        </p>
        <p>16 ноября 2025 в 16:00 Краснодар ул. Вишняковой 1/10, стр.2</p>
        <p>Подробности по телефону +7 918 495-19-89</p>

        <a
          href="https://url.life-pay.ru/Vxaprj9P" /* ССЫЛКА lifepay */
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn pay-btn"
        >
          Купить билет 500₽
        </a>

        <p className="payment-info">
         <a href="https://wa.me/79184951989" target="_blank" rel="noopener noreferrer">
           Связаться с организатором
         </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;