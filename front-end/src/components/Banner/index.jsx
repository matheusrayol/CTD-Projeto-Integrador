import { React, useState, useEffect, useRef } from 'react'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'
import banner from '../../json/productsInformation.json'
import CardsBanner from '../CardBanner'

export default function Banner() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesBanner] = useState(banner)

  return (
    <section>
      <h2 className={styles.h2Home}>Procure as melhores opções e modelos</h2>
      <div className={styles.sectionCard}>
        <motion.div
          ref={carrossel}
          className={styles.carrossel}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {allImagesBanner.map(image => {
              return <CardsBanner key={image.id} imageData={image} />
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
