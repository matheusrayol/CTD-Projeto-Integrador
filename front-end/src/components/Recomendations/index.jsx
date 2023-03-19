// import { CardsRecomendations } from './CardRecomendations'
// import styles from './Recomendations.module.scss'
// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { ProductsContext } from '../../context/ProductsContext'

// export const Recomendations = () => {
//   const { products, productsByCategory, productsByCity } =
//     useContext(ProductsContext)
//   console.log('Products products: ' + products)
//   console.log('Products productsByCategory: ' + productsByCategory)
//   console.log('Products productsByCity: ' + productsByCity)

//   return (
//     <section className={styles['products-container']}>
//       <h2 className={styles['products-title']}>Recomendações</h2>
//       <ul className={styles['products-list']}>
//         {productsByCategory
//           ? productsByCategory.map(product => (
//               <Link
//                 key={product.idProduto}
//                 to={`../product/${product.idProduto}`}
//               >
//                 <li className={styles['products-item']}>
//                   <CardsRecomendations product={product} />
//                 </li>
//               </Link>
//             ))
//           : productsByCity
//           ? productsByCity.map(product => (
//               <Link
//                 key={product.idProduto}
//                 to={`../product/${product.idProduto}`}
//               >
//                 <li className={styles['products-item']}>
//                   <CardsRecomendations product={product} />
//                 </li>
//               </Link>
//             ))
//           : products.map(product => (
//               <Link
//                 key={product.idProduto}
//                 to={`../product/${product.idProduto}`}
//               >
//                 <li className={styles['products-item']}>
//                   <CardsRecomendations product={product} />
//                 </li>
//               </Link>
//             ))}
//       </ul>
//     </section>
//   )
// }

import { React, useState, useEffect, useRef } from 'react'
import styles from './Recomendations.module.scss'
import { motion } from 'framer-motion'
import { CardsRecomendations } from './CardRecomendations'
import { json } from '../../json/infoProducts'

export const Recomendations = () => {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  const [allImagesRecomendations] = useState(json)

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
