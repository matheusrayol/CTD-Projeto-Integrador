import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../pages/Product'
import { createBrowserRouter } from 'react-router-dom'

const TravelGreenRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:id', element: <Product /> },
])

export default TravelGreenRoutes