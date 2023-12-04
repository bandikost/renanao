import React, {useState, useEffect} from "react";
import "../components/Sliders/modules/slider.css"
import s from "./modules/VideoBook.module.css"

import { NavLink } from "react-router-dom";
import { t } from "i18next";
import firebase from "../firebase";
import "firebase/storage";
import 'firebase/compat/storage';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { useRef } from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";

const Audiobook = () => {
  const [audiobookRu, setaudiobookRu] = useState({});
  const [audiobookEn, setaudiobookEn] = useState({});
  const [audiobookEs, setaudiobookEs] = useState({});
  const [items, setItems] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [series, setseries] = useState({});
  const [numSeries, setNumSeries] = useState(() => {
  const storedValue = localStorage.getItem("numSeries"); return storedValue !== null ? parseInt(storedValue, 10) : '';});
  const [startTouchX, setStartTouchX] = useState(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(2);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || i18n.language);
  useEffect(() => {
    document.title = t('audiobook');
  }, []);
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  //Импорт серий, обновленные в менеджере
  useEffect(() => {
    const numSeriesRef = firebase.database().ref("numSeries");
    numSeriesRef.on("value", (snapshot) => {
      const value = snapshot.val();
      setNumSeries(value);
    });
  
    return () => {
      numSeriesRef.off("value");
    };
  }, []);

  //Импорт серий из базы данных
  useEffect(() => {
    const audiobookRuRef = firebase.database().ref("audiobookRu");
    audiobookRuRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setaudiobookRu(data);
    });
  }, []);
  useEffect(() => {
    const audiobookEnRef = firebase.database().ref("audiobookEn");
    audiobookEnRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setaudiobookEn(data);
    });
  }, []);
  useEffect(() => {
    const audiobookRef = firebase.database().ref("audiobook");
    audiobookRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setaudiobookRu(data);
    });
  }, []);
  useEffect(() => {
    const audiobookEsRef = firebase.database().ref("audiobookEs");
    audiobookEsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setaudiobookEs(data);
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
      navigate("/audiobook/OpenResourse");
    }
  }, [isPaid, navigate]);
    
      
      
        return (
          <>
          <Header />
         
      <div className={s.content}> 
      <div className={s.bookContainer}>
          
          <NavLink to={"/general"}>
          <p className={s.bookText}>{t("general")} </p></NavLink>
        
         <div className={s.bookText}>-</div>
         <div className={s.bookTextVis}>{t("audiobook")}</div>
       </div>
      <div className={s.container}>       
                      {isPaid ? ( 
                <div className={s.VideoEpisodeMain} style={{ height: "870px", marginTop: "0px"}}>
                <div className={s.containerVideos}>
                  <div className={s.slidersize} 
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
  
{items.slice(0, numSeries).map((item, index) => (
  <div className={s.aaad}
  key={item.id || index} >
    {currentLanguage === "en" ? (
      audiobookEn &&
      audiobookEn[`videoUrl${index + 1}`] &&
      audiobookEn[`videoUrl${index + 1}`] !== "" && (
        <div className={s.videos} style={{ border: "none" }}>
          <video src={audiobookEn[`videoUrl${index + 1}`]} controls />
          <h1 style={{color: "white", fontWeight: "300", fontSize: "14px"}}>{audiobookEn[`episode${index + 1}`]}</h1>
        </div>
      )
    ) : currentLanguage === "es" ? (
      audiobookEs &&
      audiobookEs[`videoUrl${index + 1}`] &&
      audiobookEs[`videoUrl${index + 1}`] !== "" && (
        <div className={s.videos} style={{ border: "none" }}>
          <video src={audiobookEs[`videoUrl${index + 1}`]} controls />
          <h1 style={{color: "white", fontWeight: "300", fontSize: "14px"}}>{audiobookEs[`episode${index + 1}`]}</h1>
        </div>
      )
    ) : (
      audiobookRu &&
      audiobookRu[`videoUrl${index + 1}`] &&
      audiobookRu[`videoUrl${index + 1}`] !== "" && (
        <div className={s.videos} style={{ border: "none" }}>
          <video src={audiobookRu[`videoUrl${index + 1}`]} controls />
          <h1 style={{color: "white", fontWeight: "300", fontSize: "14px"}}>{audiobookRu[`episode${index + 1}`]}</h1>
        </div>
      )
    )}
  </div>
))}

                  </div> 
                </div>
              </div>   
      ) : (   
  <>
       <div className="carousel-container" style={{position: "relative", top: "0px", margin: "0px auto 0px", height: "500px"}}>
    <div className="carousel-tracker" style={{margin: "0px auto 0px", position: "relative", top: "100px"}}> 
    <div className="carousel-itemer" >
  {currentLanguage === "en" ? (
    audiobookEn && audiobookEn.videoUrl1 && (
      <video src={audiobookEn.videoUrl1} alt="property" controls style={{margin: "65px 0px 0px 60px"}} />     
    )
  ) : (
    audiobookRu && audiobookRu.videoUrl1 && (
      <video src={audiobookRu.videoUrl1} alt="property" controls />
    )
  )}

  <div className="carousel-texter_open">
    {currentLanguage === "en" ? audiobookEn.episode1 : audiobook.episode1}
  </div>
</div>

  <div className="carousel-itemer">
      <li className="products-grid__item"> 
      <NavLink to="/" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
               <img />
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">{audiobook.episode2}</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
            <img />
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">{audiobook.episode3}</div>
      </div>
      </div>
      </div>
  </>
 )} 
</div>
</div>
<Footer />
 </>

    )
}

export default Audiobook;