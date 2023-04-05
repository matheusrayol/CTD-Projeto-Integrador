import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AccountUser from '../pages/AccountUser'
import AccountAdmin from '../pages/AccountAdmin'
import CreateProduct from '../pages/CreateProduct'
import Product from '../pages/Product'
import ProductCreate from '../pages/ProductCreate'
import ReservePage from '../pages/ReservePage'
import Error404 from '../pages/Error404'
import styles from './index.module.scss'
import ReserveCreate from '../pages/ReserveCreate'
import { useAuth } from '../hooks/useAuth'
import ReservesUser from '../pages/ReservesUser'

const RoutesApp = () => {
  const { name, surname } = useAuth()
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accountuser" element={<AccountUser />} />
          <Route
            path={`/accountuser/reservations/${name}${surname}`}
            element={<ReservesUser />}
          />
          <Route path="/accountadmin" element={<AccountAdmin />} />
          <Route
            path="/accountadmin/createProduct"
            element={<CreateProduct />}
          />
          <Route
            path="/accountadmin/createProduct/sucess"
            element={<ProductCreate />}
          />
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
