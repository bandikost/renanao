import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import s from "./modules/userDetils.module.css";
import ImageModal from '../imageWelcome/ImageModal';
import logo from "./image/father.png"
import { t } from "i18next";
import { getAuth } from "firebase/auth";
import firebase from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import Header from "../../main/Header";


export default function UserDetails(props) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  const fetchUserData = (user) => {
    console.log('User authorized:', user.email);
    const usersRef = firebase.firestore().collection('users');
    usersRef
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          setUserData({}); // Set user data to an empty object or set default values
        }
      })
      .catch((error) => {
        setUserData({}); // Set user data to an empty object or set default values
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchUserData(user); // Pass the user object as an argument
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUserData(null); // Reset user data to null
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  const handleLogin = () => {
    window.location.href = "/sign-in";
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchUserData(user.email); // Pass the user's email as an argument
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  useEffect(() => {
    document.title = t('user');
  }, []);


  return (
    <>
      <Header />
      <div className={s.AppWrapper}>
        <div>
          <ImageModal src={logo} />
        </div>
        <div className={s.AppContent}>
          <div className={s.AppForm}>
            <div className={s.AppContainer}>
              <p className={s.title}>
                {isLoggedIn && <span> {t("Welcome")}</span>}
              </p>
              <h1 className={s.title}>
                {isLoggedIn && userData && <p>{userData.email}</p>}
                {!isLoggedIn && (
                  <div className={s.auth} onClick={handleLogin}></div>
                )}
              </h1>

              {isLoggedIn && (
                <div className={s.userInfo}>{t("successfully")}</div>
              )}
              {isLoggedIn && (
                <button
                  style={{ color: "black" }}
                  className={s.logoutBtn}
                  onClick={handleLogout}
                >
                  {t("Logout")}
                </button>
              )}
              {!isLoggedIn && (
                <>
                  <p className={s.authP}>{t("NeedAuthorization")}</p>
                  <NavLink className={s.logoutBtn} to="/sign-up">
                    {t("reg")}
                  </NavLink>
                  <NavLink className={s.logoutBtn} to="/sign-in">
                    <div className={s.auth} onClick={handleLogin}></div>
                    {t("auth")}
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
