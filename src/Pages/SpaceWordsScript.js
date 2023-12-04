import React, {useEffect, useState} from "react";
import "./modules/SpaceWords.css"
//Перевод
import { useTranslation } from 'react-i18next';
import { t } from "i18next";

//Планеты
import cloud from "./modules/images/null.png";


const SpaceInformation = (props) => {
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
<div className="planets">
  <div className="container">
    <div className="planet__name">{t("space")}:</div>
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
                        <div className="ui-message-box__header">
                          <p className="message-box-title">{t("Astronomy")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p >{t("AstronomyText")}</p>
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
            <div className="planet__text" >{t("Astronomy")}
              
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
                          <p className="message-box-title">{t("Universe")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p >{t("UniverseText")}</p>
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
            <div className="planet__text">{t("Universe")}        
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
                          <p className="message-box-title" >{t("Galaxy")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p >{t("GalaxyText")} </p>
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
            <div className="planet__text" >{t("Galaxy")}      
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
                          <p className="message-box-title">{t("Exoplanet")}  </p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p >{t("ExoplanetText")}</p>
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
            <div className="planet__text">{t("Exoplanet")}
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
                          <p className="message-box-title">{t("Ultraviolet")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p >{t("UltravioletText")} </p>
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
            <div className="planet__text">{t("Ultraviolet")}    
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
                          <p className="message-box-title">{t("Gravity")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p>{t("GravityText")}</p>
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
            <div className="planet__text">{t("Gravity")}
              
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
                          <p className="message-box-title">{t("Speedoflight")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p>{t("SpeedoflightText")}</p>
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
            <div className="planet__text">{t("Speedoflight")}       
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
                          <p className="message-box-title">{t("Turbulence")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                    
                        <div className="ui-message-box__content">
                          
                          <p>{t("TurbulenceText")} </p>
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
            <div className="planet__text">{t("Turbulence")}    
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
                          <p className="message-box-title">{t("Teleportation")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p >{t("TeleportationText")}</p>
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
            <div className="planet__text" >{t("Teleportation")}
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
                          <p className="message-box-title">{t("Observatory")}</p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p>{t("ObservatoryText")}</p>
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
            <div className="planet__text">{t("Observatory")}  
            </div>
          </div>

        </div>

        

      </div>
      
  </div>
  <div className="planet_away">
    <div className="planet__inner">
      <div className="planet__img">
        <section className="message-box-doc">
          <div className="container">
            <div className="example-empty">
              <div className="ui-message-box__wrapper" id="exampleModal">
                <div className="ui-message-box">
                <img src={cloud} alt=""/>
                  <div className="ui-message-box__header">
                    <p className="message-box-title">{t("Constellation")}</p>
                    
                    <p className="button-close" ></p>
                    </div>
                    
                  <div className="ui-message-box__content">
                    
                    <p>{t("ConstellationText")} </p>
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
      <div className="planet__text" >{t("Constellation")} 
      </div>
    </div>
  </div>
</div>
  )

};

export default SpaceInformation;