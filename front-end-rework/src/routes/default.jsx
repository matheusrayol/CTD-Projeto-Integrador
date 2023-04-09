import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../pages/Product'
import ProductBooking from '../pages/ProductBooking'
import NotFound from '../pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const TravelGreenRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/product/:id/bookVehicle', element: <ProductBooking /> },
  { path: '*', element: <NotFound />}
])

export default TravelGreenRoutes