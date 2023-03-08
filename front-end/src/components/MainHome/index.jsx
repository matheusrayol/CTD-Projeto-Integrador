import styles from './MainHome.module.scss'
import { MdDoneAll } from 'react-icons/md'
import { React, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Main() {
  const [selectedDateDeparture, setselectedDateDeparture] = useState('')
  const [selectedDateArrival, setselectedDateArrival] = useState('')

  const options = [
    { value: 'Fortaleza', label: 'Fortaleza' },
    { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
    { value: 'Sao Paulo', label: 'São Paulo' },
    { value: 'Belo Horizonte', label: 'Belo Horizonte' }
  ]

  return (
    <main className={styles.main}>
      <h1>
        Procure e descubra por que a <span>NotCars</span> é a melhor
      </h1>
      <form className={styles.form}>
        <div className={styles.form__campos}>
          <label htmlFor="">Selecione uma Cidade</label>
          <Select
            className={styles.select}
            options={options}
            placeholder="Selecione uma Cidade"
          />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Data e Hora da Retirada</label>
          <DatePicker
            selected={selectedDateDeparture}
            onChange={date => setselectedDateDeparture(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy - h:m"
            placeholderText="Data / Hora Retirada"
            className={styles.calendar}
          />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Data e hora da Devolução</label>
          <DatePicker
            selected={selectedDateArrival}
            onChange={date => setselectedDateArrival(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy - h:m"
            placeholderText="Data / Hora Devolução"
            className={styles.calendar}
          />
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
          <p>Performance impressionante, condução simplificada</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Cashback no aluguel de carros</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Amigo do ambiente e economia para você</p>
        </div>
      </div>
    </main>
  )
}
