import React, { useState, useEffect } from "react";
import Footer from "../main/Footer";
import s from "./modules/About.module.css"
import { t } from "i18next";
import {NavLink} from "react-router-dom"


// Перевод
import { useTranslation } from 'react-i18next';


const AboutStory = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);


    useEffect(() => {
        document.title = t('About Story');
      }, []);

return ( 
    <div className={s.content}>  
<div className={s.container}>
    <div className={s.generalMain}>
        <div className={s.generalSuptitle}>{t("about")}</div>
            <div className={s.generalInner}>
                <div className={s.generalWrapper}>        
                    <div className={s.spaceText}>{t("aboutContent")}</div>
                </div>
            </div>    
    </div>
</div>
<Footer />
</div>
    )
}

export default AboutStory;