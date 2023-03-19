import React from 'react'
import RoutesApp from './routes'
import { AuthProvider } from './hooks/useAuth'
// import { ProductsContext } from './context/ProductsContext'
// import { CategoryContext } from './context/CategoryContext'
// import { CityContext } from './context/CityContext'

const App = () => (
  // <ProductsContext>
  //   <CategoryContext>
  //     <CityContext>
  <AuthProvider>
    <RoutesApp />
  </AuthProvider>
  //     </CityContext>
  //   </CategoryContext>
  // </ProductsContext>
)

export default App
