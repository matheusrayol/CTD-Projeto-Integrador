import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardReserve.module.scss'

export default function CardReserve(image) {
  return (
    <div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div>
          <h2>Detalhes da reserva</h2>
        </div>
        <div className={styles.cardImg}>
          <img src={image.imageData.image} alt={image.imageData.title} />
        </div>
        <div className={styles.cardBody__info}>
          <p>{image.imageData.category}</p>
          <p>{image.imageData.title}</p>
          <p>
            {image.imageData.adress}, {image.imageData.location}
          </p>
        </div>
        <div className={styles.cardBody__check}>
          <div className={styles.cardBody__check__checkIn}>
            <p>Check-In</p>
            <p>__/__/____</p>
          </div>
          <div className={styles.cardBody__check__checkOut}>
            <p>Check-Out</p>
            <p>__/__/____</p>
          </div>
        </div>
        <div className={styles.cardBody__confirmButton}>
          <Link
            key={image.id}
            to={`../product/${image.imageData.id}/reserve/false`}
          >
            <button>Confirmar Reserva</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
