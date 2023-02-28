import React from 'react'
import styles from './Login.module.scss'
import LoginValidation from '../components/LoginValidation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className={styles.appLogin}>
      <div className={styles.bodyLogin}>
        <Navbar />
        <LoginValidation />
        <Footer />
      </div>
    </div>
  )
}
