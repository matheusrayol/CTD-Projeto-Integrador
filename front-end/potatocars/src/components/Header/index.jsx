import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logoHeader from '../../assets/logoHeader.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoHeader} alt="Logo escrito DigitalBooking" />
      <div className={styles.links}>
        <Link to="/planos" className={styles.acesso__link}>
          Planos
        </Link>
        <Link to="/carros" className={styles.acesso__link}>
          Carros
        </Link>
      </div>
      <div className={styles.acesso}>
        <Link to="/cadastro" className={styles.acesso__link}>
          Criar Conta
        </Link>
        <Link to="/login" className={styles.acesso__link}>
          Iniciar Sessão
        </Link>
      </div>
    </header>
  )
}
