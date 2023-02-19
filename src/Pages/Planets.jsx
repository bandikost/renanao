import React, { useState, useEffect, useRef } from "react";
import Footer from "../main/Footer";
import PlanetsInformation from './PlanetsScript';
import { t } from "i18next";

// Перевод
import { useTranslation } from 'react-i18next';



const PlanetsPage = () => {

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.title = t('Planets');
  }, []);

  
return (
  <>
  <PlanetsInformation />
  <Footer />
  </>
    )
  }

export default PlanetsPage;