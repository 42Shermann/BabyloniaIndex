import React, { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import SelectCons from './selectCons/SelectCons'
import CharsDetail from './CharacterDetailPage/CharacterDetailPage'
import Layout from '../components/layout/Layout'
import NotFound from './error/NotFound'
import CharsOverview from './CharactersOverViewPage/CharacterOverviewPage'
import WeaponList from './weaponList/weaponList'
import SummonSim from './SummonSim/SummonSim'

function IndexRoute () {
  return (
    <Routes>
        <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="characters" element={<SelectCons />} >
          <Route index element={<CharsOverview />} />
          <Route path=":userId" element={<CharsDetail />} />
        </Route>
        <Route path="weapons" element={<WeaponList />} />
        <Route path="sim" element={<SummonSim />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default IndexRoute
