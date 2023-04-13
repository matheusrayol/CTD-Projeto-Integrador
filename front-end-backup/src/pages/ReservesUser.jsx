import React from 'react'
import ReserveUser from '../components/ReserveUser'
import styles from './Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ReservesUser() {
  return (
    <div className={styles.appHome}>
      <div className={styles.bodyHome}>
        <Navbar />
        <ReserveUser />
        <Footer />
      </div>
    </div>
  )
}
