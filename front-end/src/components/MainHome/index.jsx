import styles from './MainHome.module.scss'
import { React, useEffect, useState } from 'react'
import DateRangePickerComp from './DateRangePickerComp'
import { CardLocation } from '../CardLocation'

export default function Main() {
  const [location, setLocation] = useState([])
  const [search, setSearch] = useState({})

  console.log(search)

  // função responsavel em verificar a localização do nome das cidades
  const searchFunction = e => {
    e.preventDefault()
    if (location !== null || '') {
      setSearch({
        name: destination.name
      })
    } else {
      console.log('batatou parça')
    }
  }

  // useEffect responsavel pela conexão com api que busca as cidades
  useEffect(() => {
    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'GET',
      headers: requestHeaders
    }

    fetch(`city/all`, requestConfiguration).then(response => {
      response.json().then(data => {
        setLocation(data)
      })
    })
  }, [])

  const [showDestination, setShowDestination] = useState(false)
  const [destination, setDestination] = useState(null)

  function toogleLocation() {
    setShowDestination(!showDestination)
  }

  const selectDestination = location => {
    if (location !== null || '') {
      return `${location.name}`
    }
  }

  return (
    <main className={styles.main}>
      <h1>
        Procure e descubra por que a <span>NotCars</span> é a melhor
      </h1>
      <form className={styles.form}>
        <div className={styles.form__campos}>
          <div className={styles.select__location}>
            <label htmlFor="">Selecione</label>
            <input
              className={styles.select__location__input}
              onClick={toogleLocation}
              placeholder="Escolha cidade para retirada"
              value={selectDestination(destination)}
            />
            <div
              className={
                showDestination
                  ? `${styles.container__location__open}`
                  : `${styles.container__location__close}`
              }
            >
              {showDestination &&
                location.map((location, index) => (
                  <div className={styles.location__list} key={index}>
                    <CardLocation
                      id={index}
                      data={location}
                      onSelectDestination={currentDestination =>
                        setDestination(currentDestination)
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.form__campos}>
          <label htmlFor="">
            Data e Hora da Retirada / Data e Hora da Entrega
          </label>
          <DateRangePickerComp />
        </div>
        <button
          className={styles.form__botao}
          onClick={event => searchFunction(event)}
        >
          Buscar
        </button>
      </form>
      <div className={styles.main__comentarios}>
        <div className={styles.main__diferenciais}>
          <p>Melhor preço garantido</p>
        </div>
        <div className={styles.main__diferenciais}>
          <p>Performance impressionante, condução simplificada</p>
        </div>
        <div className={styles.main__diferenciais}>
          <p>Cashback no aluguel de carros</p>
        </div>
        <div className={styles.main__diferenciais}>
          <p>Amigo do ambiente e economia para você</p>
        </div>
      </div>
    </main>
  )
}
