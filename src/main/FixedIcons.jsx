
import {React, useState, useEffect} from "react";
import "./modules/FixedIcons.css";
import "../App.css"

// Перевод
import {t} from "i18next";
import { useTranslation } from 'react-i18next';


const FixedIcons = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);
    return (
        <div className="fixed__soc">
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-inst">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-tg">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-facebook">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-whatsapp">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-yo">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
        <div className="fixed__icons">
          <a href="" className="fixed__touch">
            <div className="fixed__img-vk">
              <div className="fixed__text">{t("subscribe")}</div>
            </div>
          </a>
        </div>
      
        
      </div> 
    )
}

export default FixedIcons;  