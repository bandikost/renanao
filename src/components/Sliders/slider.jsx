import React, { useState, useEffect } from "react";
import "./slider.css";
import $ from "jquery";
import danun from "./images/Danun.png"
import dayko from "./images/Dayko.png"
import luneo from "./images/Lunaneo.png"
import rena from "./images/rena.png"
import father from "./images/father.png"
import { t } from "i18next";

// Перевод
import { useTranslation } from 'react-i18next';





const SliderVideos = () => {
    $(document).ready(function(){
        let position = 0;
        const slidesToShow = 3;
        const slidesToScroll = 1;
        const container = $('.carousel-container');
        const track = $('.carousel-track');
        const item = $('.carousel-item');
    
        const btnPrev = $('.carouselbtn-prev');
        const btnNext = $('.carouselbtn-next');
    
        const itemsCount = item.length;
        const itemWidth = container.width() / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;
        
    
        item.each(function (index, item) {
            $(item).css({
                minWidth: itemWidth - 20,
            });
        });
    
        btnNext.click(function() {
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            setPosition();
            CheckBtns();
        });
    
        btnPrev.click(function() {
            const itemsLeft = Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            setPosition();
            CheckBtns();
        });
    
        const setPosition = () => {
            track.css({
                transform: `translateX(${position}px)`
            });
        };
    
        const CheckBtns = () => {
            btnPrev.prop('disabled', position === 0);
            btnNext.prop(
                'disabled',
                position <= -(itemsCount - slidesToShow) * itemWidth
            );  
        };
    
        CheckBtns();
  
    
    });

    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
  <div className="carousel-container">
    <div className="carousel-track">

      
      <div className="carousel-item">
        <img className="carousel-img" src={rena} width={"130px"} style={{ top: "60px" }} alt=""/>
          <div className="carousel-characterName">{t("Renanao")}</div>
            <div className="carousel-text">{t("RenanaoCharacter")}</div>
      </div>  

      <div className="carousel-item">
        <img className="carousel-img" src={father} width={"110px"} style={{ top: "5px" }} alt=""/>
        <div className="carousel-characterName">{t("DaddyRenanao")}</div>
        <div className="carousel-text">{t("DaddyRenanaoCharacter")}</div>
      </div>

      <div className="carousel-item">
        <img className="carousel-img" src={dayko} width={"130px"} style={{ top: "0px" }} alt=""/>
        <div className="carousel-characterName">{t("Dayko")}</div>
        <div className="carousel-text">{t("DaykoCharacter")}</div>
      </div>

      <div className="carousel-item">
          <img className="carousel-img" src={danun} width={"180px"} style={{ top: "60px" }} alt="" />
          <div className="carousel-characterName">{t("Danun")}</div>
          <div className="carousel-text">{t("DanunCharacter")}</div>
      </div>

      <div className="carousel-item">
        <img className="carousel-img" src={luneo} width={"180px"} style={{ top: "22px" }} alt=""/>
        <div className="carousel-characterName">{t("Luneo")}</div>
        <div className="carousel-text">{t("LuneoCharacter")}</div>
      </div>


    </div>
      <div className="button__inner">
        <div className="carouselbtn-prev">
          <a className="carousel-prev">
            <i className="arrow left"></i>
          </a>
        </div>
        <div className="carouselbtn-next">
          <a className="carousel-next">
            <i className="arrow right"></i>
          </a>
        </div>
      </div>
    </div>
    )
}

export default SliderVideos;

