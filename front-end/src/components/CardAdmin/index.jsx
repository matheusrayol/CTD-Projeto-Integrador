import React from 'react'
import styles from './CardAdmin.module.scss'
import imgAvatar from '../../assets/avatar.jpg'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function CardAdmin() {
  const { name, surname, email } = useAuth()
  return (
    <main className={styles.main}>
      <p>LOCAL DESTINADO A PAGINA PADRAO DO ADMIN</p>
      <img src={imgAvatar} alt="imagem Avatar" />
      <p>Nome: {`${name} ${surname}`}</p>
      <p>Email: {email}</p>
      <Link
        to={`/accountadmin/createProduct`}
        style={{ display: 'flex', gap: '2rem' }}
      >
        <button>Criar produto</button>
        <button>Gerenciar Permissoes</button>
        <button>Configurações</button>
      </Link>
    </main>
  )
}
