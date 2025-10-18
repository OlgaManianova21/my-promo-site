import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">О мероприятии</h2>
        <div className="about-text">
          <p>
            Вас ждет уникальное событие, наполненное модой, стилем и энергией. 
            Это больше, чем мероприятие — это целая атмосфера! Наши героини поделятся историями, 
            которые заставят тебя вспомнить о своих желаниях.
          </p>
          <p>
            Атмосфера поддержки и энергии поможет увидеть, что жить по-своему не только можно, но и нужно.
          </p>
          <p>
            <strong>Каблук</strong> — это сообщество, объединяющее сообщества и лидеров мнений.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
