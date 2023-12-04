import React, {useState, useEffect} from "react";
import "./modules/slider.css";
import s from "./modules/slider.module.css";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import firebase from "../../firebase";
import "firebase/storage";
import 'firebase/compat/storage';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { useRef } from "react";

const SliderWatch = () => {
  const [isLoggedIn, setisLoggedIn ] = useState({})
  const [seriesRu, setseriesRu] = useState({});
  const [seriesEn, setseriesEn] = useState({});
  const [seriesEs, setseriesEs] = useState({});
  const [items, setItems] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [series, setseries] = useState({});
  const [numSeriesMain, setnumSeriesMain] = useState(() => {
  const storedValue = localStorage.getItem("numSeriesMain"); return storedValue !== null ? parseInt(storedValue, 10) : '';});
  const [startTouchX, setStartTouchX] = useState(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(2);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || i18n.language);
  useEffect(() => {
    document.title = t('general');
  }, []);
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  //Импорт серий, обновленные в менеджере
  useEffect(() => {
    const numSeriesMainRef = firebase.database().ref("numSeriesMain");
    numSeriesMainRef.on("value", (snapshot) => {
      const value = snapshot.val();
      setnumSeriesMain(value);
    });
  
    return () => {
      numSeriesMainRef.off("value");
    };
  }, []);

  //Импорт серий из базы данных
  useEffect(() => {
    const seriesRuRef = firebase.database().ref("seriesRu");
    seriesRuRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setseriesRu(data);
    });
  }, []);
  useEffect(() => {
    const seriesEnRef = firebase.database().ref("seriesEn");
    seriesEnRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setseriesEn(data);
    });
  }, []);
  useEffect(() => {
    const seriesRef = firebase.database().ref("series");
    seriesRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setseries(data);
    });
  }, []);
  useEffect(() => {
    const seriesEsRef = firebase.database().ref("seriesEs");
    seriesEsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setseriesEs(data);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref("series").once("value");
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.values(data); 
          setItems(dataArray);
        }
      } catch (error) {
        console.error("Failed to fetch data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  //айтемы для серий
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //Кнопки для слайдера
  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };
  const isNextDisabled = currentIndex + visibleItemsCount >= items.length;
  const handleNext = () => {
  if (!isNextDisabled) {
    setCurrentIndex(Math.min(currentIndex + 1, items.length - visibleItemsCount));
  }
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

const navigate = useNavigate();
const [isPaid, setIsPaid] = useState(true);
  useEffect(() => {
    if (isPaid) {
      navigate("/general");
    }
  }, [isPaid, navigate]);
    
  const isUserLoggedIn = () => {
    return isLoggedIn;
  };
  
      
        return (
          <>
      <div className={s.content}> 
      <div className={s.container}>       
                      {isPaid ? ( 
                <div className="VideoEpisodeMain">
                <div
                  className="containerVideos">
                  <div
  className="slider-size"
  style={{
    display: "flex",
    alignItems: "baseline",
    transform: `translateX(-${currentIndex * (25 / visibleItemsCount)}%)`,
    transition: "transform 0.5s ease-in-out",
    width: `${items.length * (1000 / visibleItemsCount)}%`,
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
  
{items.slice(0, numSeriesMain).map((item, index) => (
  <div
    className="aaad"
    key={item.id || index}
    style={{ width: `${100 / items.length}%` }}
  >
    {currentLanguage === "en" ? (
      seriesEn &&
      seriesEn[`videoUrl${index + 1}`] &&
      seriesEn[`videoUrl${index + 1}`] !== "" && (
        <div className="videos" style={{ border: "none" }}>
          <video src={seriesEn[`videoUrl${index + 1}`]} controls />
          <h1>{seriesEn[`episode${index + 1}`]}</h1>
        </div>
      )
    ) : currentLanguage === "es" ? (
      seriesEs &&
      seriesEs[`videoUrl${index + 1}`] &&
      seriesEs[`videoUrl${index + 1}`] !== "" && (
        <div className="videos" style={{ border: "none" }}>
          <video src={seriesEs[`videoUrl${index + 1}`]} controls />
          <h1>{seriesEs[`episode${index + 1}`]}</h1>
        </div>
      )
    ) : (
      seriesRu &&
      seriesRu[`videoUrl${index + 1}`] &&
      seriesRu[`videoUrl${index + 1}`] !== "" && (
        <div className="videos" style={{ border: "none" }}>
          <video src={seriesRu[`videoUrl${index + 1}`]} controls />
          <h1>{seriesRu[`episode${index + 1}`]}</h1>
        </div>
      )
    )}
  </div>
))}


                  </div>
                  <div className="EpisodeContainerButtons">
                    <button className="leftEpisode" onClick={handlePrev} disabled={currentIndex === 0}>
                    <i className="arrow left" style={{ position: "relative",
                top: "-10px", left: "-1px"}}></i>
                    </button>
                    <button
            className="rightEpisode"
            onClick={handleNext} disabled={isNextDisabled}
          >
            <i
              className="arrow right"
              style={{ position: "relative", top: "-10px", left: "-1px" }}
            ></i>
          </button>
                  </div>
                </div>
              
              </div>
            
      ) : (   
<>
  <div className="carousel-container" style={{ position: "relative", top: "0px", margin: "0px auto 0px", height: "500px" }}>
    <div className="carousel-tracker" style={{ margin: "0px auto 0px", position: "relative", top: "100px" }}>
      <div className="carousel-itemer">
        {currentLanguage === "en" ? (
          seriesEn && seriesEn.videoUrl1 && (
            <video src={seriesEn.videoUrl1} alt="property" controls/>
          )
        ) : (
          series && series.videoUrl1 && (
            <video src={series.videoUrl1} alt="property" controls />
          )
        )}

        <div className="carousel-texter_open">
          {currentLanguage === "en" ? seriesEn.episode1 : series.episode1}
        </div>
      </div>

        <>
          <div className="carousel-itemer">
            <li className="products-grid__item">
              <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
                <div className="products__point">
                  <img />
                  <p className="pay__products">{t("payforunlock")}</p>
                </div>
              </NavLink>
            </li>
            <div className="carousel-texter">{series.episode2}</div>
          </div>
          <div className="carousel-itemer">
            <li className="products-grid__item">
              <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
                <div className="products__point">
                  <img />
                  <p className="pay__products">{t("payforunlock")}</p>
                </div>
              </NavLink>
            </li>
            <div className="carousel-texter">{series.episode3}</div>
          </div>
        </>
    
    </div>
  </div>
</>

      
 )} 
</div>
</div>
 </>

    )
}

export default SliderWatch;