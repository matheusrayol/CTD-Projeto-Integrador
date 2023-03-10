import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({ categories, filtraFotos }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por categoria</p>
      <ul className={styles.tags__lista}>
        {categories.map(category => {
          return (
            <li key={category} onClick={() => filtraFotos(category)}>
              {category}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
