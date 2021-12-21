import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/sideBar';
import Search from '../Search/Search';

function Layout() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "app-bg text-white"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-dark bg-secondary text-white mb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mx-3"
  }, "Babylonia Index"), /*#__PURE__*/React.createElement(Search, null)), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row "
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-2"
  }, /*#__PURE__*/React.createElement(SideBar, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-10"
  }, /*#__PURE__*/React.createElement(Outlet, null))))), /*#__PURE__*/React.createElement("footer", {
    className: "footer-styles"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2018 Gandalf")));
}

export default Layout;