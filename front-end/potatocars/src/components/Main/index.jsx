import React from 'react'
// import { useState } from 'react'
import styles from './Main.module.scss'
import { MdDoneAll } from 'react-icons/md'
// import Calendar from 'react-calendar'

export default function Main() {
  // const [value, onChange] = useState(new Date())

  return (
    <main className={styles.main}>
      <h1>Pesquise e descubra por que a PotatoCars é a melhor!!!</h1>
      <h2>Alugue um Carro</h2>
      <form className={styles.form}>
        <div className={styles.form__campos}>
          <label htmlFor="">Local Retirada</label>
          <input type="text" placeholder="Aonde você quer alugar?" />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Data e Hora Retirada</label>
          <input type="datetime-local" />
          {/* <Calendar onChange={onChange} value={value} /> */}
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Data e Hora de Devolução</label>
          <input type="datetime-local" />
        </div>
        <button className={styles.form__botao}>Buscar</button>
      </form>
      <div className={styles.main__comentarios}>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Melhor preço garantido</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Cashback no aluguel de carros</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Parcelamento em até 24x</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Pague em Reais sem IOF</p>
        </div>
      </div>
    </main>
  )
}
