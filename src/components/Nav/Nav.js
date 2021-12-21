import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
        <nav className="btn-nav text-capitalize text-center" >
            <NavLink className="styledLink" to={`/${props.nav}`} >{props.nav}</NavLink>
        </nav>
    );
}

export default Nav;