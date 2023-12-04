
import HeaderEdit from '../Header-edit'
import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import "firebase/storage";
import 'firebase/compat/storage';
import "../modules/manager.css"
import { t } from "i18next";
import { useTranslation } from 'react-i18next';


export const FooterEditEn = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    
    const [footerEn, setfooterEn] = useState(null);
    const [newValues, setNewValues] = useState({});
  
    useEffect(() => {
      const footerEnRef = firebase.database().ref("footerEn");
      footerEnRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setfooterEn(data);
      });
    }, []);
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const footerEnRef = firebase.database().ref("footerEn");
      const updates = {};
      Object.keys(newValues).forEach((key) => {
        if (newValues[key] !== "") {
          updates[key] = newValues[key];
        }
      });
      footerEnRef.update(updates);
    };
  
    useEffect(() => {
        document.title = t('Footer English Edit');
      }, []);
  


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
                {[1, 2, 3].map((i) => (
                  <div key={i} className="table-footerEn">
                    <label style={{ margin: "0px 50px" }}>
                      <p style={{marginLeft: "20px"}}> {i}</p>
                      <input 
                        className="input-edit"
                        style={{ margin: "20px 10px" }}
                        type="text"
                        value={newValues[`info${i}`] || footerEn?.[`info${i}`] || ""}
                        onChange={(e) =>
                          setNewValues({
                            ...newValues,
                            [`info${i}`]: e.target.value,
                          })
                        }
                      />
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

export default FooterEditEn