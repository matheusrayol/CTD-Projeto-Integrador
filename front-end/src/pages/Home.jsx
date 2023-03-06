import React from 'react'
import MainHome from '../components/MainHome'
import Banner from '../components/Banner'
import Recomendations from '../components/Recomendations'
import Galeria from '../components/Galeria'
import styles from './Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.appHome}>
      <div className={styles.bodyHome}>
        <Navbar />
        <MainHome />
        <Galeria />
        <Banner />
        <Recomendations />

        <Footer />
      </div>
    </div>
  )
}
