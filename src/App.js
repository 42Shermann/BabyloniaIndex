import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import React from 'react'
import MainRoute from './routes/MainRoute'
import { RealmAppProvider } from './context/contextProvider'

export const APP_ID = 'wikiapp-lmtos'

function App () {
  return (
    <RealmAppProvider appId={APP_ID}>
      <MainRoute />
    </RealmAppProvider>
  )
}

export default App
