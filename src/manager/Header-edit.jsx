import React from 'react'
import s from "./modules/HeaderEdit.module.css"
import { NavLink } from 'react-router-dom'

export const HeaderEdit = () => {
  return (
    <div className={s.header}>
        <div className={s.navigate}>
            <ul className={s.ul}>
                <li className={s.li}>
                <NavLink to="/manager">Назад</NavLink>
                </li>
                <li className={s.li}>
                <NavLink to="/general">Главная</NavLink>
                </li> 
                <li className={s.li}>
                <NavLink to="/manager-en">Версия на Английском</NavLink>
                </li> 
                <li className={s.li}>
                <NavLink to="/manager-es">Версия на Испанском</NavLink>
                </li> 
                <li className={s.li}>
                <NavLink to="/manager">Версия на Русском</NavLink>
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default HeaderEdit