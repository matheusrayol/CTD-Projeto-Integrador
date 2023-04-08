import React from 'react'
import styles from './CardBanner.module.scss'

export const CardCategory = category => {
  console.log(category)
  return (
    <section
      key={category.imageData.id}
      onClick={() => category.onSelectCategory(`${category.imageData.id}`)}
    >
      <div className={styles.sectionCard}>
        <div className={styles.carrossel}>
          <div className={styles.inner}>
            <div className={styles.item}>
              <div className={styles.cardBody}>
                <div className={styles.cardImg}>
                  <img
                    src={category.imageData.urlImage}
                    alt={category.imageData.qualification}
                  />
                </div>
                {/* <p className={styles.pFirstChild}>
                  {category.imageData.descriptions}
                </p> */}
                <p>{category.imageData.qualification}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
