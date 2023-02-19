import React from "react";
import s from "./modules/Header.module.css";
import NavBar from "../main/NavBar";

const Header = (props) => {
return (
    <div className={s.Header} >
        <div className={s.Headerinner} >
            <NavBar />
        </div>
    </div>    
);};

export default Header;