import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'

export default function Cards(image) {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <img src={image.imageData.image} alt={image.imageData.title} />
        <Link key={image.id} to={`../product/${image.imageData.id}`}>
          <div className={styles.cardBody__catRated}>
            <p>{image.imageData.category}</p>
            <p>{image.imageData.rated}</p>
          </div>
          <div className={styles.cardBody__ps}>
            <p>{image.imageData.title}</p>
            <p>Local: {image.imageData.location}</p>
            <p>{image.imageData.description}</p>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
