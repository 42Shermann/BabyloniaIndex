import { Routes, Route, } from 'react-router-dom';
import Home from './home/Home';
import SelectCons from './selectCons/SelectCons';
import CharsDetail from './CharsDetail/CharsDetail';
import Layout from '../components/layout/Layout';
import NotFound from './error/NotFound';
import CharsOverview from './charsOverview/charsOverview';
import WeaponList from './weaponList/weaponList';

function IndexRoute() {

  return (
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
  );
}

export default IndexRoute;
