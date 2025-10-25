import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <img src={logo} alt="Каблук" className="header-logo" />

        {/* Навигация */}
        <nav className="nav-links">
          <a href="#hero">Главная</a>
          <a href="#speakers">Спикеры</a>
          <a href="#details">Контакты</a>
        </nav>

       {/* 💳 Кнопка оплаты */}
        <a
          href="" 
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn"
        >
          Купить билет
        </a>
      </div>
    </header>
  );
};

export default Header;
