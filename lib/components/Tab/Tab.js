import React from 'react';
import './Tab.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

function TabComp({
  props
}) {
  const skillList = props.map(data => /*#__PURE__*/React.createElement(Tab, {
    key: data.id,
    eventKey: data.id,
    title: data.cate,
    className: " my-2 tabContents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-2"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid mx-auto d-block",
    src: data.img,
    alt: data.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white"
  }, data.name)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("p", null, data.skillDesc))))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: 1,
    id: "uncontrolled-tab-example"
  }, skillList));
}

export default TabComp;