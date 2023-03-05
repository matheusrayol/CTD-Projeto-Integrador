import React, { useState } from 'react'
import styles from './Product.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardProduct from '../components/CardProduct'
import productsAll from '../json/productsAll'

export default function Product() {
  const [allImages] = useState(productsAll)

  return (
    <div className={styles.appProduct}>
      <div className={styles.bodyProduct}>
        <Navbar />
        <main>
          {allImages.map(image => {
            console.log(image)
            return <CardProduct key={image.id} imageData={image} />
          })}
        </main>
        <Footer />
      </div>
    </div>
  )
}
