import { React, useState, useEffect, useRef } from 'react'
import styles from './Recomendations.module.scss'
import { motion } from 'framer-motion'
import CardsRecomendations from '../CardRecomendations'
import id1 from '../../assets/img1.jpg'
import id3 from '../../assets/img3.jpg'
import id5 from '../../assets/img5.jpg'
import id7 from '../../assets/img7.jpg'

export default function Recomendations() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesRecomendations] = useState([
    {
      id: 1,
      image: id1,
      category: 'Modelo Luxuoso',
      title: 'Volvo XC40 Recharge',
      location: 'Fortaleza',
      description: 'R$ 299,00 / dia',
      rated: '4.9'
    },
    {
      id: 3,
      image: id3,
      category: 'Modelo Esportivo',
      title: 'Audi RS e-tron GT',
      location: 'Rio de Janeiro',
      description: 'R$ 139,00 / dia',
      rated: '4.8'
    },
    {
      id: 5,
      image: id5,
      category: 'Modelo Conforto',
      title: 'JAC iEV40',
      location: 'Belo Horizonte',
      description: 'R$ 79,00 / dia',
      rated: '4.5'
    },
    {
      id: 7,
      image: id7,
      category: 'Modelo Compacto',
      title: 'Fiat 500e',
      location: 'Salvador',
      description: 'R$ 49,00 / dia',
      rated: '4.7'
    }
  ])

  return (
    <section>
      <h2 className={styles.h2Home}>Recomendações para você</h2>
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
            {allImagesRecomendations.map(image => {
              return <CardsRecomendations key={image.id} imageData={image} />
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
