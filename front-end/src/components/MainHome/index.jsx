/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Calender } from './Calender'
import { SelectLocation } from '../Select'
import { CardCategory } from '../CardCategory'
import { CardProduct } from '../CardMainHome'
import { format } from 'date-fns'
import './style.sass'
import 'react-calendar/dist/Calendar.css'

export function MainHome() {
  //Const's calendario
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showDestination, setShowDestination] = useState(false)

  //Const's cards/filtros
  const [objectFilter, setObjectFilter] = useState([])
  const [listProduct, setListProduct] = useState(true)
  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')
  const [inputCategory, setInputCategory] = useState(true)
  const [valueInputCategory, setValueInputCategory] = useState('')

  //Fetch de todos os card's de categoria
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch('/category/all').then(res => {
      res.json().then(data => {
        setCategory(data)
      })
    })
  }, [])

  //Fetch de todas as cidades
  const [location, setLocation] = useState([])
  useEffect(() => {
    if (showDestination) {
      fetch('/city/all').then(res => {
        res.json().then(data => {
          setLocation(data)
        })
      })
    }
  }, [showDestination])

  //Fetch de todos os produtos
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/product/all').then(res => {
      res.json().then(data => {
        setProducts(data)
      })
    })
  }, [])

  // Função responsavel pelo filtro por cidade e/ou data
  const [startDate, setStartDate] = useState([null, null])
  const [cityId, setCityId] = useState('')
  function submit(event) {
    event.preventDefault()

    if (startDate[0] === null && cityId !== '') {
      fetch(`/product/all?cityId=${cityId}`).then(res => {
        res.json().then(data => {
          setProducts(data)
        })
      })
    }
    if (startDate[0] !== null && startDate[1] !== null && cityId !== '') {
      const startDateInput = format(startDate[0], 'yyyy-MM-dd')
      const endDateInput = format(startDate[1], 'yyyy-MM-dd')

      fetch(
        `/product/availability?cityId=${cityId}&startDate=${startDateInput}&endDate=${endDateInput}`
      ).then(res => {
        res.json().then(data => {
          setProducts(data)
        })
      })
    }
  }

  //Fetch para pegar filtrar por id da categoria o produto
  const [categoryId, setCategoryId] = useState('')
  function filterCategory(id) {
    console.log(categoryId)
    fetch(`/product/all?categoryId=${id}`).then(res => {
      res.json().then(data => {
        setProducts(data)
      })
    })
  }

  // const que fecha o toggle caso o input escolhido tenha sido clicado
  const inputSelected = cityName => {
    setValueInputSelect(cityName)
    setShowDestination(false)
  }

  //
  const getValueInputSelect = event => {
    setValueInputSelect(event.target.value)
    if (valueInputSelect.length >= 1) {
      setInputSelect(false)
    } else {
      setInputSelect(true)
    }
  }

  // const que realiza o fechamento do calendario
  function toggleCalendar() {
    setShowCalendar(!showCalendar)
    setShowDestination(false)
  }

  // const que realiza a abertura do calendario
  function toogleLocation() {
    setShowDestination(!showDestination)
  }

  // const que seleciona a data do calendario selecionado
  const selectedDate = range => {
    setStartDate(range)
    setSelectDate(true)
    setShowCalendar(false)
  }

  // const para formatação e formas do alcance do calendario
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
                {location.map((location, index) => (
                  <div className="location-list">
                    <SelectLocation
                      id={index.length}
                      data={location}
                      onSelectDestination={currentDestination => {
                        inputSelected(currentDestination)
                        setCityId(location.id)
                      }}
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
                    onSelectedData={selectedDate}
                    selectedRange={startDate}
                  />
                )}
              </div>
            </div>
            <button
              id="submit-search"
              className="submit-search"
              onClick={submit}
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
      <section className="container-category" id="container-category">
        <h2>Procure as melhores opções por categoria</h2>
        <div className="list-categories" id="list-categories">
          {category.map((image, index) => (
            <CardCategory
              onSelectCategory={currentCategory => {
                filterCategory(currentCategory)
              }}
              key={index}
              imageData={image}
            />
          ))}
        </div>
      </section>
      <section className="container-product" id="container-product">
        <h2>Recomendações para você</h2>
        <div className="list-products" id="list-products">
          {listProduct
            ? products.map((products, index) => (
                <CardProduct key={index} id={index.length} data={products} />
              ))
            : objectFilter.map((products, index) => (
                <CardProduct key={index} id={index.length} data={products} />
              ))}
        </div>
      </section>
    </div>
  )
}
