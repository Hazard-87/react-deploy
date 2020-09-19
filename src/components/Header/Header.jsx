import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    if (!props.profile.photos) {
        props.profile.photos = ''
    }

    return (
        <header className={classes.header}>
            <img src='http://pngimg.com/uploads/vkontakte/vkontakte_PNG31.png'/>
            <div className={classes.login}>
                {props.isAuth
                    ? <div class='dropdown'>
                        <button class='btn dropdown-toggle' data-toggle='dropdown'><span>
                            <img src={props.profile.photos.small}/></span>
                        </button>
                        <ul class='dropdown-menu'>
                            <li class='dropdown-divider'></li>
                            <li><button class='btn form-control' onClick={props.logout}>log out</button></li>
                        </ul>
                    </div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header