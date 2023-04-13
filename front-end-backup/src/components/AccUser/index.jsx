import React from 'react'
import styles from './AccUser.module.scss'
import imgAvatar from '../../assets/avatar.jpg'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function AccUser() {
  const { id, name, surname, email } = useAuth()
  return (
    <main className={styles.main}>
      <p>LOCAL DESTINADO A PAGINA PADRAO DO USUARIO</p>
      <img src={imgAvatar} alt="imagem Avatar" />
      <p>Nome: {`${name} ${surname}`}</p>
      <p>Email: {email}</p>
      <Link to={`reservations/${id}`} style={{ display: 'flex', gap: '2rem' }}>
        <button>Ver Reservas</button>
        <button>Gerenciar conta</button>
      </Link>
    </main>
  )
}
