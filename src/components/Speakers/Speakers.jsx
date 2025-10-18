import React from "react";
import "./Speakers.css";
import nikitaPhoto from "../../assets/speaker-nikita.jpg";
import alefPhoto from "../../assets/speaker-alef.jpg";
import nataliaPhoto from "../../assets/speaker-natalya.jpg";
import oksanaPhoto from "../../assets/speaker-oksana.jpg";
import kseniaPhoto from "../../assets/speaker-ksenia.jpg";
import nadezhdaPhoto from "../../assets/speaker-nadezhda.jpg";
import annaPhoto from "../../assets/speaker-anna.jpg";
import yuliaPhoto from "../../assets/speaker-yulia.jpg";
import anastasiaPhoto from "../../assets/speaker-anastasia.jpg";

import annaSavchenkoPhoto from "../../assets/partner-anna.jpg";
import matreshkaPhoto from "../../assets/partner-matreshka.jpg";
import svetlanaPhoto from "../../assets/partner-svetlana.jpg";
import tatyanaPhoto from "../../assets/partner-tatyana.jpg";


const host = {
  name: "Никита Лойко",
  role: "Ведущий событий и интеллектуально-развлекательных игр",
  photo: nikitaPhoto,
};

const speakers = [
  {
    name: "Алефтина Барсукова",
    topic: "Путешествия как инвестиция в себя!",
    details: [
      "Собственница туристического агентства «ТУР219»",
      "Организатор авторских туров",
      "Совладелица проекта «Каблук»",
    ],
    photo: alefPhoto,
  },
  {
    name: "Наталья Зубкова",
    topic:
      "Как построить успешный бизнес. Потерять всё. И заработать ещё больше.",
    details: [
      "Предприниматель с 17-летним стажем",
      "Основатель бренда «Чай да кофе»",
      "Совладелица проекта «Каблук»",
    ],
    photo: nataliaPhoto,
  },
  {
    name: "Оксана Ткаченко",
    topic: "Медиация с любовью",
    details: ["Адвокат с 15-летним стажем по семейным спорам", "Медиатор"],
    photo: oksanaPhoto,
  },
  {
    name: "Генераленко Ксения",
    topic: "Украшения со смыслом",
    details: [
      "Имиджмейкер, психолог",
      "Амбассадор и партнёр Торговых Центров",
      "Куратор Fashion мероприятий",
      "Основатель женского стильного сообщества",
      "Создатель бренда «украшения со смыслом»",
    ],
    photo: kseniaPhoto,
  },
  {
    name: "Агеева Надежда",
    topic: "Как делать то, что хочется, и не откладывать на потом!",
    details: [
      "Президент Black Cats WMCC Краснодар",
      "Мама, байкер, архитектор",
    ],
    photo: nadezhdaPhoto,
  },
  {
    name: "Курилова Анна Валерьевна",
    topic: "Как остановить осенний волосопад и авитаминоз",
    details: [
      "Врач-трихолог-эстетист",
      "Руководитель студии спа и трихологии «ЭйфориА»",
    ],
    photo: annaPhoto,
  },
  {
    name: "Костякова Юлия",
    topic: "Мероприятия как инструмент продаж!",
    details: [
      "Специалист по коллаборациям",
      "Креативный директор бренда «Чай да Кофе»",
      "Совладелица проекта «Каблук»",
    ],
    photo: yuliaPhoto,
  },
  {
    name: "Новакова Анастасия",
    topic: "Как смириться с ошибками прошлого и перейти на новый уровень!",
    details: [
      "Психолог и нейрокоуч по стабильной самооценке",
      "Автор тренингов по работе с внутренними блоками",
    ],
    photo: anastasiaPhoto,
  },
];

const partners = [
  {
    name: "Анна Савченко",
    description: "Персональный стилист, креатор, модель",
    photo: annaSavchenkoPhoto,
  },
  {
    name: "Ярмарка «Матрёшка»",
    description:
      "Ярмарка изделий ручной работы, бренды украшений, товары для дома и одежда от дизайнеров.",
    photo: matreshkaPhoto,
  },
  {
    name: "Светлана Рябинова",
    description:
      "Исполнительница поп, джаз и современной музыки, лауреат международных конкурсов, основатель вокальной студии «Тут Поют!».",
    photo: svetlanaPhoto,
  },
  {
    name: "Татьяна Паршукова",
    description: "Руководитель салона красоты «Арт Блонд».",
    photo: tatyanaPhoto,
  },
];

const Speakers = () => {
  return (
    <section className="speakers-section" id="speakers">
      {/* Ведущий */}
      <div className="host-block">
        <h2 className="section-title">Ведущий</h2>
        <div className="host-card">
          <img src={host.photo} alt={host.name} className="host-photo" />
          <h3 className="host-name">{host.name}</h3>
          <p className="host-role">{host.role}</p>
        </div>
      </div>

      {/* Спикеры */}
      <div className="speakers-block">
        <h2 className="section-title">Спикеры</h2>
        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card">
              <img src={s.photo} alt={s.name} className="speaker-photo" />
              <h3 className="speaker-name">{s.name}</h3>
              <p className="speaker-topic">«{s.topic}»</p>
              <ul className="speaker-details">
                {s.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

     {/* Партнёры */}
<div className="partners-block">
  <h2 className="section-title">Партнёры</h2>
  <div className="partners-grid">
    {partners.map((p, i) => (
      <div key={i} className="partner-card">
        <div className="partner-photo-wrapper">
          <img src={p.photo} alt={p.name} className="partner-photo" />
        </div>
        <h3 className="partner-name">{p.name}</h3>
        <p className="partner-description">{p.description}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Speakers;
