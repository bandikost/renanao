import React, {useState, useEffect} from "react";
import s from "./modules/Footer.module.css";
import father from "../main/image/intro/father.png";
import "firebase/storage";
import 'firebase/compat/storage';
import firebase from "../firebase";

// Перевод
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Footer = ({lang}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("i18nextLng") || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);
  const [footer, setсards] = useState({});

  useEffect(() => {
      const footerRef = firebase.database().ref("footer");
      footerRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setсards(data);
      });
    }, []);

    const [footerEs, setсardsEs] = useState({});

  useEffect(() => {
      const footerEsRef = firebase.database().ref("footerEs");
      footerEsRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setсardsEs(data);
      });
    }, []);

    const [footerEn, setсardsEn] = useState({});

  useEffect(() => {
      const footerEnRef = firebase.database().ref("footerEn");
      footerEnRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setсardsEn(data);
      });
    }, []);


return (
<div className={s.contacts}>
  <div className={s.container}>
  <div className={s.socContainer}>
  <div className={s.contactsInner}>
  <div className={s.contactsNumber}>
    {currentLanguage === "en" && (
      <>
        {footerEn.info1}
        <div className={s.contactsAddress1}>{footerEn.info2}</div>
        <div className={s.contactsAddress2}>{footerEn.info3}</div>
      </>
    )}
    {currentLanguage === "es" && (
      <>
        {footerEs.info1}
        <div className={s.contactsAddress1}>{footerEs.info2}</div>
        <div className={s.contactsAddress2}>{footerEs.info3}</div>
      </>
    )}
    {currentLanguage === "ru" && (
      <>
        {footer.info1}
        <div className={s.contactsAddress1}>{footer.info2}</div>
        <div className={s.contactsAddress2}>{footer.info3}</div>
      </>
    )}
  </div>
</div>

      <div className={s.socContainerPos}>
                <div className={s.socApp}>
                <div className={s.socContainerPos}>
                        <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgInstagram}>
                        
                    </div>
                    
                        </a>
                    </div>
                    <div className={s.socContainerPos}>
                        <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgTg}>
                        
                    </div>
                    
                        </a>
                    </div>
                    <div className={s.socContainerPos}>
                        <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgFacebook}>
                        
                    </div>
                    
                        </a>
                    </div>
                    <div className={s.soc}>
                    <a href="" className={s.fixedTouch}>
                        <div className={s.fixedImgwhatsapp}>
                        
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
                    
                    <p className={s.copyright}>© Renanao, 2023</p> 
                    <p className={s.copyright} style={{marginTop: "20px"}}>© Arsenio Kudasai (Arsenii Kudashev)</p> 
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