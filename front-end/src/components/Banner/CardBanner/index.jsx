import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardBanner.module.scss'
import { Link } from 'react-router-dom'

export const CardBanner = category => {
  return (
    <motion.div className={styles.item} key={category.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          <img
            src={category.imageData.urlImage}
            alt={category.imageData.qualification}
          />
        </div>
        <Link key={category.id}>
          <p>{category.imageData.descriptions}</p>
          <p>{category.imageData.qualification}</p>
        </Link>
      </div>
    </motion.div>
  )
}
