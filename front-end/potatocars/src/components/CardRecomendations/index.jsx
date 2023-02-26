import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardRecomendations.module.scss'

export default function CardsBanner(image) {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          <img src={image.imageData.imagem} alt="imagens do banco de fotos" />
        </div>
        <div className={styles.cardParagraph}>
          <p>Rated: {image.imageData.rated}</p>
          <p>{image.imageData.category}</p>
          <p>{image.imageData.title}</p>
          <p>{image.imageData.location}</p>
          <p>{image.imageData.description}</p>
          <button>View</button>
        </div>
      </div>
    </motion.div>
  )
}
