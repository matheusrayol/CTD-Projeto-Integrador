import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccUser from '../components/AccUser'
import styles from './AccountUser.module.scss'

export default function AccountUser() {
  return (
    <div className={styles.appAccountUser}>
      <div className={styles.bodyAccountUser}>
        <Navbar />
        <AccUser />
        <Footer />
      </div>
    </div>
  )
}
