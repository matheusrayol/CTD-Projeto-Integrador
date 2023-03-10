import React from 'react'
import styles from './AccUser.module.scss'
import imgAvatar from '../../assets/avatar.jpg'
import { useAuth } from '../../hooks/useAuth'

export default function AccUser() {
  const { auth } = useAuth()
  return (
    <main className={styles.main}>
      <p>LOCAL DESTINADO A PAGINA PADRAO DO USUARIO</p>
      <img src={imgAvatar} alt="imagem Avatar" />
      <p>Email: {auth.email}</p>
      <p>Password: {auth.password}</p>
      <p>Name: {auth.name}</p>
    </main>
  )
}
