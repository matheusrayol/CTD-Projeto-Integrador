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
      imagem: img1,
      category: 'Lux Model',
      title: 'Subaru Impreza WRX',
      location: 'São Jose do Rio Preto',
      description: 'R$ 250,00 / dia',
      rated: '4.2'
    },
    {
      id: 3,
      imagem: img3,
      category: 'Sport Model',
      title: 'Land Rover Sport',
      location: 'Rio de Janeiro',
      description: 'R$ 450,00 / dia',
      rated: '4.8'
    },
    {
      id: 5,
      imagem: img5,
      category: 'Confort Model',
      title: 'EcoSport vPlus 2000',
      location: 'Pindamonhangaba',
      description: 'R$ 75,00 / dia',
      rated: '4.5'
    },
    {
      id: 7,
      imagem: img7,
      category: 'Economy Model',
      title: 'Uno quadradao 3000',
      location: 'Valadares do Oeste',
      description: 'R$ 125,00 / dia',
      rated: '3.7'
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
