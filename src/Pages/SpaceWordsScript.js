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
    <div className="planet__name">{t("space")} :</div>
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
                          <p className="message-box-title">Астрономия</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p >Наука о Вселенной, которая изучает расположение, структуру и происхождение небесных тел и систем</p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >Астрономия
              
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
                          <p className="message-box-title">Вселенная</p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p >Всё пространство на небе, которое видно и не видно глазу. Вселенная многогранна и бесконечно. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Вселенная        
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
                          <p className="message-box-title" >Галактика</p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p >Система из звёзд, звёздного газа и пыли, и планет. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >Галактика       
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
                          <p className="message-box-title">Экзопланета </p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p >Планета, нахоящаяся за пределами Солнечной системы, в системе другой звезды. А сегодняшний день известны около 5000 экзопланет. Некоторые из них могут быть пригодны для проживания обезьян.  </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Экзопланета 
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
                          <p className="message-box-title">Ультрафиолет</p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p >Электромагнитное излучение, которое может быть видимым и невидимым. Часто ультрафиолет исходит от Солнца. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Ультрафиолет     
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
                          <p className="message-box-title">Гравитация </p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p> Это сила, которая притягивает два тела друг к другу. Всё, к чему можно прикоснуться, имеет гравитационное притяжение. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Гравитация 
              
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
                          <p className="message-box-title">Скорость света </p>
                          
                          <p className="button-close" ></p>
                          </div>
                          
                        <div className="ui-message-box__content">
                          
                          <p>Скорость распространения электромагнитных волн и солнечного света. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Скорость света        
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
                          <p className="message-box-title">Турбуленция</p>
                          
                          <p className="button-close" ></p>
                          </div>
                    
                        <div className="ui-message-box__content">
                          
                          <p>Потоки воздуха, идущие вверх и вниз, в которые попадает космолёт, и его начинает трясти. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Турбуленция      
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
                          <p className="message-box-title">Телепортация </p>
                          
                          <p className="button-close" ></p>
                          </div>
                        
                        <div className="ui-message-box__content">
                          
                          <p >Перемещение тела или объекта или частиц из одного места в другое, обычно при помощи скачка. </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text" >Телепортация
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
                          <p className="message-box-title">Обсерватория</p>
                          
                          <p className="button-close" ></p>
                          </div>
                         
                        <div className="ui-message-box__content">
                          
                          <p>Здание, откуда наблюдают за различными объектами в космосе, обычно при помощи больших телескопов.  </p>
                        </div>
                        <div className="ui-message-box__footer">
                          <div className="button button-primary">Закрыть</div>
                        </div>
                      </div>
                    </div>
                    <div className="button button-light"></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="planet__text">Обсерватория   
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
                    <p className="message-box-title">Созвездие </p>
                    
                    <p className="button-close" ></p>
                    </div>
                    
                  <div className="ui-message-box__content">
                    
                    <p>Группа звёзд, которые представляют собой некий узор или изображение. Например, созвездие Ковш выглядит точно как ковшик с ручкой.   </p>
                  </div>
                  <div className="ui-message-box__footer">
                    <div className="button button-primary">Закрыть</div>
                  </div>
                </div>
              </div>
              <div className="button button-light"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="planet__text" >Созвездие 
      </div>
    </div>
  </div>
</div>
  )

};

export default SpaceInformation;