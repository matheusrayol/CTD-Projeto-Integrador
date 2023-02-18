import React from 'react'
import MainHome from '../components/MainHome'
import BannerCarrossel from '../components/BannerCarrossel'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className="app-home">
      <div className={styles.bodyHome}>
        <MainHome />
        <BannerCarrossel />
        <BannerCarrossel />
      </div>
    </div>
  )
}
