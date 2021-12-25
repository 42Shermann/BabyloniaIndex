import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getRank, getType, getFaction, getGift } from '../api/mockdata/DATA';
import TabComp from '../Tab/Tab';
import Stats from '../Stats/Stats';
import './ConstrDetail.css';

function ConstrDetail({
  data
}) {
  const tag = {
    rank: getRank(data.construct.rank),
    type: getType(data.construct.type),
    faction: getFaction(data.construct.faction),
    gift: getGift(data.construct.gift)
  }; //Render element type

  const eleTypes = data.construct.element.map(data => /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid mx-auto d-block",
    src: data.icon,
    alt: data.eleType
  }), /*#__PURE__*/React.createElement("p", null, data.eleType)));
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-color"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h1 text-white text-center text-bold"
  }, data.construct.name, " : ", data.construct.Model)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "overview",
    id: "uncontrolled-tab-example",
    className: "main-tab"
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "overview",
    title: "Overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white my-3 "
  }, /*#__PURE__*/React.createElement("figure", {
    className: "text-start "
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "blockquote my-4 lead text-black"
  }, /*#__PURE__*/React.createElement("em", null, data.construct.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-4 col-xm-12"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid",
    src: data.construct.img,
    alt: data.construct.Model
  }), /*#__PURE__*/React.createElement("div", {
    className: "spec-bg text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "img-type",
    src: data.construct.chibiImg.awaken,
    alt: "awaken"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "img-type",
    src: data.construct.chibiImg.dorm,
    alt: "dorm"
  })))), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-danger text-center"
  }, /*#__PURE__*/React.createElement("h4", null, "Speciality")), /*#__PURE__*/React.createElement("div", {
    className: "px-2"
  }, /*#__PURE__*/React.createElement("p", null, data.construct.Speciality[0]), /*#__PURE__*/React.createElement("p", null, data.construct.Speciality[1]))), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-danger text-center"
  }, /*#__PURE__*/React.createElement("h4", null, "Element")), /*#__PURE__*/React.createElement("div", {
    className: "row text-center"
  }, eleTypes)))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-8 col-xm-12"
  }, /*#__PURE__*/React.createElement(Stats, {
    info: data.construct.info,
    statDetails: data.construct.stats,
    tag: tag
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-white mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-danger text-center "
  }, /*#__PURE__*/React.createElement("h2", null, "Skills & Passives")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TabComp, {
    props: data.construct.skillOrb,
    type: "skill"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TabComp, {
    props: data.construct.skillPassive,
    type: "skill"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TabComp, {
    props: data.construct.Rank,
    type: "skill"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-white mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-danger text-center "
  }, /*#__PURE__*/React.createElement("h2", null, "Signature Weapon")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-2"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid mx-auto d-block",
    src: data.consWep.img,
    alt: "weapon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white"
  }, data.consWep.name)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("p", null, data.consWep.ability))))))), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "gallery",
    title: "Gallery"
  }, "...."), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "contact",
    title: "Info"
  }, "...."))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 border border-top border-white"
  })));
}

export default ConstrDetail;