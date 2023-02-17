import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logoHeader from '../../assets/logoHeader.svg'
import search from '../../assets/search.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <img src={logoHeader} alt="Logo escrito DigitalBooking" />
      </Link>

      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de lupa" />
      </div>
      <div className={styles.acesso}>
        <Link to="/login" className={styles.acesso__link}>
          Login
        </Link>
      </div>
    </header>
  )
}
