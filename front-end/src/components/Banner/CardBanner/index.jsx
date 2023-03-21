import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardBanner.module.scss'
import { Link } from 'react-router-dom'

export const CardBanner = image => {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          <img src={image.imageData.urlImage} alt={image.imageData.name} />
        </div>
        <Link key={image.id} to={`../product/${image.imageData.id}`}>
          <p>{image.imageData.name}</p>
          <p>{image.imageData.description}</p>
        </Link>
      </div>
    </motion.div>
  )
}
