import React from 'react'
import MainHome from '../components/MainHome'
import Banner from '../components/Banner'
import Recomendations from '../components/Recomendations'
import styles from './Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="app-home">
      <div className={styles.bodyHome}>
        <Navbar />
        <MainHome />
        <Banner />
        <Recomendations />
        <Footer />
      </div>
    </div>
  )
}
