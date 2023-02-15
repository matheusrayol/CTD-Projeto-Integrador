import { React, useState, useEffect, useRef } from 'react'
import styles from './BannerCarrossel.module.scss'
import { motion } from 'framer-motion'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import CardsBanner from '../CardBanner'

export default function BannerCarrossel() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesBanner] = useState([
    { id: 1, title: 'Porsche Carrera GT', imagem: img1, price: 'R$ 549000,00' },
    {
      id: 2,
      title: 'Maserati Gran Turismo S',
      imagem: img2,
      price: 'R$ 779000,00'
    },
    { id: 3, title: 'Koenigsegg Agera', imagem: img3, price: 'R$ 369000,00' },
    { id: 4, title: 'Porsche Carrera GT', imagem: img1, price: 'R$ 549000,00' },
    {
      id: 5,
      title: 'Maserati Gran Turismo S',
      imagem: img2,
      price: 'R$ 779000,00'
    },
    { id: 6, title: 'Koenigsegg Agera', imagem: img3, price: 'R$ 369000,00' }
  ])

  return (
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
  )
}
