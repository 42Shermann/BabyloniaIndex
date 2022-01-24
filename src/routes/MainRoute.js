import React, { Routes, Route } from 'react-router-dom'
import { Layout } from '../components'
import { Home, SelectCons, CharsDetail, NotFound, CharsOverview, WeaponList, MemoriesPage, SummonSim } from '.'

function MainRoute () {
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
        <Route path="memories" element={<MemoriesPage />} />
        <Route path="sim" element={<SummonSim />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoute
