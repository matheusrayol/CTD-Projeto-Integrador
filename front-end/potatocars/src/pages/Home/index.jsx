import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import BannerCarrossel from '../../components/BannerCarrossel'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <BannerCarrossel />
      <div className={styles.space}></div>
      <Footer />
    </>
  )
}
