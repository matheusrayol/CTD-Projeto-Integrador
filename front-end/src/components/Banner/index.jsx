import { React, useEffect, useRef, useState } from 'react'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'
import { CardBanner } from './CardBanner'

export const Banner = () => {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [product, setProduct] = useState([])

  useEffect(() => {
    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'GET',
      headers: requestHeaders
    }

    fetch(`category/all`, requestConfiguration).then(response => {
      response.json().then(data => {
        setProduct(data)
      })
    })
  }, [])

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
            {product.map(image => {
              return <CardBanner key={image.id} imageData={image} />
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
