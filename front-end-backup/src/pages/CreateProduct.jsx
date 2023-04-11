import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardCreateProduct from '../components/CardCreateProduct'
import styles from './CreateProduct.module.scss'

export default function CreateProduct() {
  return (
    <div className={styles.appCreateProduct}>
      <div className={styles.bodyCreateProduct}>
        <Navbar />
        <CardCreateProduct />
        <Footer />
      </div>
    </div>
  )
}
