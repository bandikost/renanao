import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { t } from "i18next";
import lock from "./image/lock.png";
import user from "./image/user.png";
import eyeIcon from "../../manager/modules/image/lock.png";
import eyeSlashIcon from '../../manager/modules/image/open.png';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

// Перевод
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.title = t('Main');
  }, []);

  useEffect(() => {
    setPasswordMatch(password === repeatPassword);
  }, [password, repeatPassword]);

  const [emailInUseError, setEmailInUseError] = useState(false); // State variable for email in use error
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User authorized:', email);
        navigate("/general");
        
      })
      .catch((error) => {
        console.log('User not authorized:', error.message);
        if (err.code === "auth/email-already-in-use") {
          setEmailInUseError(true);
        } else {
          console.error("Failed to register user:", err);
        }
      });
    
     
  };
  


  useEffect(() => {
    document.title = t('reg');
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(46 48 52)", height: "100vh" }}>
      <div className="formContainer">
        <div className="formWrapper">
          <div className="formNames">
            <div className="title" style={{ fontSize: "25px" }}>{t("reg")}</div>
          </div>
          <form onSubmit={handleSubmit} className="formInput">
            <div className="input-field">
              <img src={user} width={"15px"} style={{ position: "relative", top: "-2px" }} alt="" />
              <input required type="email" name="email" placeholder="type your email" />
            </div>
            <div className="input-field">
              <img src={lock} width={"17px"} style={{ position: "relative", top: "-2px" }} alt="" />
              <input required type={showPassword ? "text" : "password"} name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={lock} width={"18px"} style={{ position: "relative", top: "-2px" }} alt="" />
              <input required type={showPassword ? "text" : "password"} placeholder="repeat your password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
              <div className="passwordToggle" onClick={() => setShowPassword(!showPassword)} style={{ backgroundImage: `url(${showPassword ? eyeSlashIcon : eyeIcon}) ` }} />
            </div>
            <button disabled={loading || !passwordMatch} className="formButton">
              {t("reg")}
            </button>
            {!passwordMatch && <div>Passwords do not match</div>}
            {emailInUseError && <p style={{color: "red", fontSize: "11px", fontWeight: "700"}}>{t(`emailuse` )}</p>}
          </form>
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {t("haveAcc")} <Link to="/sign-in">{t("sign-in")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
