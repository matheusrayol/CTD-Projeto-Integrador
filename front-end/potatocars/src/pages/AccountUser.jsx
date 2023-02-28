import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './AccountUser.module.scss'
import imgAvatar from '../assets/imgAvatar.png'
import useAuth from '../hooks/useAuth'

export default function AccountUser() {
  const { user } = useAuth()
  return (
    <div className={styles.appAccountUser}>
      <div className={styles.bodyAccountUser}>
        <Navbar />
        <main className={styles.main}>
          <p>LOCAL DESTINADO A PAGINA PADRAO DO USUARIO</p>
          <img src={imgAvatar} alt="imagem Avatar" />
          <p>Email:{user.email}</p>
          <p>Password:{user.password}</p>
          <p>Name:{user.name}</p>
        </main>
        <Footer />
      </div>
    </div>
  )
}
