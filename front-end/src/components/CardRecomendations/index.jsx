import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './CardRecomendations.module.scss'
import starRated from '../../assets/starRated.svg'

export default function CardsBanner(image) {
  return (
    <motion.div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          <img src={image.imageData.image} alt={image.imageData.title} />
        </div>
        <div className={styles.cardParagraph}>
          <div className={styles.cardParagraph__starRated}>
            <div>
              <p>Avaliação: {image.imageData.rated}</p>
            </div>
            <div>
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
            </div>
          </div>
          <p>{image.imageData.category}</p>
          <p>{image.imageData.title}</p>
          <p>{image.imageData.location}</p>
          <p>{image.imageData.description}</p>
          <Link key={image.id} to={`../product/${image.imageData.id}`}>
            <button>Confira</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
