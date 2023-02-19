import React, { useState,useEffect } from "react";
import s from "./modules/NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "./image/null.png";




// Перевод

import { useTranslation } from 'react-i18next';
import { t } from "i18next";
import LanguageSwitcher from '../components/LanguageSwitcher';



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);


    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language); 
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);
  
return (
<nav className={s.nav} > 
      
    <li className={s.item} >
            <NavLink to="/about" className={({ isActive }) => isActive ? s.active : undefined}> {t("about")} </NavLink>
    </li>
    <li className={s.item}>
            <NavLink to="/videobook" className={({ isActive }) => isActive ? s.active : undefined}> {t("video")}  </NavLink>
    </li>

    <li className={s.item}>
            <NavLink to="/planets" className={({ isActive }) => isActive ? s.active : undefined}> {t("planets")}</NavLink>
    </li>
      
    <li className={s.item}>
            
            <NavLink to="/general" className={({ isActive }) => isActive ? s.active : undefined}> 
            <span className={s.cloud}>{t("Renanao")}</span>
              <img src={logo} alt="" />
            </NavLink>
            
    </li>
  
    <li className={s.item}>
            <NavLink to="/audiobook" className={({ isActive }) => isActive ? s.active : undefined} > {t("audiobook")} </NavLink>
    </li>
    <li className={s.item}>
            <NavLink to="/spaceWords" className={({ isActive }) => isActive ? s.active : undefined}> {t("space")} </NavLink>
    </li>
    <li className={s.itemcontacts}>
            <NavLink to="/" className={({ isActive }) => isActive ? s.active : undefined}> {t("contact")} </NavLink>
    </li>
  

    
  <div className={s.action}>                 
    <nav>
        <ul>
          <li>
          <div className={s.svg}  >                 
          <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className={s.svgPosition}>
    <path
      fillRule="evenodd"
      d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
      clipRule={undefined}
    />
  </svg>
                <a className={s.menu} href="#" onClick={() => setIsOpen(!isOpen)}>o</a>
                {isOpen && (
            <ul className={s.menuContent}>                  
              <li className={s.planet}>
              
              <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1q25cff-1 dSicFr"><path fillRule="evenodd" d="M10 2c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm5.917 9a6.015 6.015 0 01-3.584 4.529A10 10 0 0013.95 11h1.967zm0-2a6.015 6.015 0 00-3.584-4.529A10 10 0 0113.95 9h1.967zm-3.98 0A8.002 8.002 0 0010 4.708 8.002 8.002 0 008.063 9h3.874zm-3.874 2A8.002 8.002 0 0010 15.292 8.002 8.002 0 0011.937 11H8.063zM6.05 11a10 10 0 001.617 4.529A6.014 6.014 0 014.083 11H6.05zm0-2a10 10 0 011.617-4.529A6.014 6.014 0 004.083 9H6.05z" clipRule={undefined}></path></svg>
              <a className={s.menus} href="#" onClick={() => setIsOpens(!isOpens)}>{t("Setlanguage")}</a>
              {isOpens && (
                <ul className={s.menusContent}> 
                <LanguageSwitcher />
                <li className={s.planetSecond} onClick={() => setIsOpens(false)}>
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1q25cff-1 dSicFr">
                  <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                  <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
                </svg>
                   
                    <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                    <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
                 
                  <div>Close</div>
              </li>
                </ul>
                )}
              </li> 

<hr className={s.hr} />
                      
              <li className={s.profile}>
                <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1bgeryd-1 ifdSJl"><path d="M16 18h-4a2 2 0 0 1-1.964-1.622L12 14.414V16h4V4h-4v1.586l-1.964-1.964A2 2 0 0 1 12 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path><path d="M7.5 6.5 9 5l5 5-5 5-1.5-1.5L10 11H2V9h8L7.5 6.5Z"></path></svg>
                 
                    <path   d="M16 18h-4a2 2 0 0 1-1.964-1.622L12 14.414V16h4V4h-4v1.586l-1.964-1.964A2 2 0 0 1 12 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path>
                    <path  d="M7.5 6.5 9 5l5 5-5 5-1.5-1.5L10 11H2V9h8L7.5 6.5Z"></path>
                 
                 
                  <NavLink to="/userDetails" className={({ isActive }) => isActive ? s.active : undefined}>
                    
                    
                    <span className={s.profilelink}>{t("profile")}</span>
                    </NavLink>
                  
              </li>

<hr className={s.hr} />

              <li className={s.planetSecond} onClick={() => setIsOpen(false)}>
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1q25cff-1 dSicFr"><path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path><path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path></svg>
                  
                    <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                    <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
                  
                  <div>Close</div>
              </li>
            </ul>
            )}
            </div>
          </li>
        </ul>
    </nav>   
  </div> 
</nav>    
);};



export default NavBar;