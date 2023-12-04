import React, { useState, useEffect} from 'react';
import i18next from '../i18n';
import English from "../main/image/language/flag_en_big.jpg";
import Russian from "../main/image/language/ru_flag.png";
import Spanish from "../main/image/language/flag_ispanija_new.jpg";
import s from "../main/modules/NavBar.module.css";



function LanguageSwitcher() {

  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18next.language);

  useEffect(() => {
    const updateLanguage = e => {
      if(e.key === 'i18nextLng') {
        setCurrentLanguage(localStorage.getItem('i18nextLng'))
        i18next.changeLanguage(localStorage.getItem('i18nextLng'));
      }
    }
    window.addEventListener('storage', updateLanguage);
    return () => {
      window.removeEventListener('storage', updateLanguage);
    }
  }, []);

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('i18nextLng', language);
  }

  return (
    <div value={currentLanguage}>
      
      <div className={s.language} onClick={() => handleLanguageChange("en")} >
        <img src={English}  /> English</div>
        <hr className={s.hr} />
     
     
      <div className={s.language} onClick={() => handleLanguageChange("ru")}>
        <img src={Russian}  /> Русский</div>
        <hr className={s.hr} />
      
      
      <div className={s.language} onClick={() => handleLanguageChange("es")}>
        <img src={Spanish}  /> Español</div>
        <hr className={s.hr} />
     
    </div>
  );
}

export default LanguageSwitcher;