import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import "firebase/storage";
import 'firebase/compat/storage';
import "../modules/manager.css"
import HeaderEdit from "../Header-edit";
import { t } from "i18next";
import { useTranslation } from 'react-i18next';
import 'firebase/database';

export const MainVideoEditEs = () => {
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadantiProgress, setUploadantiProgress] = useState({});
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  const [numSeriesMain, setnumSeriesMain] = useState(() => {
    const storedValue = localStorage.getItem("numSeriesMain");
    return storedValue !== null ? parseInt(storedValue, 10) : 0;
  });
  const [seriesEs, setseriesEs] = useState(null);
  const [newValues, setNewValues] = useState({});

  const handleNumSeriesChangeMainEs = (event) => {
    let value = event.target.value;
    if (value > 100) {
      value = 100;
    }
    setnumSeriesMain(value);
    firebase.database().ref().child("numSeriesMain").set(value);
  };
  
  
  useEffect(() => {
    const numSeriesMainRef = firebase.database().ref("numSeriesMain");
    numSeriesMainRef.on("value", (snapshot) => {
      const value = snapshot.val();
      setnumSeriesMain(value);
    });
  
    return () => {
      numSeriesMainRef.off("value");
    };
  }, []);
  
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.title = t('Video Spanish Edit');
  }, []);

  useEffect(() => {
    const seriesEsRef = firebase.database().ref("seriesEs");
    seriesEsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setseriesEs(data);
    });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const seriesEsRef = firebase.database().ref("seriesEs");
    const updates = {};
    Object.keys(newValues).forEach((key) => {
      if (newValues[key] !== "") {
        updates[key] = newValues[key];
      }
    });
    seriesEsRef.update(updates);
  };

  const handlevideoUpload = (event, index) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const videoRef = storageRef.child(`videos/${file.name}`);
  
    const uploadTask = videoRef.put(file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        const antiprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [index]: progress,
          [index]: antiprogress
        }));
        const progressBar = document.getElementById(`progress${index}`);
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }
      },
      (error) => {
        const antiprogressBar = document.getElementById(`antiprogress${index}`);
        if (antiprogressBar) {
          antiprogressBar.style.width = `${antiprogress}%`;
        }
      },
      () => {
        // Handle successful upload
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newseriesEs = { ...seriesEs };
          newseriesEs[`videoUrl${index}`] = downloadURL;
          setseriesEs(newseriesEs);
          setNewValues((prevValues) => {
            return { ...prevValues, [`videoUrl${index}`]: downloadURL };
          });
        });
      }
    );
  };
  
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 100,
      behavior: "smooth"
    });
  };
  
  const series = [];
  for (let i = 1; i <= numSeriesMain; i++) {
    series.push(
      <>
      <div key={i} className="table-series" style={{ display: "flex" }}>
        <label style={{ margin: "0px 50px" }}>
          <p style={{ marginLeft: "20px" }}>Описание к серии: № {i}</p>
          <textarea
  className="input-edit"
  style={{ margin: "20px 10px", width: "300px", padding: "20px 15px" }}
  value={newValues[`episode${i}`] || seriesEs?.[`episode${i}`] || ""}
  onChange={(e) =>
    setNewValues({
      ...newValues,
      [`episode${i}`]: e.target.value,
    })
  }
  wrap="hard"
/>

        </label>
        <label htmlFor={`file${i}`}>
  <div className="video-container" >
    <div className="video-names">
    <input
      style={{ cursor: "pointer", width: "135px" }}
      id={`file${i}`}
      type="file"
      onChange={(e) => handlevideoUpload(e, i)}
    /> <p style={{ fontSize: "14px", margin: "0px 0px 0px 100px", color: "black" }}>
    Текущее видео для объекта серии: {i}{" "}
  </p>
  </div>
    <div className="video-now">
      <div
        style={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}
      >
        {" "}
        № {i}
      </div>
    </div>
    {seriesEs && seriesEs[`videoUrl${i}`] && (
      <div>
        <video style={{ width: "200px" }} src={seriesEs[`videoUrl${i}`]} controls alt="property" />
      </div>
    )}
    
      {uploadProgress[i] && (
        <div  className="video-progress">
          <p style={{display: "flex" ,color: "black", width: "180px", marginLeft: "30px"}}>{uploadProgress[i]}% загружено</p>
          <div id={`progress${i}`} style={{ width: `${uploadProgress[i]}%`, height: "5px", backgroundColor: "green" }} />
          <p style={{color: "black", fontSize: "12px", marginTop: "10px"}}>Не забудьте нажать кнопку "Сохранить"!</p>
        </div>
      )}
   
  </div>
</label>

   
      </div>
        </>
    );
  }

  return ( 
<div style={{ backgroundColor: "#c4d3f6"}}>
<HeaderEdit />
<div className="container">
    <div>
      <label htmlFor="numSeriesMain" style={{color: "black"}}>Сколько отображать серий на сайте:</label>
      <input
  style={{ marginLeft: "30px", width: "100px", fontSize: "18px" }}
  id="numSeriesMain"
  type="number"
  value={numSeriesMain}
  onChange={handleNumSeriesChangeMainEs}
/>
    </div>
  <form style={{ marginTop: "60px", borderRadius: " 14px", backgroundColor: "white", padding: "50px 0px"}} onSubmit={handleFormSubmit}>
    <button className="leftEpisode-edit" onClick={handleClick}>
      <i className="arrow left" style={{ position: "relative", top: "-2px", transform: "rotate(45deg)"}}></i>
    </button>
      {series}
    <button type='submit' style={{margin: "50px 60px", cursor: "pointer", padding: "10px"}}>Сохранить</button>    
  </form>
  </div>
</div>
  )
}

export default MainVideoEditEs;