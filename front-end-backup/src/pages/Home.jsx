import React from 'react'
import { MainHome } from '../components/MainHome'
import styles from './Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.appHome}>
      <div className={styles.bodyHome}>
        <Navbar />
        <MainHome />
        <Footer />
      </div>
    </div>
  )
}
