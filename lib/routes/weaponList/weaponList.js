import React, { useState, useEffect } from 'react';
import { useRealmApp } from '../../services/realmApp';
import Table from 'react-bootstrap/Table';

function WeaponList() {
  const app = useRealmApp();
  const [loading, setLoading] = useState(true);
  const [DATA, setData] = useState([]);

  const groupBy = (x, f) => x.reduce((a, b) => {
    var _f;

    return (a[_f = f(b)] || (a[_f] = [])).push(b), a;
  }, {}); // eslint-disable-next-line


  useEffect(async () => {
    const fetchData = await app.getAllWeapons();
    setData(fetchData);
    setLoading(false);
  } // eslint-disable-next-line
  , []);
  console.log(groupBy(DATA, g => g.type));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-danger"
  }, /*#__PURE__*/React.createElement("th", null, "Weapon"), /*#__PURE__*/React.createElement("th", null, "Ability"), /*#__PURE__*/React.createElement("th", null, "ATK"), /*#__PURE__*/React.createElement("th", null, "CRIT"), /*#__PURE__*/React.createElement("th", null, "CRIT"))), /*#__PURE__*/React.createElement("tbody", {
    className: "text-white"
  }, DATA.map(data => /*#__PURE__*/React.createElement("tr", {
    key: data.id
  }, /*#__PURE__*/React.createElement("td", null, data.name), /*#__PURE__*/React.createElement("td", null, data.ability), /*#__PURE__*/React.createElement("td", null, data.atk), /*#__PURE__*/React.createElement("td", null, data.crit))))));
}

export default WeaponList;