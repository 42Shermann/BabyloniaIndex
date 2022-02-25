import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainRoute from './routes/MainRoute'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRoute />
    </QueryClientProvider>
  )
}

export default App
