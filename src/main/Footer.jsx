import React from "react";
import s from "./modules/Footer.module.css";
import father from "../main/image/intro/father.png";

// Перевод
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Footer = ({lang}) => {
    
return (
<div className={s.contacts}>
  <div className={s.container}>
  <div className={s.socContainer}>
    <div className={s.contactsInner}>
      <div className={s.contactsNumber}>+7999999999
        <div className={s.contactsAddress1}>Адрес к примеру</div>
        <div className={s.contactsAddress2}>Адрес к примеру</div>
     </div>
     </div>
      <div className={s.socContainerPos}>
                <div className={s.socApp}>
                    <div className={s.soc}>
                    <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgViber}>
                        
                        </div>
                    </a>
                    </div>
                    <div className={s.socContainerPos}>
                        <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgYo}>
                        
                        </div>
                        </a>
                    </div>
                    <div className={s.socContainerPos}>
                        <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgVk}>
                        
                        </div>
                        </a>
                    </div>
                </div>
          <div className={s.socImg}>
            <img className={s.imgPosition} src={father} alt="" />
          </div>
        </div>      
      </div>
  </div>
</div>
    )
}

export default Footer;