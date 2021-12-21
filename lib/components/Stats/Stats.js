import React from 'react';
import './Stats.css';

function Stats({
  info,
  statDetails,
  tag
}) {
  const {
    serviceTime,
    psychologicalAge,
    activationDate,
    height,
    weight,
    vitalFluidType
  } = info;
  const {
    stats,
    chart
  } = statDetails;
  const {
    rank,
    type,
    faction,
    gift
  } = tag;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid text-white stats-bg"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-center align-middle my-2"
  }, "Info and Stats")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 border border-top border-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row my-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Service Time"), /*#__PURE__*/React.createElement("p", null, serviceTime)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Psychological Age"), /*#__PURE__*/React.createElement("p", null, psychologicalAge)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Activation Date"), /*#__PURE__*/React.createElement("p", null, activationDate)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Height"), /*#__PURE__*/React.createElement("p", null, height)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Weight"), /*#__PURE__*/React.createElement("p", null, weight)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("strong", null, "Vital Fluid Type"), /*#__PURE__*/React.createElement("p", null, vitalFluidType))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 border-start border-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid",
    src: chart,
    alt: "Chart"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col "
  }, /*#__PURE__*/React.createElement("strong", null, "HP"), /*#__PURE__*/React.createElement("p", null, stats.HP)), /*#__PURE__*/React.createElement("div", {
    className: "col "
  }, /*#__PURE__*/React.createElement("strong", null, "DEF"), /*#__PURE__*/React.createElement("p", null, stats.DEF)), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "ATK"), /*#__PURE__*/React.createElement("p", null, stats.ATK)), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "CRIT"), /*#__PURE__*/React.createElement("p", null, stats.CRIT))))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-4 border border-top border-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "px-2 row text-center type-container "
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, "Class"), /*#__PURE__*/React.createElement("img", {
    className: "types-icon mx-auto d-block",
    src: type.img,
    alt: type.type
  }), /*#__PURE__*/React.createElement("p", null, type.type, " ")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, "Rank"), /*#__PURE__*/React.createElement("img", {
    className: "types-icon mx-auto d-block",
    src: rank.img,
    alt: rank.rank
  }), /*#__PURE__*/React.createElement("p", null, rank.rank, " Rank")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, "Faction"), /*#__PURE__*/React.createElement("img", {
    className: "types-icon mx-auto d-block inverted-img",
    src: faction.img,
    alt: faction.name
  }), /*#__PURE__*/React.createElement("p", null, faction.name)), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, "Favorite Gift"), /*#__PURE__*/React.createElement("img", {
    className: "types-icon mx-auto d-block",
    src: gift.img,
    alt: gift.type
  }), /*#__PURE__*/React.createElement("p", null, gift.type))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 border border-top border-white"
  }))));
}

export default Stats;