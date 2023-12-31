import React from "react";
import "./slider.css";
import $ from "jquery";
import s from "./slider.module.css";
import { NavLink } from "react-router-dom";
import { t } from "i18next";

const SliderWatch = () => {





    $(document).ready(function(){
        let position = 0;
        const slidesToShower = 3;
        const slidesToScroller = 1;
        const container = $('.carousel-containerer');
        const track = $('.carousel-tracker');
        const item = $('.carousel-itemer');
    
        const btnPrer = $('.carouselbtn-prever');
        const btnNexr = $('.carouselbtn-nexter');
    
        const itemsCount = item.length;
        const itemWidth = container.width() / slidesToShower;
        const movePosition = slidesToScroller * itemWidth;
        
    
        item.each(function (index, item) {
            $(item).css({
                minWidth: itemWidth - 20,
            });
        });
    
        btnNexr.click(function() {
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShower * itemWidth) / itemWidth;
    
            position -= itemsLeft >= slidesToScroller ? movePosition : itemsLeft * itemWidth;
    
            setPositior();
            CheckBtnr();
        });
    
        btnPrer.click(function() {
            const itemsLeft = Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScroller ? movePosition : itemsLeft * itemWidth;
    
            setPositior();
            CheckBtnr();
        });
    
        const setPositior = () => {
            track.css({
                transform: `translateX(${position}px)`
            });
        };
    
        const CheckBtnr = () => {
            btnPrer.prop('disabled', position === 0);
            btnNexr.prop(
                'disabled',
                position <= -(itemsCount - slidesToShower) * itemWidth
            );  
        };
    
        CheckBtnr();
    
    
    });
    return (


      
        <div className="carousel-containerer">
    <div className="carousel-tracker">
      <div className="carousel-itemer">Картинка 1
      <div className="carousel-texter_open">описание серии</div>
      </div>
      
      <div className="carousel-itemer">
      <li className="products-grid__item"> 
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
      <div className="carousel-itemer">
      <li className="products-grid__item">  
      <NavLink to="/payments" className={({ isActive }) => isActive ? s.active : undefined}>
            <div className="products__point" href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="45" viewBox="0 0 900.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                    <path d="M4265 12794 c-22 -2 -92 -9 -155 -15 -1278 -120 -2434 -919 -3018
                    -2085 -162 -323 -287 -708 -346 -1064 -49 -297 -49 -287 -53 -1502 l-4 -1158
                    -329 0 c-285 0 -331 -2 -344 -16 -15 -14 -16 -343 -16 -3468 0 -3332 1 -3453
                    18 -3469 17 -16 343 -17 4484 -17 4313 0 4465 1 4481 18 16 17 17 272 17 3470
                    0 3124 -1 3452 -16 3466 -13 14 -59 16 -344 16 l-329 0 -4 1158 c-4 1215 -4
                    1205 -53 1502 -119 720 -458 1409 -960 1952 -617 666 -1440 1082 -2359 1194
                    -122 14 -579 27 -670 18z m609 -1079 c136 -19 236 -40 351 -71 1030 -282 1806
                    -1137 1984 -2184 38 -225 41 -318 41 -1417 l0 -1073 -2750 0 -2750 0 0 1073
                    c0 1099 3 1192 41 1417 178 1047 953 1900 1984 2184 149 41 348 75 525 90 98
                    8 471 -4 574 -19z"/>
                    </g>
                    </svg>
                    <p className="pay__products">{t("payforunlock")}</p>
            </div>
            </NavLink> 
          </li> 
          <div className="carousel-texter">описание серии</div>
      </div>
    </div>

      <div className="button__innerer">
        <div className="carouselbtn-prever">
          <a className="carousel-prever">
            <i className="arrow lefter"></i>
          </a>
        </div>
        <div className="carouselbtn-nexter">
          <a className="carousel-nexter">
            <i className="arrow righter"></i>
          </a>
        </div>
      </div>
    </div>
 
    )
}

export default SliderWatch;