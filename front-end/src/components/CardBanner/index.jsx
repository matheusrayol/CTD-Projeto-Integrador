import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardBanner.module.scss'

export default function CardsBanner(image) {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <img src={image.imageData.image} alt="imagens do json do Banner" />
        <p>{image.imageData.category}</p>
        <p>{image.imageData.title}</p>
      </div>
    </motion.div>
  )
}
