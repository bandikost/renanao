import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import "firebase/storage";
import 'firebase/compat/storage';
import "../modules/manager.css"
import HeaderEdit from "../Header-edit";
import { t } from "i18next";
import { useTranslation } from 'react-i18next';

export const MaincardsEditEs = () => {
  const [cardsEs, setcardsEs] = useState(null);
  const [newValues, setNewValues] = useState({});
  const [cards, setcards] = useState(null);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.title = t('cards Spanish Edit');
  }, []);

  useEffect(() => {
    const cardsEsRef = firebase.database().ref("cardsEs");
    cardsEsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setcardsEs(data);
    });
  }, []);

  useEffect(() => {
    const cardsRef = firebase.database().ref("cards");
    cardsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setcards(data);
    });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cardsEsRef = firebase.database().ref("cardsEs");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    cardsEsRef.update(updates);
  };

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${file.name}`);
    imageRef.put(file).then(() => {
      console.log("Изображение успешно загружено!");
      imageRef.getDownloadURL().then((url) => {
        setNewValues(prevState => {
          const updatedValues = { ...prevState };
          updatedValues[`imageUrl${index}`] = url;
          return updatedValues;
        });
      });
    });
  };
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div style={{ backgroundColor: "#c4d3f6"}}>
        <HeaderEdit />
        <div className="container">
          <form
            style={{
              marginTop: "60px",
              borderRadius: " 14px",
              backgroundColor: "white",
              padding: "50px 0px",
            }}
            onSubmit={handleFormSubmit}
          >
            <button className="leftEpisode-edit" onClick={handleClick}>
            <i class="arrow left" style={{ position: "relative",
              top: "-2px", transform: "rotate(45deg)"}}></i>
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i) => (
              <div key={i} className="table-cards">
                <label style={{ margin: "0px 50px" }}>
                  <p style={{marginLeft: "20px"}}>Описание к карточке: № {i}</p>
                  <input
                    className="input-edit"
                    style={{ margin: "20px 10px" }}
                    type="text"
                    value={newValues[`dis${i}`] || cardsEs?.[`dis${i}`] || ""}
                    onChange={(e) =>
                      setNewValues({
                        ...newValues,
                        [`dis${i}`]: e.target.value,
                      })
                    }
                  />
                </label>
                <label htmlFor={`file${i}`}>
                  <div className="image-container">
                    <input
                      id={`file${i}`}
                      type="file"
                      onChange
={(e) => handleImageUpload(e, i)} 
                    />
                    <div className="image-now" >
                      Текущее изображение для объекта карточки: <div style={{fontWeight: "500", fontSize: "20px", marginLeft: "10px"}}> № {i}</div>
                    </div>{" "} 
                    {cards && cards[`imageUrl${i}`] && (
                      <div><img src={cards[`imageUrl${i}`]} alt="property" /></div>
                    )}
                  </div>
                </label>
              </div>
            ))}
            <button type='submit' style={{margin: "50px 60px", cursor: "pointer", padding: "10px"}}>Сохранить</button>
  </form>
  </div>
</div>
</> 
  )
}
export default MaincardsEditEs;