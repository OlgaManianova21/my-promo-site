// src/components/Payment/PaymentForm.jsx

import React from 'react';
import './Payment.css';

// ❗️ ВСТАВЬ СЮДА СВОЮ РЕАЛЬНУЮ ССЫЛКУ T-BANK
const TINKOFF_PAYMENT_URL = "https://pay.tbank.ru/s/ABCDE12345";

// 1. Прими 'onClose' как пропс
const PaymentForm = ({ onClose }) => {
  return (
    // 2. Это 'overlay' - темный фон
    <div className="payment-modal-overlay" onClick={onClose}>
      
      {/* 3. Это само окно, e.stopPropagation() не дает ему закрыться при клике внутри */}
      <div className="payment-section payment-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* 4. Кнопка "Закрыть" (крестик) */}
        <button className="payment-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>Купить билет</h2>
        <p>Заполните анкету, и мы перенаправим вас на страницу оплаты (500₽)</p>
        
        <form 
          name="ticket-form" 
          method="POST" 
          action={TINKOFF_PAYMENT_URL} 
          data-netlify="true"
          className="payment-form"
        >
          {/* ... (все твои input) ... */}
          <input type="hidden" name="form-name" value="ticket-form" />
          
          <div className="form-group">
            <label htmlFor="name">ФИО</label>
            <input type="text" id="name" name="name" placeholder="Фамилия Имя" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@mail.ru" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input type="tel" id="phone" name="phone" placeholder="+7 (903) 123-45-67" required />
          </div>

          <button type="submit" className="hero-btn">
            Перейти к оплате 500₽
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;