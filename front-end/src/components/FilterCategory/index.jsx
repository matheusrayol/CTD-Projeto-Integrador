import Tags from '../Tags'
import styles from './FilterCategory.module.scss'
import Cards from './Cards'
import { React, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import id1 from '../../assets/img1.jpg'
import id2 from '../../assets/img2.jpg'
import id3 from '../../assets/img3.jpg'
import id4 from '../../assets/img4.jpg'
import id5 from '../../assets/img5.jpg'
import id6 from '../../assets/img6.jpg'
import id7 from '../../assets/img7.jpg'
import id8 from '../../assets/img8.jpg'

export default function FilterCategory() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [cards] = useState([
    {
      id: '1',
      image: id1,
      rated: '4.1',
      category: 'Modelo Luxuoso',
      location: 'Fortaleza',
      title: 'Volvo XC40 Recharge',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '2',
      image: id2,
      rated: '4.2',
      category: 'Modelo Luxuoso',
      location: 'Rio de Janeiro',
      title: 'Mercedes S EQS',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '3',
      image: id1,
      rated: '4.3',
      category: 'Modelo Luxuoso',
      location: 'Sao Paulo',
      title: 'Volvo XC40 Recharge',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '4',
      image: id2,
      rated: '4.4',
      category: 'Modelo Luxuoso',
      location: 'Belo Horizonte',
      title: 'Mercedes S EQS',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '5',
      image: id3,
      rated: '4.5',
      category: 'Modelo Esportivo',
      location: 'Fortaleza',
      title: 'Audi RS e-tron GT',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '6',
      image: id4,
      rated: '4.6',
      category: 'Modelo Esportivo',
      location: 'Rio de Janeiro',
      title: 'Byd Han',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '7',
      image: id3,
      rated: '4.7',
      category: 'Modelo Esportivo',
      location: 'Sao Paulo',
      title: 'Audi RS e-tron GT',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '8',
      image: id4,
      rated: '4.8',
      category: 'Modelo Esportivo',
      location: 'Belo Horizonte',
      title: 'Byd Han',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '9',
      image: id5,
      rated: '4.9',
      category: 'Modelo Conforto',
      location: 'Fortaleza',
      title: 'JAC iEV40',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '10',
      image: id6,
      rated: '4.10',
      category: 'Modelo Conforto',
      location: 'Rio de Janeiro',
      title: 'Chevrolet Bolt',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '11',
      image: id5,
      rated: '4.11',
      category: 'Modelo Conforto',
      location: 'Sao Paulo',
      title: 'JAC iEV40',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '12',
      image: id6,
      rated: '4.12',
      category: 'Modelo Conforto',
      location: 'Belo Horizonte',
      title: 'Chevrolet Bolt',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '13',
      image: id7,
      rated: '4.13',
      category: 'Modelo Compacto',
      location: 'Fortaleza',
      title: 'Fiat 500e',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '14',
      image: id8,
      rated: '4.14',
      category: 'Modelo Compacto',
      location: 'Rio de Janeiro',
      title: 'Caoa Chery',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '15',
      image: id7,
      rated: '4.15',
      category: 'Modelo Compacto',
      location: 'Sao Paulo',
      title: 'Fiat 500e',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '16',
      image: id8,
      rated: '4.16',
      category: 'Modelo Compacto',
      location: 'Belo Horizonte',
      title: 'Caoa Chery',
      description: 'Descricao do carro e caracteristicas...'
    }
  ])

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
    <section className={styles.galeria}>
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
