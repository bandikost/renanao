import React, { useState, useEffect, useRef } from "react";
import Footer from "../main/Footer";
import s from "./modules/VideoBook.module.css"
import { t } from "i18next";
import { NavLink, useNavigate } from "react-router-dom";
import OG from "../Videos/OG Buda.mp4"
import Mayot from "../Videos/MAYOT.mp4"
import soda from "../Videos/SODA.mp4"

// Перевод
import { useTranslation } from 'react-i18next';
import Svg from "./modules/svg";

const VideoBook = (props) => {
    
  const [displayCount, setDisplayCount] = useState(3);
  const [containerHeight, setContainerHeight] = useState(440);



  const videos = [
      { src: soda, name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
      { id: t("discription of series"), src: Svg,  name: t("discription of series")},
    ];

  const videosOpen = [
      { id: 1, src: soda,  name: t("1") },
      { id: 2, src: Mayot, name: t("discription of series") },
      { id: 3, src: OG,    name: t("discription of series") },
      { id: 4, src: soda,  name: t("discription of series") },
      { id: 5, src: Mayot, name: t("discription of series") },
      { id: 6, src: OG,    name: t("discription of series") },
      { id: 7, src: Mayot, name: t("discription of series") },
  ];

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(undefined);

  useEffect(() => {
    document.title = t('Videobook');
  }, []);

  // Сама оплата и перенаправление

  useEffect(() => {
      if (isPaid) {
        navigate("/videobook/OpenResourse");
      }
    }, [isPaid, navigate]);
  
    
  const handlePaypalOnSuccess = async (details, data) => {
      try {
          const res = await fetch('http://localhost:5000/payments', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
              paymentID: data.paymentID,
              token: window.localStorage.getItem("token"),
              })
          });
          const json = await res.json();
          if (json.status === 'success') {
              setIsPaid(true);
              navigate("/videobook/OpenResourse");
          } else {
              console.log('Payment failed');
          }
      } catch (error) {
          console.log(error);
      }
      

  }
  
  

  return (
<div className={s.content}> 
<div className={s.container}> 
  <div className={s.bookMain}>
      <div className={s.bookContainer}>
          
           <NavLink to={"/general"}>
           <a className={s.bookText}>{t("general")} </a></NavLink>
         
          <div className={s.bookText}>-</div>
          <div className={s.bookTextVis}>{t("video")}</div>
        </div>
        <div className={s.videobutton}>
      <button disabled={displayCount <= 3} onClick={() => { setDisplayCount(displayCount - 2) }}><span className="arrow left"></span></button>
      <button disabled={displayCount >= videosOpen.length} onClick={() => { setDisplayCount(displayCount + 2) }}><span className="arrow right"></span></button>
    </div>
          <div className={s.slideContainer}>
        
            <ul className={s.productsGrid}>
              
                <li className={s.productsGridItem}> 
            {isPaid ? (
              
              <div className={s.Episodes} style={{ height: `${containerHeight}px` }}>
              {videosOpen.slice(0, displayCount).map(video => (
                <>  
                  <video key={video.id} width="350" height="220" controls>
                    <source src={video.src} type="video/mp4"/>
                    
                  </video>
                <div className={s.EpisodeDis}>
                    
                      <div className={s.slideName}>{video.name}</div>
                   
                </div>
                </>
             ))}
            </div> 
              
           ) : (  
            <>
            <div className={s.Episodes} style={{ height: `${containerHeight}px` }}>
                              {videos.slice(0, displayCount).map((video, index) => (
                  <>
                    <video key={video.id} width="350" height="220" controls>
                      <source src={video.src} type="video/mp4"/>
                    </video>
                    <div className={s.EpisodeDis}>     
                      <div className={s.slideTitle}>{video.id}{index > 0 && <Svg /> }
                      <NavLink className={s.productsPoint} to={"/payments"}>{t("TapPayments")}</NavLink></div>
                      <div className={s.slideName}>{video.name}
                      
                      </div>  
                      
                     
                    </div>
                    </>
                ))}
            </div> 
            </>
           )} 
      
           </li>          
        </ul> 
    </div> 
  </div>
</div><Footer />
</div>

  )
}


export default VideoBook; 