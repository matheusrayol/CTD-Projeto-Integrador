import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({ locations, filterCity }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por cidade</p>
      <ul className={styles.tags__lista}>
        {locations.map(location => {
          return (
            <li key={location} onClick={() => filterCity(location)}>
              {location}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
