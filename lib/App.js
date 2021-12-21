import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { RealmAppProvider } from './services/realmApp';
import Home from './routes/home/Home';
import SelectCons from './routes/selectCons/SelectCons';
import CharsDetail from './routes/CharsDetail/CharsDetail';
import Layout from './components/layout/Layout';
import NotFound from './routes/error/NotFound';
import CharsOverview from './routes/charsOverview/charsOverview';
import WeaponList from './routes/weaponList/weaponList';
export const APP_ID = "wikiapp-lmtos";

function App() {
  //const dataSet = returnData();
  //const fetchData = await user.functions.getAllConstructs();;
  return /*#__PURE__*/React.createElement(RealmAppProvider, {
    appId: APP_ID
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "home",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "detail",
    element: /*#__PURE__*/React.createElement(SelectCons, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(CharsOverview, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ":userId",
    element: /*#__PURE__*/React.createElement(CharsDetail, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: "weapons",
    element: /*#__PURE__*/React.createElement(WeaponList, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NotFound, null)
  }))));
}

export default App;