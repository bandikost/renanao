import React, { useState, useEffect } from "react";
import Footer from "../main/Footer";
import s from "./modules/About.module.css"
import { t } from "i18next";
import {NavLink} from "react-router-dom"
import firebase from "../firebase";

// Перевод
import { useTranslation } from 'react-i18next';
import FixedIcons from "../main/FixedIcons";
import Header from "../main/Header";


const AboutStory = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);


    useEffect(() => {
        document.title = t('about');
      }, []);



      const [action, setaction] = useState({});

      useEffect(() => {
          const actionRef = firebase.database().ref("action");
          actionRef.on("value", (snapshot) => {
            const data = snapshot.val();
            setaction(data);
          });
        }, []);


return ( 
    <>
    <FixedIcons />
    <Header /> 
    <div className={s.content}>  
<div className={s.container}>
    <div className={s.generalMain}>
        <div className={s.generalSuptitle}>{t("about")}</div>
            <div className={s.generalInner}>
                <div className={s.generalWrapper}><p style={{marginTop: "9px"}}>{t("aboutContent")}</p>
                    <div className={s.spaceText}></div>
                </div>
            </div>    
    </div>
</div>
<Footer />
</div>
    </>
    
    )
}

export default AboutStory;