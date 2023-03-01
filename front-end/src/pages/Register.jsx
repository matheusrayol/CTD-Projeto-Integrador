import React from 'react'
import RegisterValidation from '../components/RegisterValidation'
import styles from './Register.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Register() {
  return (
    <div className={styles.appRegister}>
      <div className={styles.bodyRegister}>
        <Navbar />
        <RegisterValidation />
        <Footer />
      </div>
    </div>
  )
}
