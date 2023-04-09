import React, { useState, useEffect } from 'react'
import styles from './AccUser.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function AccUser() {
  const { id, name, surname, email } = useAuth()
  const [editMode, setEditMode] = useState(false)
  const [imgUrl, setImgUrl] = useState(
    localStorage.getItem('userImgUrl') || '../../assets/imgAvatar.png'
  )
  const [newImgUrl, setNewImgUrl] = useState('')

  useEffect(() => {
    localStorage.setItem('userImgUrl', imgUrl)
  }, [imgUrl])

  const handleNewImgUrlChange = e => {
    setNewImgUrl(e.target.value)
  }

  const handleConfirmImgUrl = () => {
    setImgUrl(newImgUrl)
    setEditMode(false)
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  return (
    <main className={styles.main}>
      <p>LOCAL DESTINADO A PAGINA PADRAO DO USUARIO</p>
      <img src={imgUrl} alt="imagem Avatar" />
      {editMode ? (
        <div className={styles.main__imagePerfil}>
          <label htmlFor="newImgUrl">Nova URL da imagem:</label>
          <input
            type="text"
            id="newImgUrl"
            value={newImgUrl}
            onChange={handleNewImgUrlChange}
          />
          <button onClick={handleConfirmImgUrl}>Confirmar</button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Editar</button>
      )}
      <p>Nome: {`${name} ${surname}`}</p>
      <p>Email: {email}</p>
      <Link to={`reservations/${id}`} style={{ display: 'flex', gap: '2rem' }}>
        <button className={styles.main__buttonReserve}>Ver Reservas</button>
      </Link>
    </main>
  )
}
