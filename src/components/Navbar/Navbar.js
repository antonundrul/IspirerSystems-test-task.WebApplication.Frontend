import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = (props) => {
    return (

        <nav className={s.nav}>
            <div>
                <div className={s.item} >
                    <NavLink to='/task1' className = { navData => navData.isActive ? s.activeLink : s.item }>Создать пользователя</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' className = { navData => navData.isActive ? s.activeLink : s.item }>Пользователи</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/internationalization' className = { navData => navData.isActive ? s.activeLink : s.item }>Интернационализация</NavLink>
                </div>
            </div>
            {/*<Friends friends={store.getState().sidebar.friends}/>*/}
        </nav>
    );
}

export default Navbar;
