/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { Calender } from './Calender'
import { SelectLocation } from '../Select'
import { CardCategoria } from '../CardCategoria'
import { CardProduct } from '../CardMainHome'
import './style.sass'

// usando local até corrigir algumas mudanças dos dados no bd
import { json } from '../../json/infoProducts'

export function MainHome() {
  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showDestination, setShowDestination] = useState(false)

  const [searchDestination, setSearchDestination] = useState('')
  const [category, setCategory] = useState([])
  const [location, setLocation] = useState([])
  const [products, setProducts] = useState([])

  const [objectFilter, setObjectFilter] = useState([])
  const [listProduct, setListProduct] = useState(true)
  const [selectCity, setSelectCity] = useState(false)

  const [selectCategory, setSelectCategory] = useState(false)

  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')

  useEffect(() => {
    fetch('/category/all').then(res => {
      res.json().then(data => {
        setCategory(data)
      })
    })
  }, [])

  useEffect(() => {
    if (showDestination) {
      fetch('/city/all').then(res => {
        res.json().then(data => {
          setLocation(data)
        })
      })
    }
  }, [showDestination])

  useEffect(() => {
    fetch('/product/all').then(res => {
      res.json().then(data => {
        setProducts(data)
      })
    })
  }, [])

  const getValueInputSelect = event => {
    setValueInputSelect(event.target.value)
    if (valueInputSelect.length >= 1) {
      setInputSelect(false)
    } else {
      setInputSelect(true)
    }
  }

  const teste = nome => {
    setValueInputSelect(nome)
    setShowDestination(false)
  }

  const filterInputSelect = location.filter(
    object =>
      object.name.toLowerCase().includes(valueInputSelect.toLowerCase()) ||
      object.country.toLowerCase().includes(valueInputSelect.toLowerCase())
  )

  const filterProductBySelect = () => {
    const filterObjects = json.filter(object =>
      object.location.toLowerCase().includes(valueInputSelect.toLowerCase())
    )
    return filterObjects
  }

  const filterProductByCategory = currentCategory => {
    const filterCategory = json.filter(
      object => object.category === currentCategory
    )
    setObjectFilter(filterCategory)
    setListProduct(false)
    setSelectCategory(true)
    setSelectCity(false)
  }

  const searchDestinationSelect = event => {
    event.preventDefault()
    if (valueInputSelect !== null) {
      setSearchDestination(valueInputSelect)
      const objFilter = filterProductBySelect()
      setObjectFilter(objFilter)
      setListProduct(false)
      setValueInputSelect('')
      setSelectCity(true)
      setSelectCategory(false)
    } else {
      console.log('batatou parça')
    }
  }

  function toggleCalendar() {
    setShowCalendar(!showCalendar)
    setShowDestination(false)
  }

  function toogleLocation() {
    setShowDestination(!showDestination)
  }

  const dataSelecionada = range => {
    setStartDate(range)
    setSelectDate(true)
    setShowCalendar(false)
  }

  const formatDate = range => {
    if (!range) {
      return ''
    }

    const startDay = range[0].toLocaleString('pt-BR', { day: '2-digit' })
    const startMonth = range[0].toLocaleString('pt-BR', { month: 'short' })
    const endDay = range[1].toLocaleString('pt-BR', { day: '2-digit' })
    const endMonth = range[1].toLocaleString('pt-BR', { month: 'short' })

    return `${startDay} de ${startMonth} a ${endDay} de ${endMonth}`
  }

  return (
    <div className="container-home" id="container-home">
      <div className="container-search-home" id="container-search-home">
        <div className="content-search" id="content-search">
          <h1>
            Procure e descubra por que a <span>NotCars</span> é a melhor
          </h1>
          <div className="inputs-search" id="inputs-search">
            <div className="select-location" id="select-location">
              <input
                id="input-select-location"
                className="input-select-location"
                onClick={toogleLocation}
                onChange={getValueInputSelect}
                placeholder="Aonde quer retirar?"
                value={valueInputSelect}
              />
              <div
                id="showDestination"
                className={
                  showDestination
                    ? 'container-location-open'
                    : 'container-location-close'
                }
              >
                {inputSelect ? <h3>Locais para retirada</h3> : ''}
                {showDestination && inputSelect
                  ? location.slice(0, 4).map((location, index) => (
                      <div className="location-list">
                        <SelectLocation
                          id={index.length}
                          data={location}
                          onSelectDestination={currentDestination =>
                            teste(currentDestination)
                          }
                        />
                      </div>
                    ))
                  : filterInputSelect.slice(0, 4).map(filter => (
                      <div className="location-list">
                        <SelectLocation
                          data={filter}
                          onSelectDestination={currentDestination =>
                            teste(currentDestination)
                          }
                        />
                      </div>
                    ))}
              </div>
            </div>
            <div className="input-calendar" id="input-calendar">
              <input
                onClick={toggleCalendar}
                type="text"
                placeholder="Data da Retirada / Data da Entrega"
                value={selectDate ? formatDate(startDate) : ''}
              />
              <div
                className={
                  showCalendar
                    ? 'container-calendar-open'
                    : 'container-calendar-close'
                }
              >
                {showCalendar && (
                  <Calender
                    id={startDate}
                    onSelectedData={dataSelecionada}
                    selectedRange={startDate}
                  />
                )}
              </div>
            </div>
            <button
              id="submit-search"
              className="submit-search"
              onClick={event => searchDestinationSelect(event)}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      <section className="container-diferential" id="container-diferential">
        <div className="list-diferentials">
          <p>Melhor preço garantido</p>
        </div>
        <div className="list-diferentials">
          <p>Performance impressionante, condução simplificada</p>
        </div>
        <div className="list-diferentials">
          <p>Cashback no aluguel de carros</p>
        </div>
        <div className="list-diferentials">
          <p>Amigo do ambiente e economia para você</p>
        </div>
      </section>
      {/* <section className="container-category" id="container-category">
        <h2>Buscar por Categoria/Modelo</h2>
        <div className="list-categories" id="list-categories">
          {category.map((categories, index) => (
            <CardCategoria
              id={index}
              data={categories}
              onSelectCategory={currentCategory =>
                filterProductByCategory(currentCategory)
              }
            />
          ))}
        </div>
      </section> */}
      <section className="container-product" id="container-product">
        {listProduct ? (
          <h2>Recomendações para você</h2>
        ) : selectCategory ? (
          <h2>{objectFilter[0].category}</h2>
        ) : selectCity ? (
          <h2>{objectFilter[0].city}</h2>
        ) : (
          ''
        )}
        <div className="list-products" id="list-products">
          {listProduct
            ? json.map((products, index) => (
                <CardProduct id={index.length} data={products} />
              ))
            : objectFilter.map((products, index) => (
                <CardProduct id={index.length} data={products} />
              ))}
        </div>
      </section>
    </div>
  )
}
