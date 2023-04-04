import React from 'react'
import RoutesApp from './routes/RoutesApp'
import { AuthProvider } from './hooks/useAuth'

const App = () => {
  
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )

}

export default App