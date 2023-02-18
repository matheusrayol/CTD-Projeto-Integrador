import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './App.module.scss'

function App() {
  return (
    <div>
      <div className={styles.body}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
