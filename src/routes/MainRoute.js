import React, { Routes, Route } from 'react-router-dom'
import { Layout } from '../components'
import { Home, SelectCons, CharsDetail, NotFound, CharsOverview, WeaponList, MemoriesPage, MemoriesList, MemoryDetail, SummonSim } from '.'

function MainRoute () {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="characters" element={<SelectCons />} >
          <Route index element={<CharsOverview />} />
          <Route path=":userId" element={<CharsDetail />} />
        </Route>
        <Route path="weapons" element={<WeaponList />} />
        <Route path="memory" element={<MemoriesPage />} >
          <Route index element={<MemoriesList />} />
          <Route path=":memName" element={<MemoryDetail />} />
        </Route>
        <Route path="sim" element={<SummonSim />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoute
