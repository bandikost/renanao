import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { t } from "i18next";
import lock from "./image/lock.png";
import user from "./image/user.png";
import eyeIcon from "../../manager/modules/image/lock.png";
import eyeSlashIcon from '../../manager/modules/image/open.png';

// Перевод
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/general");
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    document.title = t('auth');
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(46 48 52)", height: "100vh" }}>
      <div className="formContainer">
        <div className="formWrapper">
          <div className="formNames">
            <div className="title" style={{ fontSize: "25px" }}>
              {t("sign-in")}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="formInput">
            <div className="input-field">
              <img
                src={user}
                width={"15px"}
                style={{ position: "relative", top: "-2px" }}
                alt=""
              />
              <input
                required
                type="email"
                name="email"
                placeholder="type your email"
              />
            </div>
            <div className="input-field">
              <img
                src={lock}
                width={"18px"}
                style={{ position: "relative", top: "-2px" }}
                alt=""
              />
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="passwordToggle"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  backgroundImage: `url(${
                    showPassword ? eyeSlashIcon : eyeIcon
                  })`,
                }}
              />
            </div>
            <button className="formButton">{t("sign-in")}</button>
            {err && <div> {t("wentWrong")}</div>}
          </form>
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {t("NohaveAcc")} <Link to="/sign-up">{t("reg")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


