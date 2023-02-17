import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardBanner.module.scss'

export default function CardsBanner(image) {
  return (
    <motion.div className={styles.item} key={image}>
      <div className={styles.cardBody}>
        <img src={image.imageData.imagem} alt="texto alt" />
        <p>{image.imageData.title}</p>
        <p>{image.imageData.price}</p>
      </div>
    </motion.div>
  )
}
