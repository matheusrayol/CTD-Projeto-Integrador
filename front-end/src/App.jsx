import React from 'react'
import { AuthProvider } from './hooks/useAuth'
import { RouterProvider } from 'react-router-dom'
import TravelGreenRoutes from './routes/default'

const App = () => {
  
  return (
    <AuthProvider>
      <RouterProvider router={TravelGreenRoutes} />
    </AuthProvider>
  )

}

export default App