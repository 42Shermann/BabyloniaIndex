import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useRealmApp } from '../../services/realmApp';
import Spinner from 'react-bootstrap/Spinner';
import './SelectCons.css';
import Cards from '../../components/Cards/Cards';

function SelectCons() {
  const app = useRealmApp();
  const [loading, setLoading] = useState(true);
  const [DATA, setData] = useState([]); // eslint-disable-next-line

  useEffect(async () => {
    const fetchData = await app.getConstrData();
    setData(fetchData);
    setLoading(false);
  } // eslint-disable-next-line
  , []);
  const rankS = DATA.filter(data => data.rank === "S");
  const rankA = DATA.filter(data => data.rank === "A");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Outlet, null)), !loading ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-white"
  }, "A Rank"), /*#__PURE__*/React.createElement(Cards, {
    data: rankA
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-white"
  }, "S Rank"), /*#__PURE__*/React.createElement(Cards, {
    data: rankS
  }))) : /*#__PURE__*/React.createElement("diV", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    variant: "light"
  })));
}

export default SelectCons;