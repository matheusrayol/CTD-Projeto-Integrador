import { React, useState, useEffect, useRef } from 'react'
import styles from './BannerCarrossel.module.scss'
import { motion } from 'framer-motion'
import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img4.jpg'
import img6 from '../../assets/img6.jpg'
import img8 from '../../assets/img8.jpg'
import CardsBanner from '../CardBanner'

export default function BannerCarrossel() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesBanner] = useState([
    {
      id: 2,
      image: img2,
      category: 'Lux Model',
      title: 'Mercedes S EQS',
      location: 'São Paulo',
      description: 'R$ 249,00 / dia'
    },
    {
      id: 4,
      image: img4,
      category: 'Sport Model',
      title: 'Byd Han',
      location: 'Rio de Janeiro',
      description: 'R$ 379,00 / dia'
    },
    {
      id: 6,
      image: img6,
      category: 'Economy Model',
      title: 'Chevrolet Bolt',
      location: 'Campos do Jordão',
      description: 'R$ 149,00 / dia'
    },
    {
      id: 8,
      image: img8,
      category: 'Confort Model',
      title: 'Caoa Chery',
      location: 'Matão',
      description: 'R$ 99,00 / dia'
    }
  ])

  return (
    <section>
      <h2 className={styles.h2Home}>Find best models and options for you</h2>
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
