import React from 'react'
import RoutesApp from './routes'
import { AuthProvider } from './hooks/useAuth'

const App = () => (
  <AuthProvider>
    <RoutesApp />
  </AuthProvider>
)

export default App
