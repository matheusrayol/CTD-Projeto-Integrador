import { React, useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { CardReservesUser } from '../CardReserveUser'

export default function ReserveUser() {
  const { id } = useAuth()
  const [productsReservations, setProductsReservations] = useState([])
  useEffect(() => {
    fetch(`/reservation/user/${id}`).then(res => {
      res.json().then(data => {
        setProductsReservations(data)
      })
    })
  }, [id])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Minhas reservas</h1>

      <div style={{ display: 'flex', gap: '2rem', margin: '0 15%' }}>
        {productsReservations.map((image, index) => (
          <CardReservesUser key={index} imageData={image} />
        ))}
      </div>
    </div>
  )
}
