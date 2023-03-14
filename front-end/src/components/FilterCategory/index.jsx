import Tags from '../Tags'
import styles from './FilterCategory.module.scss'
import Cards from './Cards'
import { React, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { json } from '../../json/infoProducts'

export default function FilterCategory() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [cards] = useState(json)

  const [itens, setItens] = useState(
    cards.filter(card => {
      return card.location === 'Fortaleza'
    })
  )
  const locations = [...new Set(cards.map(valor => valor.location))]

  const filterCity = location => {
    const newcards = cards.filter(card => {
      return card.location === location
    })

    setItens(newcards)
  }

  return (
    <section>
      <Tags locations={locations} filterCity={filterCity} setItens={setItens} />
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
            {itens.map(image => {
              return <Cards key={image.id} imageData={image} />
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
