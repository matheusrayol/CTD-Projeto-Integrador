import React from 'react'
import cardsInfo from './cardsInfo.json'
import styles from './CardCategories.module.scss'

export default function CardCategories({ categories, filtrarCards, setCards }) {
  return (
    <div className={styles.categories}>
      <p>Filtre por categories:</p>
      <ul className={styles.categories__list}>
        {categories.map(card => {
          return (
            <li key={card} onClick={() => filtrarCards(card)}>
              {card}
            </li>
          )
        })}
        <li onClick={() => setCards(cardsInfo)}>Todas</li>
      </ul>
    </div>
  )
}
