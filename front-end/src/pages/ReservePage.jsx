import React, { useEffect, useState } from 'react'
import styles from './ReservePage.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Reserve from '../components/Reserve'

import { json } from '../json/infoProducts'
import { useParams } from 'react-router'

export default function ReservePage() {
  const allImages = json

  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(allImages[params.id - 1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <div className={styles.appProduct}>
      <div className={styles.bodyProduct}>
        <Navbar />
        <Reserve key={product.id} imageData={product} />
        <Footer />
      </div>
    </div>
  )
}
