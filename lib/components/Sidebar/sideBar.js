import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavProp from '../Nav/Nav';

function SideBar(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://gdurl.com/HL5O",
    class: "mx-auto d-block img-fluid",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-white text-center"
  }, "Main"), /*#__PURE__*/React.createElement(Nav, {
    justify: true
  }, /*#__PURE__*/React.createElement(Nav.Item, null, /*#__PURE__*/React.createElement(NavProp, {
    nav: "home"
  })), /*#__PURE__*/React.createElement(Nav.Item, null, /*#__PURE__*/React.createElement(NavProp, {
    nav: "detail"
  })), /*#__PURE__*/React.createElement(Nav.Item, null, /*#__PURE__*/React.createElement(NavProp, {
    nav: "weapons"
  }))));
}

export default SideBar;