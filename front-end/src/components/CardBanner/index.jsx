import React from 'react'
import { motion } from 'framer-motion'
import styles from './CardBanner.module.scss'
import { Link } from 'react-router-dom'

export default function CardsBanner(image) {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <img src={image.imageData.image} alt={image.imageData.title} />
        <p>{image.imageData.category}</p>
        <p>{image.imageData.title}</p>
        <Link to={`product/${image.imageData.id}`}>
          <button style={{ display: 'none' }}>Confira</button>
        </Link>
      </div>
    </motion.div>
  )
}
