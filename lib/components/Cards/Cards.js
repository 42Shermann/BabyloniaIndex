import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Cards({
  data
}) {
  const display = data.map(data => /*#__PURE__*/React.createElement("div", {
    key: data.id,
    className: "car-container"
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/detail/${data.id}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: data.img,
    alt: data.Model,
    className: "thumb-post-img"
  })))));
  return /*#__PURE__*/React.createElement("div", {
    className: "card-grid"
  }, display);
}

export default Cards;