import React from 'react'
import styles from './Product.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgPageCard from '../assets/imgPageCard.png'
import imgPageCard2 from '../assets/imgPageCard2.png'

export default function Product() {
  return (
    <div className={styles.appProduct}>
      <div className={styles.bodyProduct}>
        <Navbar />
        <main>
          <img src={imgPageCard} alt="img 1" />
          <img src={imgPageCard2} alt="img 2" />
        </main>
        <Footer />
      </div>
    </div>
  )
}
