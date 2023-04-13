import { React, useEffect, useState } from 'react'
import moment from 'moment'
// import Batata from './batata/Batata'

export const CardReservesUser = userReserve => {
  //Fetch do produto por id
  const [products, setProducts] = useState({})
  useEffect(() => {
    fetch(`/product/${userReserve.imageData.productId}`).then(res => {
      res.json().then(data => {
        setProducts(data)
        console.log(data)
      })
    })
  }, [userReserve.imageData.productId])

  const dateInicialFormat = moment(userReserve.imageData.dateBegin).format(
    'DD/MM/YYYY'
  )
  const dateEndFormat = moment(userReserve.imageData.dateEnd).format(
    'DD/MM/YYYY'
  )

  return (
    <section key={userReserve.imageData.id} style={{ height: '68vh' }}>
      <div
        style={{
          display: 'flex',
          width: '300px',
          border: '2px solid blue',
          flexDirection: 'column'
        }}
      >
        <p>{products.name}</p>

        <p>Inicio da locação:{dateInicialFormat}</p>
        <p>Termino da locação:{dateEndFormat}</p>
        {/* <img src={urlImage} alt="imagem produto" /> */}
        {/* {products.map((products, index) => (
          <Batata key={index} data={products} />
        ))} */}
      </div>
    </section>
  )
}
