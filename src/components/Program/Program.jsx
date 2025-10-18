import React from "react";
import "./Program.css";
import { 
  Martini,        // коктейль
  Mic2,           // интервью
  Star,           // лидеры мнений
  Gift,           // розыгрыш
  Palette,        // выставка картин
  ShoppingBag,    // ярмарка
} from "lucide-react";

const events = [
  { title: "Приветственный коктейль", icon: <Martini className="program-icon" /> },
  { title: "Интервью со спикерами", icon: <Mic2 className="program-icon" /> },
  { title: "Выступление лидеров мнений", icon: <Star className="program-icon" /> },
  { title: "Розыгрыш подарков", icon: <Gift className="program-icon" /> },
  { title: "Ярмарка «Матрёшка»", icon: <ShoppingBag className="program-icon matreshka-icon" /> },
  { title: "Выставка картин", icon: <Palette className="program-icon" /> },
];

const Program = () => {
  return (
    <section className="program" id="program">
      <div className="program-container">
        <h2 className="program-title">Программа мероприятия</h2>
        <div className="program-grid">
          {events.map((event, index) => (
            <div key={index} className="program-card">
              {event.icon}
              <p className="program-text">{event.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
