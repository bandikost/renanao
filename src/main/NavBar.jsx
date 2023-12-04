import React, { useState,useEffect } from "react";
import s from "./modules/NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "./image/null.png";
import exit from "./image/nav/exit.png"
import enter from "./image/nav/enter.png"
import profile from "./image/nav/profile.png"
import planet from "./image/nav/planet.png"
// Перевод

import { useTranslation } from 'react-i18next';
import { t } from "i18next";
import LanguageSwitcher from '../hooks/LanguageSwitcher';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language); 
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);
    const handleRefreshClick = () => {
      window.location.reload();
    };

      const handleNavLinkClick = () => {
        window.scrollTo(0, document.body.scrollHeight);
      }



return (
  <>
  {isMobile && (
    <div className={s.burgerButton}>
        <li className={s.item}>
            
            <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}> 
            <div className={s.cloud} style={{position: "absolute", top: "2px", left: "-32px", fontSize: "22px"}}>{t("Renanao")}</div>
              <img style={{position: "absolute",
    width: "125px",
    left: "0",
    marginTop: "-8px"}} src={logo} alt="" />
            </NavLink>
            
    </li>
    <div className={s.burgerMenu} >
      <div className={s.menucontent} style={{marginTop: "5px"}}>
        <div className={s.planet} onClick={() => setIsBurger(!isBurger)}>
          <div className={s.spanBurger}></div>
        </div>
        {isBurger && (
            <ul className={s.menuContent} style={{marginTop: "10px", marginLeft: "-20px"}}>                                      
          <nav className={s.nav} style={{display: "block"}}> 
            <li className={s.item} style={{width: "142px"}}>
              <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}> {t("about")} </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/videobook" className={({ isActive }) => isActive ? s.active : ""}> {t("video")}  </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/planets" className={({ isActive }) => isActive ? s.active : ""}> {t("planets")}</NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/audiobook" className={({ isActive }) => isActive ? s.active : ""} > {t("audiobook")} </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.item}>
                    <NavLink to="/spaceWords" className={({ isActive }) => isActive ? s.active : ""}> {t("space")} </NavLink>
            </li>
          <hr className={s.hr} />
            <li className={s.itemcontacts}>
                    <NavLink to="/" className={({ isActive }) => isActive ? s.active : ""}> {t("contact")} </NavLink>
            </li>
             
    <div className={s.action}>                 
      <nav>
          <ul>
            <div className={s.svgContainer}>
            <div className={s.svg}  >                 
            <img src={profile} width={"32px"} style={{position: "relative", left: "0px"}} alt="" />
                  <a className={s.menu} href="#" onClick={() => setIsOpen(!isOpen)}>o</a>
                  {isOpen && (
              <ul className={s.menuContent} >                  
                <div className={s.planet} style={{marginLeft: "-5px"}}>
                <img src={planet} width={"18px"} height={"18px"} style={{position: "relative", top: "2px", left: "-8px"}} alt="" />
                <a className={s.menus} href="#" onClick={() => setIsOpens(!isOpens)}>{t("Setlanguage")}</a>
                {isOpens && (
                  <ul className={s.menusContent} onClick={handleRefreshClick}> 
                  <LanguageSwitcher onClick={handleRefreshClick} />
                  <div className={s.planetSecond} onClick={() => setIsOpens(false)}>
                    <div>
                    <img src={enter} width={"18px"} height={"18px"} style={{position: "relative", left: "-10px", top: "-2px"}} alt="" />{t("close")}</div>
                </div>
                  </ul>
                  )}
                </div> 
<hr className={s.hr} />              
                <li className={s.profile} style={{marginLeft: "-10px"}}>
                  <img src={profile} width={"22px"} style={{position: "relative", left: "-5px"}} alt="" />
                    <NavLink to="/userDetails" className={({ isActive }) => isActive ? s.active : ""}>
                      <span className={s.profilelink}>{t("profile")}</span>
                      </NavLink>
                </li>
<hr className={s.hr} />
                <li className={s.planetSecond} style={{marginLeft: "-6px"}} onClick={() => setIsOpen(false)}>
                  <img src={enter} width={"18px"} height={"18px"} style={{position: "relative", left: "-9px", top: "3px"}} alt="" />
                    <div style={{marginLeft: "5px"}}>
                      
                      {t("close")}</div>
                </li>
              </ul>
              )}
              </div>
              <li className={s.menuClose} onClick={() => setIsBurger(false)}>
              <img src={enter} width={"20px"} height={"20px"} style={{position: "relative", left: "-3px", top: "0px"}} alt="" />
                    <p style={{marginLeft: "5px"}}>
                      {t("close")}</p>
                </li>
            </div>
            
          </ul>
      </nav>   
    </div> 
  </nav> 
            </ul>
            )}
      </div>
    </div>
    
    </div>
  )}
  {!isMobile && (
<nav className={s.nav} >    
    <li className={s.item} >
      <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}> {t("about")} </NavLink>
    </li>
    <li className={s.item}>
      <NavLink to="/videobook" className={({ isActive }) => isActive ? s.active : ""}> {t("video")}  </NavLink>
    </li>
    <li className={s.item}>
      <NavLink to="/planets" className={({ isActive }) => isActive ? s.active : ""}> {t("planets")}</NavLink>
    </li> 
    <li className={s.item}>    
      <NavLink to="/general" className={({ isActive }) => isActive ? s.active : ""}> 
        <span className={s.cloud}>{t("Renanao")}</span>
          <img src={logo} alt="" />
      </NavLink>       
    </li>
    <li className={s.item}>
      <NavLink to="/audiobook" className={({ isActive }) => isActive ? s.active : ""} > {t("audiobook")} </NavLink>
    </li>
    <li className={s.item}>
      <NavLink to="/spaceWords" className={({ isActive }) => isActive ? s.active : ""}> {t("space")} </NavLink>
    </li>
    <li className={s.itemcontacts} onClick={handleNavLinkClick}>
      <NavLink className={({ isActive }) => isActive ? s.active : ""}> {t("contact")} </NavLink>
    </li>
    
  <div className={s.action}>                 
    <nav>
        <ul>
          <div>
          <div className={s.svg}  >                 
          <img src={profile} width={"32px"} style={{position: "relative", left: "-50px", top: "-2px"}} alt="" />
                <a className={s.menu} href="#" onClick={() => setIsOpen(!isOpen)}>o</a>
                {isOpen && (
            <ul className={s.menuContent}>                  
              <li className={s.planet}>
              <img src={planet} width={"24px"} height={"24px"} style={{position: "relative", left: "-10px"}} alt="" />
              <a className={s.menus} href="#" onClick={() => setIsOpens(!isOpens)}>{t("Setlanguage")}</a>
              {isOpens && (
                <ul className={s.menusContent} onClick={handleRefreshClick}> 
                <LanguageSwitcher onClick={handleRefreshClick}/>
                <div className={s.planetSecond} onClick={() => setIsOpens(false)}>
                <img src={enter} width={"20px"} height={"20px"} style={{position: "relative", left: "-12px", top: "0px"}} alt="" />
                  <div style={{marginLeft: "-4px"}}>
                    {t("close")}</div>
              </div>
                </ul>
                )}
              </li> 

<hr className={s.hr} />
                      
              <li className={s.profile}>
              <img src={enter} width={"22px"} height={"22px"} style={{position: "relative", left: "-10px"}} alt="" />
                  <NavLink to="/userDetails" className={({ isActive }) => isActive ? s.active : ""}> 
                    <span className={s.profilelink}>{t("profile")}</span>
                    </NavLink>  
              </li>

<hr className={s.hr} />

              <li className={s.planetSecond} onClick={() => setIsOpen(false)}>
              <img src={exit} width={"24px"} height={"24px"} style={{position: "relative", left: "-5px"}} alt="" />
                  <div style={{marginLeft: "5px"}}>
                    {t("close")}</div>
              </li>
            </ul>
            )}
            </div>
          </div>
        </ul>
    </nav>   
  </div> 
</nav>  
)}
</>
);
};

export default NavBar;