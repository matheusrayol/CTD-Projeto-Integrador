import Tags from '../Tags'
import styles from './Galeria.module.scss'
import Cards from './Cards'
import { React, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import id2 from '../../assets/img2.jpg'
import id4 from '../../assets/img4.jpg'
import id6 from '../../assets/img6.jpg'
import id8 from '../../assets/img8.jpg'

export default function Galeria() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [fotos] = useState([
    {
      id: '1',
      image: id2,
      rated: '4.1',
      category: 'Modelo Luxuoso',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '2',
      image: id2,
      rated: '4.2',
      category: 'Modelo Luxuoso',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '3',
      image: id2,
      rated: '4.3',
      category: 'Modelo Luxuoso',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '4',
      image: id2,
      rated: '4.4',
      category: 'Modelo Luxuoso',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '5',
      image: id4,
      rated: '4.5',
      category: 'Modelo Esportivo',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '6',
      image: id4,
      rated: '4.6',
      category: 'Modelo Esportivo',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '7',
      image: id4,
      rated: '4.7',
      category: 'Modelo Esportivo',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '8',
      image: id4,
      rated: '4.8',
      category: 'Modelo Esportivo',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '9',
      image: id6,
      rated: '4.9',
      category: 'Modelo Conforto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '10',
      image: id6,
      rated: '4.10',
      category: 'Modelo Conforto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '11',
      image: id6,
      rated: '4.11',
      category: 'Modelo Conforto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '12',
      image: id6,
      rated: '4.12',
      category: 'Modelo Conforto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '13',
      image: id8,
      rated: '4.13',
      category: 'Modelo Compacto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '14',
      image: id8,
      rated: '4.14',
      category: 'Modelo Compacto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '15',
      image: id8,
      rated: '4.15',
      category: 'Modelo Compacto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    },
    {
      id: '16',
      image: id8,
      rated: '4.16',
      category: 'Modelo Compacto',
      title: 'Nome do carro',
      description: 'Descricao do carro e caracteristicas...'
    }
  ])

  const [itens, setItens] = useState(
    fotos.filter(foto => {
      return foto.category === 'Modelo Luxuoso'
    })
  )
  const categories = [...new Set(fotos.map(valor => valor.category))]

  const filtraFotos = category => {
    const novasFotos = fotos.filter(foto => {
      return foto.category === category
    })

    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <Tags
        categories={categories}
        filtraFotos={filtraFotos}
        setItens={setItens}
      />
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
