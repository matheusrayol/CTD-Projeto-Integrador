// import styles from './MainHome.module.scss'
// import { React, useContext, useState } from 'react'
// import DateRangePickerComp from './DateRangePickerComp'
// import { CityContext } from '../../context/CityContext'
// import { ProductsContext } from '../../context/ProductsContext'

// export const MainHome = () => {
//   const { cities, selectedCity, setselectedCity, cityId, setCityId } =
//     useContext(CityContext)

//   const { setProductsByCity, setProductsByCategory } =
//     useContext(ProductsContext)
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const handleClick = () => {
//     setDropdownOpen(!dropdownOpen)
//   }

//   const handleChange = event => {
//     setselectedCity(event.target.value)
//   }

//   const handleSelect = (event, cityItemId) => {
//     event.preventDefault()

//     console.log('handleSelect: ', cityItemId)

//     const className = event.target.className
//     const valueCity = event.target.innerHTML
//     const valueCountry = event.target.previousSibling?.innerHTML
//     const valueLi = event.target.children[1]?.children[0]?.innerHTML

//     console.log(event.target.className)
//     console.log(event.target)
//     console.log(event.target.previousSibling?.innerHTML)
//     console.log(event.target.nextSibling?.children[0]?.innerHTML)
//     console.log(event.target.children[1]?.children[0]?.innerHTML)

//     if (className.includes('item-city')) {
//       setselectedCity(valueCity)
//     }

//     if (className.includes('item-country')) {
//       setselectedCity(valueCountry)
//     }

//     if (className.includes('list-item')) {
//       setselectedCity(valueLi)
//     }

//     setCityId(cityItemId)
//     setDropdownOpen(false)
//   }

//   const handleSearch = event => {
//     event.preventDefault()

//     fetch(`city/${cityId}`).then(response => {
//       if (response.ok) {
//         response.json().then(data => {
//           console.log('productsByCity: ' + data)
//           setProductsByCity(data)
//           setProductsByCategory()
//         })
//       }
//     })
//   }

//   return (
//     <section className={styles['searchbox-container']}>
//       <h1 className={styles['page-title']}>
//         Procure e descubra por que a <span>NotCars</span> é a melhor
//       </h1>
//       <form className={styles['form-container']}>
//         <div className={styles['inputs-wrapper']}>
//           <div className={styles['destination-input']}>
//             <input
//               type="text"
//               value={selectedCity}
//               placeholder="Onde vamos?"
//               onClick={() => handleClick()}
//               onChange={event => handleChange(event)}
//             />

//             {dropdownOpen && (
//               <ul className={styles['cities-list']}>
//                 {cities.map(city => {
//                   const cityItemId = city.idCity

//                   return (
//                     <li
//                       className={styles['list-item']}
//                       key={city.name}
//                       onClick={event => handleSelect(event, cityItemId)}
//                     >
//                       <div className={styles['item-text']}>
//                         <p className={styles['item-city']}>{city.name}</p>
//                         <p className={styles['item-country']}>{city.country}</p>
//                       </div>
//                     </li>
//                   )
//                 })}
//               </ul>
//             )}
//           </div>
//           <div className={styles['dates-input']}>
//             <DateRangePickerComp />
//           </div>
//         </div>
//         <button
//           className={styles['search-button']}
//           onClick={event => {
//             handleSearch(event)
//           }}
//         >
//           Buscar
//         </button>
//       </form>
//     </section>
//   )
// }

// import styles from './MainHome.module.scss'
// import { React, useEffect, useState } from 'react'
// import DateRangePickerComp from './DateRangePickerComp'
// import { CardLocation } from '../CardLocation'

// export const MainHome = () => {
//   const [location, setLocation] = useState([])
//   const [search, setSearch] = useState({})

//   console.log(search)

//   // função responsavel em verificar a localização do nome das cidades
//   const searchFunction = e => {
//     e.preventDefault()
//     if (location !== null || '') {
//       setSearch({
//         name: destination.name
//       })
//     } else {
//       console.log('batatou parça')
//     }
//   }

//   // useEffect responsavel pela conexão com api que busca as cidades
//   useEffect(() => {
//     let requestHeaders = {
//       'Content-Type': 'application/json'
//     }

//     let requestConfiguration = {
//       method: 'GET',
//       headers: requestHeaders
//     }

//     fetch(`city/all`, requestConfiguration).then(response => {
//       response.json().then(data => {
//         setLocation(data)
//       })
//     })
//   }, [])

//   const [showDestination, setShowDestination] = useState(false)
//   const [destination, setDestination] = useState(null)

//   function toogleLocation() {
//     setShowDestination(!showDestination)
//   }

//   const selectDestination = location => {
//     if (location !== null || '') {
//       return `${location.name}`
//     }
//   }

//   return (
//     <main className={styles.main}>
//       <h1>
//         Procure e descubra por que a <span>NotCars</span> é a melhor
//       </h1>
//       <form className={styles.form}>
//         <div className={styles.form__campos}>
//           <div className={styles.select__location}>
//             <label htmlFor="">Selecione</label>
//             <input
//               className={styles.select__location__input}
//               onClick={toogleLocation}
//               placeholder="Escolha cidade para retirada"
//               value={selectDestination(destination)}
//             />
//             <div
//               className={
//                 showDestination
//                   ? `${styles.container__location__open}`
//                   : `${styles.container__location__close}`
//               }
//             >
//               {showDestination &&
//                 location.map((location, index) => (
//                   <div className={styles.location__list} key={index}>
//                     <CardLocation
//                       id={index}
//                       data={location}
//                       onSelectDestination={currentDestination =>
//                         setDestination(currentDestination)
//                       }
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         <div className={styles.form__campos}>
//           <label htmlFor="">
//             Data e Hora da Retirada / Data e Hora da Entrega
//           </label>
//           <DateRangePickerComp />
//         </div>
//         <button
//           className={styles.form__botao}
//           onClick={event => searchFunction(event)}
//         >
//           Buscar
//         </button>
//       </form>
//       <div className={styles.main__comentarios}>
//         <div className={styles.main__diferenciais}>
//           <p>Melhor preço garantido</p>
//         </div>
//         <div className={styles.main__diferenciais}>
//           <p>Performance impressionante, condução simplificada</p>
//         </div>
//         <div className={styles.main__diferenciais}>
//           <p>Cashback no aluguel de carros</p>
//         </div>
//         <div className={styles.main__diferenciais}>
//           <p>Amigo do ambiente e economia para você</p>
//         </div>
//       </div>
//     </main>
//   )
// }

import { useEffect, useRef, useState } from 'react'
import styles from './MainHome.module.scss'
import { SelectLocation } from '../Select'
import { CardCategoria } from '../CardCategoria'
import { CardProduct } from '../CardProduto'
import { Calender } from '../Calender'
import { motion } from 'framer-motion'
import { Banner } from '../Banner'
import { json } from '../../json/infoProducts'

export const MainHome = () => {
  //// relacionado a div motion ////
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  //////////////////////////////////////////////////////////////////////////////////////

  //// const's para o select e calendario ////
  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showDestination, setShowDestination] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [searchDestination, setSearchDestination] = useState('')
  const [listProduct, setListProduct] = useState(true)
  const [selectCity, setSelectCity] = useState(false)
  const [selectCategory, setSelectCategory] = useState(false)
  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')
  //////////////////////////////////////////////////////////////////////////////////////

  //// const's para array dos objetos ////
  const [category, setCategory] = useState([])
  const [location, setLocation] = useState([])
  const [objectFilter, setObjectFilter] = useState([])
  //////////////////////////////////////////////////////////////////////////////////////

  //// fetch categorias /////
  useEffect(() => {
    fetch('/category/all').then(res => {
      res.json().then(data => {
        setCategory(data)
      })
    })
  }, [])
  //////////////////////////////////////////////////////////////////////////////////////

  //// fetch cidades /////
  useEffect(() => {
    if (showDestination) {
      fetch('/city/all').then(res => {
        res.json().then(data => {
          setLocation(data)
        })
      })
    }
  }, [showDestination])
  //////////////////////////////////////////////////////////////////////////////////////
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(`product/all`).then(response => {
      response.json().then(data => {
        setProduct(data)
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
      console.log('errro')
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
    <main className={styles.main}>
      <h1>
        Procure e descubra por que a <span>NotCars</span> é a melhor
      </h1>
      <div className={styles.fields}>
        <div className={styles.fields__select}>
          <label htmlFor="" className={styles.fields__select__label}>
            Selecione
          </label>
          <input
            className={styles.fields__select__input}
            onClick={toogleLocation}
            onChange={getValueInputSelect}
            value={valueInputSelect}
          />

          <div className={showDestination}>
            {showDestination && inputSelect
              ? location.slice(0, 4).map((location, index) => (
                  <div>
                    <SelectLocation
                      key={index}
                      id={index.length}
                      data={location}
                      onSelectDestination={currentDestination =>
                        teste(currentDestination)
                      }
                    />
                  </div>
                ))
              : filterInputSelect.slice(0, 4).map(filter => (
                  <div>
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
        <div className={styles.fields__calendar}>
          <label htmlFor="" className={styles.fields__calendar__label}>
            Data e Hora da Retirada / Data e Hora da Entrega
          </label>
          <input
            className={styles.fields__calendar__input}
            onClick={toggleCalendar}
            type="text"
            value={selectDate ? formatDate(startDate) : ''}
          />
          <div
            className={`${styles.fields__calendar__div}
              showCalendar
                ? 'container-calendar-open'
                : 'container-calendar-close'`}
          >
            {showCalendar && (
              <Calender
                id={startDate}
                onSelectedData={dataSelecionada}
                selectedRange={startDate}
                className={styles.react__calendar}
              />
            )}
          </div>
        </div>
        <button
          className={styles.fields__button}
          onClick={event => searchDestinationSelect(event)}
        >
          Buscar
        </button>
      </div>
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

      <section className={styles.main__sectionCardsFilters}>
        <h2>Procure as melhores opções e modelos</h2>
        <motion.div
          ref={carrossel}
          className={styles.carrossel}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className={styles.main__sectionCardsFilters__cards}>
              {category.map((categories, index) => (
                <CardCategoria
                  id={index}
                  key={index}
                  data={categories}
                  onSelectCategory={currentCategory =>
                    filterProductByCategory(currentCategory)
                  }
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section className={styles.main__sectionCardsFiltersRender}>
        {/* {listProduct ? (
          <h2>Cidade: Todas</h2>
        ) : selectCategory ? (
          <h2>Cidade: {objectFilter[0].category}</h2>
        ) : selectCity ? (
          <h2>Cidade: {objectFilter[0].location}</h2>
        ) : (
          ''
        )} */}
        <motion.div className={styles.main__cards}>
          <motion.div
            ref={carrossel}
            className={styles.carrossel}
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className={styles.inner}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {listProduct
                ? product.map((products, index) => (
                    <CardProduct
                      id={index.length}
                      data={products}
                      key={index}
                    />
                  ))
                : objectFilter.map((products, index) => (
                    <CardProduct
                      id={index.length}
                      data={products}
                      key={index}
                    />
                  ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <Banner />
    </main>
  )
}
