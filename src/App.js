import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Routes, Route, } from 'react-router-dom';
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

  return (
    <RealmAppProvider appId={APP_ID}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<SelectCons />} >
            <Route index element={<CharsOverview />} />
            <Route path=":userId" element={<CharsDetail />} />
        </Route>
        <Route path="weapons" element={<WeaponList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </RealmAppProvider>  
  );
}

export default App;
