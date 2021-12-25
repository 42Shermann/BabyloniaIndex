import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CharsOverview() {
  const TabOverview = () => {
    return /*#__PURE__*/React.createElement(Tabs, {
      defaultActiveKey: "home",
      id: "uncontrolled-tab-example",
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(Tab, {
      eventKey: "home",
      title: "All Character"
    }), /*#__PURE__*/React.createElement(Tab, {
      eventKey: "overview",
      title: "Overview"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-white bg-danger text-center"
    }, "Construct Overview"), /*#__PURE__*/React.createElement("div", {
      className: "my-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-white"
    }, "About Constructs"), /*#__PURE__*/React.createElement("p", null, "Constructs are designed for the majority of the game's content and possess default className ratings of B-Rank, A-Rank, and S-Rank."), /*#__PURE__*/React.createElement("p", null, "Constructs have three predesignated classes: Attacker (dealing damage), Tank (weakening enemies), and Support (healing and buffing allies). They cannot be deployed in the same team as Compositers.")), /*#__PURE__*/React.createElement("div", {
      className: "my-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-white"
    }, "Obtaining Constructs"), /*#__PURE__*/React.createElement("p", null, "With the exception of B-Rank characters, Constructs are predominantly acquired through R&D."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "B-Rank Constructs are given automatically via story progression."), /*#__PURE__*/React.createElement("li", null, "A-Rank Constructs are guaranteed every 10 pulls."), /*#__PURE__*/React.createElement("li", null, "S-Rank Constructs are guaranteed at a minimum of 60 pulls."))), /*#__PURE__*/React.createElement("div", {
      className: "my-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-white"
    }, "Duplicates"), /*#__PURE__*/React.createElement("p", null, "In the case that you pull a duplicate of a character you already own, the duplicate will be converted into Inver-Shards. The amount of Shards you obtain depends on the base rarity of the character you pulled, regardless of how much you have increased their rank previously."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "B-Rank Construct duplicates give 6 Inver-Shards"), /*#__PURE__*/React.createElement("li", null, "A-Rank Construct duplicates gives 18 Inver-Shards."), /*#__PURE__*/React.createElement("li", null, "S-Rank Construct duplicates give 30 Inver-Shards"))), /*#__PURE__*/React.createElement("div", {
      className: "my-4"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-white"
    }, "Promotion"), /*#__PURE__*/React.createElement("p", null, "Every five levels, a Construct can be promoted by spending Cogs, greatly improving overall stats. The total cost of fully promoting a character is a hefty 542,500 Cogs. These promotion ranks are named the following: Private, Sergeant, Elite, Task Force, Ace, and Hero.")), /*#__PURE__*/React.createElement("div", {
      className: "mb-4 border border-top border-white"
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-color"
  }, /*#__PURE__*/React.createElement("h2", null, "Characters List"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TabOverview, null)));
}

export default CharsOverview;