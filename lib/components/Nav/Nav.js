import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "btn-nav text-capitalize "
  }, /*#__PURE__*/React.createElement(NavLink, {
    className: "styledLink",
    to: `/${props.nav}`
  }, props.nav));
}

export default Nav;