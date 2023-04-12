import { React, useEffect, useState } from 'react'
import moment from 'moment'

export const CardReservesUser = userReserve => {
  //Fetch do produto por id
  const [products, setProducts] = useState([])
  const idProd = userReserve.imageData.productId
  useEffect(() => {
    fetch(`/product/${idProd}`).then(res => {
      res.json().then(data => {
        setProducts(data)
      })
    })
  }, [idProd])

  const dateInicialFormat = moment(userReserve.imageData.dateBegin).format(
    'DD/MM/YYYY'
  )
  const dateEndFormat = moment(userReserve.imageData.dateEnd).format(
    'DD/MM/YYYY'
  )

  return (
    <section style={{ height: '68vh', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          width: '300px',
          border: '2px solid blue',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}
      >
        <p>Carro alugado: {products.name}</p>
        <p>Categoria: {products.category?.qualification || ''}</p>

        <p>Inicio da locação: {dateInicialFormat}</p>
        <p>Termino da locação: {dateEndFormat}</p>
        <p>Hora agendada: {userReserve.imageData.hourStartReservation}</p>

        <img
          style={{ width: '100%' }}
          src={products.images?.[0]?.urlImage || ''}
          alt=""
        />
      </div>
    </section>
  )
}
