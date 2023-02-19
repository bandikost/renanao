import React from "react";
import "./slider.css";
import $ from "jquery";

const SliderEpisode = () => {
    $(document).ready(function(){
        let position = 0;
        const slidesToShowe = 5;
        const slidesToScrolle = 1;
        const container = $('.carousel-containere');
        const track = $('.carousel-tracke');
        const item = $('.carousel-iteme');
    
        const btnPre = $('.carouselbtn-preve');
        const btnNex = $('.carouselbtn-nexte');
    
        const itemsCount = item.length;
        const itemWidth = container.width() / slidesToShowe;
        const movePosition = slidesToScrolle * itemWidth;
        
    
        item.each(function (index, item) {
            $(item).css({
                minWidth: itemWidth - 20,
            });
        });
    
        btnNex.click(function() {
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShowe * itemWidth) / itemWidth;
    
            position -= itemsLeft >= slidesToScrolle ? movePosition : itemsLeft * itemWidth;
    
            setPositio();
            CheckBtn();
        });
    
        btnPre.click(function() {
            const itemsLeft = Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScrolle ? movePosition : itemsLeft * itemWidth;
    
            setPositio();
            CheckBtn();
        });
    
        const setPositio = () => {
            track.css({
                transform: `translateX(${position}px)`
            });
        };
    
        const CheckBtn = () => {
            btnPre.prop('disabled', position === 0);
            btnNex.prop(
                'disabled',
                position <= -(itemsCount - slidesToShowe) * itemWidth
            );  
        };
    
        CheckBtn();
    
    
    });
    return (


      
        <div className="carousel-containere">
    <div className="carousel-tracke">
      <div className="carousel-iteme">Картинка 1
      <div className="carousel-texte">описание</div>
      </div>
      
      <div className="carousel-iteme">Картинка 2
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 3
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 4
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 5
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 6
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 7
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 8
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 9
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 10
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 11
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 12
      <div className="carousel-texte">описание</div></div>
      <div className="carousel-iteme">Картинка 13
      <div className="carousel-texte">описание</div></div>
    </div>
      <div className="button__innere">
        <div className="carouselbtn-preve">
          <a className="carousel-preve">
            <i className="arrow lefte"></i>
          </a>
        </div>
        <div className="carouselbtn-nexte">
          <a className="carousel-nexte">
            <i className="arrow righte"></i>
          </a>
        </div>
      </div>
    </div>
 
    )
}

export default SliderEpisode;

