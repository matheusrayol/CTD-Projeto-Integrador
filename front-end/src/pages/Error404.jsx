import React from 'react'
import styles from './Error404.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Error404Page from '../components/Error404Page'

export default function Error404() {
  return (
    <div className="app-error404">
      <div className={styles.bodyError404}>
        <Navbar />
        <Error404Page />
        <Footer />
      </div>
    </div>
  )
}
