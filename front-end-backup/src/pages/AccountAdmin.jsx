import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardAdmin from '../components/CardAdmin'
import styles from './AccountAdmin.module.scss'

export default function AccountAdmin() {
  return (
    <div className={styles.appAccountAdmin}>
      <div className={styles.bodyAccountAdmin}>
        <Navbar />
        <CardAdmin />
        <Footer />
      </div>
    </div>
  )
}
