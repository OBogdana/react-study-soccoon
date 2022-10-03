import React from 'react';
import cs from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeLink = (navData) => (navData.isActive ? cs.active : cs.item);

    return (
        <nav className={cs.nav}>
            <div className={cs.item}>
                <NavLink to="/Profile" className={activeLink}>Profile</NavLink>
            </div>
            <div className={cs.item}>
                <NavLink to="/Messages" className={activeLink}>Messages</NavLink>
            </div>
            <div className={cs.item}>
                <NavLink to="/News" className={activeLink}>News</NavLink>
            </div>
            <div className={cs.item}>
                <NavLink to="/Music" className={activeLink}>Music</NavLink>
            </div>
            <div className={cs.item}>
                <NavLink to="/Settings" className={activeLink}>Settings</NavLink>
            </div>
            <div className={cs.itemUsers}>
                <NavLink to="/Users" className={activeLink}>Users</NavLink>
            </div>

        </nav>
    );

}

export default Navbar;