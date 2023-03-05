import { React, useState, useEffect, useRef } from 'react'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'
import CardsBanner from '../CardBanner'
import id2 from '../../assets/img2.jpg'
import id4 from '../../assets/img4.jpg'
import id6 from '../../assets/img6.jpg'
import id8 from '../../assets/img8.jpg'

export default function Banner() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesBanner] = useState([
    {
      id: 2,
      image: id2,
      category: 'Modelo Luxuoso',
      title: 'Mercedes S EQS',
      location: 'Rio de Janeiro',
      description: 'R$ 249,00 / dia',
      rated: '4.9'
    },
    {
      id: 4,
      image: id4,
      category: 'Modelo Esportivo',
      title: 'Byd Han',
      location: 'Rio de Janeiro',
      description: 'R$ 119,00 / dia',
      rated: '4.4'
    },
    {
      id: 6,
      image: id6,
      category: 'Modelo Conforto',
      title: 'Chevrolet Bolt',
      location: 'Salvador',
      description: 'R$ 149,00 / dia',
      rated: '4.9'
    },
    {
      id: 8,
      image: id8,
      category: 'Modelo Compacto',
      title: 'Caoa Chery',
      location: 'São Paulo',
      description: 'R$ 99,00 / dia',
      rated: '4.9'
    }
  ])

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
