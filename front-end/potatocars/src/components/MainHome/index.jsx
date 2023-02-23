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
    { value: 'Sao Jose do Rio Preto', label: 'São Jose do Rio Preto' },
    { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
    { value: 'Sao Paulo', label: 'São Paulo' },
    { value: 'Belo Horizonte', label: 'Belo Horizonte' },
    { value: 'Salvador', label: 'Salvador' }
  ]

  return (
    <main className={styles.main}>
      <h1>Find out why PotatoCars is the Best</h1>
      <form className={styles.form}>
        <div className={styles.form__campos}>
          <label htmlFor="">Departure Location</label>
          <Select
            className={styles.select}
            options={options}
            placeholder="City Departure"
          />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Date Time Departure</label>
          <DatePicker
            selected={selectedDateDeparture}
            onChange={date => setselectedDateDeparture(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy - h:m"
            placeholderText="Date Time Departure"
            className={styles.calendar}
          />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Arrival Location</label>
          <Select
            className={styles.select}
            options={options}
            placeholder="City Arrival"
          />
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">Date Time Arrival</label>
          <DatePicker
            selected={selectedDateArrival}
            onChange={date => setselectedDateArrival(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy - h:m"
            placeholderText="Date Time Arrival"
            className={styles.calendar}
          />
        </div>
        <button className={styles.form__botao}>Search</button>
      </form>
      <div className={styles.main__comentarios}>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Best price guaranteed</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Cashback on car rental</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Payment in up to 24x</p>
        </div>
        <div className={styles.main__diferenciais}>
          <MdDoneAll />
          <p>Pay in Reais without IOF</p>
        </div>
      </div>
    </main>
  )
}
