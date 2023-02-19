import React, {useEffect, useState} from "react";
import "./modules/Planets.css"
//Перевод
import { useTranslation } from 'react-i18next';
import { t } from "i18next";

//Планеты
import cloud from "./modules/images/null.png";
import jupiter from "./modules/images/planet/jupiter.png";
import mars from "./modules/images/planet/mars.png";
import mercury from "./modules/images/planet/mercury.png";
import pluto from "./modules/images/planet/pluto.png";
import saturn from"./modules/images/planet/saturn.png";
import uran from "./modules/images/planet/uran.png";
import ventus from "./modules/images/planet/ventus.png";
import neptune from "./modules/images/planet/neptune.png";




const PlanetsInformation = (props) => {
  useEffect(() => {
    const Show = document.getElementsByClassName('button-light');
    [].forEach.call(Show, (element, i) => {
      element.addEventListener('click', () => showMessageDialog(i));
    });

    const Close = document.getElementsByClassName('button-primary');
    [].forEach.call(Close, (element, i) => {
      element.addEventListener('click', () => closeMessageDialog(i));
    });
  }, []);

  function showMessageDialog(i) {
    const modal = document.getElementsByClassName('ui-message-box__wrapper')[i];
    modal.style.display = "block";
  }

  function closeMessageDialog(i) {
    const modal = document.getElementsByClassName('ui-message-box__wrapper')[i];
    modal.style.display = "none";
  }


  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);



 return (
<div className="planetss">
  <div className="container">
    <div className="planet__name">{t("planets")} :</div>
      <div className="planet__container">
        <div className="planet__pos">

          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                        <img src={cloud} alt=""/>
                        <div className="ui-message-box__headerMars">
                          <p className="message-box-title">{t("mars")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__contentMars">
                          
                          <p>{t("MarsText")}</p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >
            <img src={mars} alt="" width={"50px"} />
                {t("mars")}
             
            </div>
          </div>

          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("jupiter")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p> {t("JupiterText")} </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">
              <img src={jupiter} alt="" width={"50px"} />
              {t("jupiter")}    
            </div>
          </div>

          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                        <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title" >{t("mercury")} </p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p >{t("MercuryText")} </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >
            <img src={mercury} alt="" width={"50px"} />
              {t("mercury")}       
            </div>
          </div>


          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("pluto")} </p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p > {t("PlutoText")} </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">
            <img src={pluto} alt="" width={"50px"} />
            {t("pluto")}
            </div>
          </div>
        </div>

    

        <div className="planet__pos">
          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("neptune")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p>{t("NeptuneText")}</p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">
            <img src={neptune} alt="" width={"50px"} />
            {t("neptune")}       
            </div>
          </div>

          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("ventus")}  </p>
                          
                          <p className="button-close" ></p>
                          </div>
                    
                        <div className="ui-message-box__content">
                          
                          <p>{t("VenusText")}</p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">
            <img src={ventus} alt="" width={"50px"} />
            {t("ventus")}      
            </div>
          </div>


          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title"> {t("saturn")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p > {t("SaturnText")} </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >
            <img src={saturn} alt="" width={"50px"} />
            {t("saturn")}   
            </div>
          </div>


          <div className="planet__inner">
            <div className="planet__img">
              <section className="message-box-doc">
                <div className="container">
                  <div className="example-empty">
                    <div className="ui-message-box__wrapper" id="exampleModal">
                      <div className="ui-message-box">
                      <img src={cloud} alt=""/>
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("uran")} </p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p> {t("UranText")} </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">{t("close")}</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">
            <img src={uran} alt="" width={"50px"} />
            {t("uran")}   
            </div>
          </div>

        </div>

        

      </div>
      
  </div>
</div>
  )

};

export default PlanetsInformation;