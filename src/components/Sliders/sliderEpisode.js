import "./modules/slider.css";
import firebase from "../../firebase";
import { Manager } from "../../manager/manager";
import "firebase/database";
import React, { useState, useEffect } from "react";
// Перевод
import { useTranslation } from 'react-i18next';
import { t } from "i18next";
import { debounce } from 'lodash';
import { useRef } from "react";

const SliderEpisode = () => {
  const [startTouchX, setStartTouchX] = useState(null);
  const visibleItems = 2;
  const [visibleItemsCount, setVisibleItemsCount] = useState(2);
  const [items, setItems] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const { descriptions } = Manager();
  const [cards, setcards] = useState({});
  useEffect(() => {
    const cardsRef = firebase.database().ref("cards");
    cardsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setcards(data);
    });
  }, []);
  const [cardsEn, setcardsEn] = useState({});
  useEffect(() => {
    const cardsEnRef = firebase.database().ref("cardsEn");
    cardsEnRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setcardsEn(data);
    });
  }, []);
  const [cardsEs, setcardsEs] = useState({});
  useEffect(() => {
    const cardsEsRef = firebase.database().ref("cardsEs");
    cardsEsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setcardsEs(data);
    });
  }, []);


  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref("cards").once("value");
        const data = snapshot.val();
        if (data) {
          // Convert the data to an array and update the items state
          const dataArray = Object.values(data); // Convert object to array
          setItems(dataArray);
        }
      } catch (error) {
        console.error("Failed to fetch data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update localStorage when items state changes
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, items.length - visibleItemsCount));
  };
  const debouncedTouchMove = useRef(
    debounce((currentTouchX) => {
      const diff = currentTouchX - startTouchX;
      const percentDiff = (diff / window.innerWidth) * 100;
      const currentIndexDiff = Math.round(
        (percentDiff / (100 / visibleItemsCount)) * visibleItemsCount
      );
      setCurrentIndex((prevIndex) =>
        Math.max(
          0,
          Math.min(prevIndex - currentIndexDiff, items.length - visibleItemsCount)
        )
      );
      setStartTouchX(currentTouchX);
    }, 100)
  ).current;


  return (
    <div>
      <div
        className="containerItems">
               <div
  className="slider-size"
 style={{
    display: "flex",
    alignItems: "baseline",
    transform: `translateX(-${currentIndex * (16.5 / visibleItemsCount)}%)`,
    transition: "transform 0.5s ease-in-out",
    width: `${items.length * (100 / visibleItemsCount)}%`,
  }}
  onTouchStart={(e) => {
    setStartTouchX(e.touches[0].clientX);
  }}
  onTouchMove={(e) => {
    if (startTouchX !== null) {
      const currentTouchX = e.touches[0].clientX;
      debouncedTouchMove(currentTouchX);
    }
  }}
  onTouchEnd={() => {
    setStartTouchX(null);
  }}
>
{items.map((item, index) => (
  <div className="aad" 
  key={item.id || index} style={{ width: `${200 / items.length}%` }}>
    {cards[`imageUrl${index + 1}`] && cards[`imageUrl${index + 1}`] !== "" && (
      <div className="card" style={{ border: "none" }}>
        <img src={cards[`imageUrl${index + 1}`]} alt={`Image ${index + 1}`} />
        <h2>
          {currentLanguage === "en" ? (
            cardsEn[`dis${index + 1}`]
          ) : currentLanguage === "es" ? (
            cardsEs[`dis${index + 1}`]
          ) : currentLanguage === "ru" ? (
            cards[`dis${index + 1}`]
          ) : (
            ""
          )}
        </h2>
      </div>
    )}
  </div>
))}




        </div>
        <div className="EpisodeContainerButtons">
          <button className="leftWatch" onClick={handlePrev} disabled={currentIndex === 0}>
          <i className="arrow left" style={{ position: "relative",
      top: "-10px", left: "-1px"}}></i>
          </button>
          <button
  className="rightWatch"
  onClick={handleNext}
  disabled={currentIndex === items.length - visibleItems || items.length === 0}
>
  <i
    className="arrow right"
    style={{ position: "relative", top: "-10px", left: "-1px" }}
  ></i>
</button>
        </div>
      </div>
      <div className="upcomingEpisodes">{t("upcoming")}</div>
    </div>
);

};

export default SliderEpisode; 


