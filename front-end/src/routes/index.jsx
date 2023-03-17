import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AccountUser from '../pages/AccountUser'
import Product from '../pages/Product'
import Error404 from '../pages/Error404'
import styles from './index.module.scss'

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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default RoutesApp
