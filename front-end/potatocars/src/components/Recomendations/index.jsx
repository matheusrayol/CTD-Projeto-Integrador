import { React, useState, useEffect, useRef } from 'react'
import styles from './Recomendations.module.scss'
import { motion } from 'framer-motion'
import img1 from '../../assets/img1.jpg'
import img3 from '../../assets/img3.jpg'
import img5 from '../../assets/img5.jpg'
import img7 from '../../assets/img7.jpg'

import CardsRecomendations from '../CardRecomendations'

export default function Recomendations() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesRecomendations] = useState([
    {
      id: 1,
      image: img1,
      category: 'Lux Model',
      title: 'Volvo XC Recharge',
      location: 'Campos do Jordão',
      description: 'R$ 299,00 / dia',
      rated: '4.9'
    },
    {
      id: 3,
      image: img3,
      category: 'Sport Model',
      title: 'Audi RS e-tron GT',
      location: 'Rio de Janeiro',
      description: 'R$ 139,00 / dia',
      rated: '4.8'
    },
    {
      id: 5,
      image: img5,
      category: 'Confort Model',
      title: 'Sandero v2 Eletric',
      location: 'Forteleza',
      description: 'R$ 79,00 / dia',
      rated: '4.5'
    },
    {
      id: 7,
      image: img7,
      category: 'Economy Model',
      title: 'Fiat 500e',
      location: 'Valadares do Oeste',
      description: 'R$ 49,00 / dia',
      rated: '4.4'
    }
  ])

  return (
    <section>
      <h2 className={styles.h2Home}>Recomendations for you</h2>
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
