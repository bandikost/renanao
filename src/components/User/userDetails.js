import { t } from "i18next";
import {React, useState, useEffect, Component} from "react";
import { NavLink } from "react-router-dom";
import s from "./userDetils.module.css";
import { useTranslation } from 'react-i18next';
import ImageModal from '../imageWelcome/ImageModal';
import logo from "./father.png"


   
export default function UserDetails(props) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  const [userData, setUserData] = useState("");


  // очистка localstorage, чтобы пользователь мог сменить аккаунт или просто выйти из него
  const handleLogout = () => {
    window.localStorage.removeItem('token');
  };



  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
      });
  }, []);

  useEffect(() => {
    document.title = t('User');
  }, []);
    
    return (
      
      <div className={s.AppWrapper}>
         <div>
      <ImageModal src={logo} />
    </div>
        <div className={s.AppContent}>      
          <div className={s.AppForm}>
          <div className={s.AppContainer}>
          <p className={s.title}> 

          {userData.fname && <div> {t("Welcome")} {userData.fname}</div>}

          </p>  

          <h1 className={s.title}>
          { userData.email 
            &&  <div> {t("Email Login:")} {userData.email}</div>
            ||            
              <NavLink to={"/sign-in"}>
                <div className={s.auth}>
                
              <svg width="30px" height="30px" fill="white" stroke="white" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M16 18h-4a2 2 0 0 1-1.964-1.622L12 14.414V16h4V4h-4v1.586l-1.964-1.964A2 2 0 0 1 12 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path><path d="M7.5 6.5 9 5l5 5-5 5-1.5-1.5L10 11H2V9h8L7.5 6.5Z"></path></g></svg>
                  <g>
                    <path  fill="white" stroke="white" d="M16 18h-4a2 2 0 0 1-1.964-1.622L12 14.414V16h4V4h-4v1.586l-1.964-1.964A2 2 0 0 1 12 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path>
                    <path  fill="white" stroke="white" d="M7.5 6.5 9 5l5 5-5 5-1.5-1.5L10 11H2V9h8L7.5 6.5Z"></path>
                  </g>
                {t("NeedAuthorization")}
                
                </div>
                </NavLink>
             
          } 
          </h1>
          
          <div className={s.buttonsContent}>
            <div className="App-button" >
            
              <NavLink to="/general" className={({ isActive }) => isActive ? s.active : undefined}>{t("BackToMain")}</NavLink>
                </div>
            <div className="App-button" onClick={handleLogout}>
            <NavLink to="/sign-in" className={({ isActive }) => isActive ? s.active : undefined}   >{t("BackToAuth")}</NavLink>
            
              
              </div>
            </div>
          </div> 
        </div>
        </div>
      </div>
      
    );
     
 
}
