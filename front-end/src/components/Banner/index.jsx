// import { useContext, useRef } from 'react'
// import { CategoryContext } from '../../context/CategoryContext'
// import styles from './Banner.module.scss'

// export const Banner = props => {
//   const { setSelectedCategory, setCategoryId } = useContext(CategoryContext)
//   const categoryCardId = props.category?.id
//   const categoryRef = useRef()

//   const handleClick = event => {
//     setSelectedCategory(categoryRef.current.innerText)
//     setCategoryId(categoryCardId)
//     console.log('handleClick categoryId: ' + categoryCardId)
//   }

//   return (
//     <div
//       className={styles['card-container']}
//       onClick={event => handleClick(event)}
//     >
//       <div className={styles['card-image-wrapper']}>
//         <img
//           src={props.category.urlImagem}
//           alt=""
//           className={styles['card-image']}
//         />
//       </div>
//       <div className={styles['card-description']}>
//         <h3 className={styles['card-title']} ref={categoryRef}>
//           {props.category.descricao}
//         </h3>
//         <p className={styles['card-detail']}>
//           {props.category.qualificacao} {props.category.descricao}
//         </p>
//       </div>
//     </div>
//   )
// }

import { React, useEffect, useRef, useState } from 'react'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'
import { CardBanner } from './CardBanner'
// import { json } from '../../json/infoProducts'
// import { ProductsContext } from '../../context/ProductsContext'

export const Banner = () => {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  // const [allImagesBest] = useState(ProductsContext)

  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState([])

  useEffect(() => {
    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'GET',
      headers: requestHeaders
    }

    fetch(`product/all`, requestConfiguration).then(response => {
      response.json().then(data => {
        console.log(data)
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
