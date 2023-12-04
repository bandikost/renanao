import React, { useState, useEffect } from "react";
import "./modules/slider.css";
import danun from "./images/Danun.png";
import dayko from "./images/Dayko.png";
import luneo from "./images/Lunaneo.png";
import rena from "./images/rena.png";
import father from "./images/father.png";
import { t } from "i18next";
import { useTranslation } from 'react-i18next';



const SliderVideos = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 2;
  const [visibleItemsCount, setVisibleItemsCount] = useState(2);

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };


  

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, items.length - visibleItemsCount));
  };
  
  const [startTouchX, setStartTouchX] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from local images
        const data = [
          {
            imageUrl: dayko,
            caption: {
              characterName: t("Dayko"),
              text: t("DaykoCharacter"),
            },
          },
          {
            imageUrl: luneo,
            caption: {
              characterName: t("Luneo"),
              text: t("LuneoCharacter"),
            },
          },
          {
            imageUrl: rena,
            caption: {
              characterName: t("Renanao"),
              text: t("RenanaoCharacter"),
            },
          },
          {
            imageUrl: father,
            caption: {
              characterName: t("DaddyRenanao"),
              text: t("DaddyRenanaoCharacter"),
            },
          },
          {
            imageUrl: danun,
            caption: {
              characterName: t("Danun"),
              text: t("DanunCharacter"),
            },
          },
        ];
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ContainerCharacter">
      <div className="containerItemsCharacters">
      <div
  className="slidersize"
  style={{
    display: "flex",
    alignItems: "baseline",
    transform: `translateX(-${currentIndex * (40 / visibleItemsCount)}%)`,
    transition: "transform 0.5s ease-in-out",
    width: `${items.length * (100 / visibleItemsCount)}%`,
  }}
  onTouchStart={(e) => {
    setStartTouchX(e.touches[0].clientX);
  }}
  onTouchMove={(e) => {
    if (startTouchX !== null) {
      const currentTouchX = e.touches[0].clientX;
      const diff = currentTouchX - startTouchX;
      const percentDiff = (diff / window.innerWidth) * 100;
      const currentIndexDiff = Math.round(
        (percentDiff / (40 / visibleItemsCount)) * visibleItemsCount
      );
      setCurrentIndex(
        Math.max(
          0,
          Math.min(
            currentIndex - currentIndexDiff,
            items.length - visibleItemsCount
          )
        )
      );
      setStartTouchX(currentTouchX);
    }
  }}
  onTouchEnd={() => {
    setStartTouchX(null);
  }}
>


          {items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.imageUrl} alt={`Slider Video ${index}`} />
              <div className="carousel-characterName">{item.caption.characterName}</div>
              <div className="carousel-text"><p>{item.caption.text}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="EpisodeContainerButtons-main">
          <button className="leftEpisode" style={{position: "absolute", left: "0px", top: "120px"}} onClick={handlePrev} disabled={currentIndex === 0}>
          <i className="arrow left" style={{ position: "relative",
      top: "-4px",}}></i>
          </button>
          <button
  className="rightEpisode"
  style={{ position: "absolute", right: "0px", top: "120px" }}
  onClick={handleNext}
  disabled={currentIndex === items.length - visibleItems || items.length === 0}
>
  <i
    className="arrow right"
    style={{ position: "relative", top: "-4px", left: "-1px" }}
  ></i>
</button>
        </div>
    </div>
  );
};

export default SliderVideos;

