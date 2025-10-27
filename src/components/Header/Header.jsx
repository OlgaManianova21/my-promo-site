import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  //  скролл
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <img src={logo} alt="Каблук" className="header-logo" />

        {/* НАВИГАЦИЯ */}
        <nav className="nav-links">
          <a href="#hero">Главная</a>
          <a href="#speakers">Спикеры</a>
          <a href="#details">Контакты</a>
        </nav>

        {/* Кнопка lifepay */}
       <a
          href="https://url.life-pay.ru/Vxaprj9P" 
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn"
        >
          Купить
        </a>
      </div>
    </header>
  );
};

export default Header;