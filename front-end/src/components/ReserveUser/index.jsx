import React from 'react'

export default function ReserveUser() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Minhas reservas</h1>
      <div>
        <p>array reservas estilo os cards</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div
          style={{
            border: '1px solid red'
          }}
        >
          <p>reserva X</p>
          <p>Data Chegada: 03/04/2023</p>
          <p>Data Saida: 04/04/2023</p>
          <p>Horario Previsto: 13:00h</p>
        </div>
        <div
          style={{
            border: '1px solid red'
          }}
        >
          <p>reserva Y</p>
          <p>Data Chegada: 05/04/2023</p>
          <p>Data Saida: 06/04/2023</p>
          <p>Horario Previsto: 18:00h</p>
        </div>
      </div>
    </div>
  )
}
