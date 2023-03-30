import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AccountUser from '../pages/AccountUser'
import Product from '../pages/Product'
import ReservePage from '../pages/ReservePage'
import Error404 from '../pages/Error404'
import styles from './index.module.scss'
import ReserveCreate from '../pages/ReserveCreate'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accountuser" element={<AccountUser />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/:id/reserve" element={<ReservePage />} />
          <Route
            path="/product/:id/reserve/create"
            element={<ReserveCreate />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default RoutesApp
