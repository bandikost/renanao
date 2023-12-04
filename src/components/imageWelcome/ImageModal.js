import { t } from 'i18next';
import React, { useState, useEffect } from 'react';
import "./App.css"
import { useTranslation } from 'react-i18next';



function ImageModal({ src }) {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);


  const [showImage, setShowImage] = useState(true);

  const handleClose = () => {
    setShowImage(false);
  };

  setTimeout(handleClose, 4000)

  return (
    <div>
      {showImage && (
        <div className={`modal-background ${showImage && 'active'}`}>
          <div className="modal-content">
          <p className='text'>{t("HereUserPage")} </p>
            <img src={src} alt="example" />
            
            <button className="button_position " onClick={handleClose}>X</button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageModal;