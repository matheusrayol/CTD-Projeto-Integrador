import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../pages/Product'
import ProductBooking from '../pages/ProductBooking'
import BookingConfirmation from '../pages/BookingConfirmation'
import NotFound from '../pages/NotFound'
import User from '../pages/User'
import Admin from '../pages/Admin'
import { createBrowserRouter } from 'react-router-dom'

const TravelGreenRoutes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/product/:id/bookVehicle', element: <ProductBooking /> },
  { path: '/product/:id/bookingConfirmation', element: <BookingConfirmation />},
  { path: 'accountUser', element: <User /> },
  { path: 'accountAdmin', element: <Admin />},
  { path: '*', element: <NotFound />}
])

export default TravelGreenRoutes