import React, { useState, useEffect, useRef } from "react";
import Footer from "../main/Footer";
import SpaceInformation from './SpaceWordsScript';
import { t } from "i18next";

// Перевод
import { useTranslation } from 'react-i18next';
import Header from "../main/Header";
import FixedIcons from "../main/FixedIcons";




const SpaceWords = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.title = t('space');
  }, []);
return (
  <>
  <FixedIcons />
  <Header />
  <SpaceInformation />
  <Footer />
  </>
    )
  }

export default SpaceWords;