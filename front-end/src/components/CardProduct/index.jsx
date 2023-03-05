import React from 'react'
import styles from './CardProduct.module.scss'

export default function CardProduct(image) {
  return image.imageData.id ? (
    <div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <img src={image.imageData.image} alt={image.imageData.title} />
        <p>{image.imageData.category}</p>
        <p>{image.imageData.title}</p>
      </div>
    </div>
  ) : (
    'batatou'
  )
}
