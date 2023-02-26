import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error404 from '../pages/Error404'
import styles from './index.module.scss'

const Private = ({ Item }) => {
  const { signed } = useAuth()

  return signed > 0 ? <Item /> : <Home />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default RoutesApp
