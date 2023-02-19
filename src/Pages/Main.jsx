import React, { useState, useEffect } from "react";
import Footer from "../main/Footer";
import SliderWatch from "../components/Sliders/slideWatch";
import SliderVideos from "../components/Sliders/slider";
import SliderEpisode from "../components/Sliders/sliderEpisode";
import s from "./modules/Main.module.css"
import { t } from "i18next";

// Перевод
import { useTranslation } from 'react-i18next';




const GeneralPage = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);


    useEffect(() => {
        document.title = t('Main');
      }, []);

return (  

<div className={s.content}>  

    <div className={s.firstblock}  >              
        <SliderVideos />
    </div>

    <div className={s.secondblock}> 
    <div className={s.episode}> {t("cardepisode")}         
        <SliderEpisode />
        </div>  
    </div> 
    <div className={s.thirdblock}>
    <div className={s.episode}> {t("cardseries")}      
        <SliderWatch />
        </div> 
    </div> 
    <Footer />     
</div>          
     
)}


export default GeneralPage;