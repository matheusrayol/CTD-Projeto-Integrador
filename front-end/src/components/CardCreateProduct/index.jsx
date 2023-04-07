/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './CardCreateProduct.scss'
import AttributeImage from './AttributeImage'
import { SelectLocation } from '../Select'
import { SelectCategory } from '../SelectCategory'
import { useNavigate } from 'react-router'

export default function CardCreateProduct() {
  const navigate = useNavigate()
  const [nameCar, setNameCar] = useState('')
  const [categoryCar, setCategoryCar] = useState({})
  const [localeCar, setLocaleCar] = useState({})
  const [descriptionCar, setDescriptionCar] = useState('')
  const [characteristicCar, setCharacteristicCar] = useState({})
  const [imagesCar, setImagesCar] = useState({})
  const [politicRuleCar, setPoliticRuleCar] = useState('')
  const [politicHealthCar, setPoliticHealthCar] = useState('')
  const [politicCancelCar, setPoliticCancelCar] = useState('')

  // const que valida os campos para habilitar o botao para envio do fetch
  const isFormValid =
    nameCar &&
    categoryCar &&
    localeCar &&
    descriptionCar &&
    characteristicCar &&
    imagesCar &&
    politicRuleCar &&
    politicHealthCar &&
    politicCancelCar

  // Const de form erro para validação visual
  const [formError, setFormError] = useState({
    nameCarError: false,
    categoryCarError: false,
    localeCarError: false,
    descriptionCarError: false,
    characteristicCarError: false,
    imagesCar: false,
    politicRuleError: false,
    politicHealthCarError: false,
    politicCancelCarError: false,
    genericError: false
  })

  const validateNameCar = nameCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameCar.length > 20) {
      setFormError(prevState => ({ ...prevState, nameCarError: false }))
      setNameCar(nameCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameCarError: true }))
      return false
    }
  }

  const validateCategoryCar = categoryCar => {}

  const validateLocaleCar = localeCar => {}

  const validateDescriptionCar = descriptionCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (descriptionCar.length > 20) {
      setFormError(prevState => ({ ...prevState, descriptionCarError: false }))
      setDescriptionCar(descriptionCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, descriptionCarError: true }))
      return false
    }
  }

  const validateCharacteristicCar = characteristicCar => {}

  const validateImageCar = imageCar => {}

  const validateRuleCar = politicRuleCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (politicRuleCar.length > 3) {
      setFormError(prevState => ({ ...prevState, politicRuleCarError: false }))
      setPoliticRuleCar(politicRuleCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, politicRuleCarError: true }))
      return false
    }
  }

  const validateHealthCar = politicHealthCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (politicHealthCar.length > 3) {
      setFormError(prevState => ({
        ...prevState,
        politicHealthCarError: false
      }))
      setPoliticHealthCar(politicHealthCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, politicHealthCarError: true }))
      return false
    }
  }

  const validateCancelCar = politicCancelCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (politicCancelCar.length > 3) {
      setFormError(prevState => ({
        ...prevState,
        politicCancelCarError: false
      }))
      setPoliticCancelCar(politicCancelCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, politicCancelCarError: true }))
      return false
    }
  }

  // const's para fazer abertura e fechamento campo local com os dados
  const [showDestination, setShowDestination] = useState(false)
  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')
  const [cityId, setCityId] = useState('')

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

  // const que fecha o toggle caso o input escolhido tenha sido clicado
  const inputSelected = cityName => {
    setValueInputSelect(cityName)
    setShowDestination(false)
  }

  // const pega valor input quando selecionado
  const getValueInputSelect = event => {
    setValueInputSelect(event.target.value)
    if (valueInputSelect.length >= 1) {
      setInputSelect(false)
    } else {
      setInputSelect(true)
    }
  }

  // const que realiza a abertura do input
  function toogleLocation() {
    setShowDestination(!showDestination)
  }

  //Fetch de todas as category
  const [category, setCategory] = useState([])
  useEffect(() => {
    if (showDestination) {
      fetch('/category/all').then(res => {
        res.json().then(data => {
          setCategory(data)
        })
      })
    }
  }, [showDestination])

  // const's para fazer abertura e fechamento campo categoria com os dados
  const [showDestination2, setShowDestination2] = useState(false)
  const [inputCategory, setInputCategory] = useState(true)
  const [valueInputCategory, setValueInputCategory] = useState('')
  const [categoryId, setCategoryId] = useState('')

  // const que fecha o toggle caso o input escolhido tenha sido clicado
  const inputSelected2 = categoryName => {
    setValueInputCategory(categoryName)
    setShowDestination2(false)
  }

  // const pega valor input quando selecionado
  const getValueInputCategory = event => {
    setValueInputCategory(event.target.value)
    if (valueInputCategory.length >= 1) {
      setInputCategory(false)
    } else {
      setInputCategory(true)
    }
  }

  // const que realiza a abertura do input
  function toogleLocation2() {
    setShowDestination2(!showDestination2)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let signInData = {
      nameCar: nameCar,
      categoryCar: categoryCar,
      localeCar: {},
      descriptionCar: descriptionCar,
      characteristicCar: {},
      images: {},
      politic: [rule, health, cancel]
    }

    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'POST',
      body: JSON.stringify(signInData),
      headers: requestHeaders
    }

    if (validateNameCar) {
      fetch(`/product/create`, requestConfiguration).then(response => {
        if (response.ok) {
          response.json().then(data => {
            alert('Produto Criado com Sucesso!')
            navigate(`../sucess`)
          })
        } else {
          if (response.status === 400) {
            response.json().then(data => {
              alert(data.mensagem)
            })
          } else {
            alert('Campo(os) incorreto(s)!')
          }
          setFormError({
            nameCarError: false,
            categoryCarError: false,
            localeCarError: false,
            descriptionCarError: false,
            characteristicCarError: false,
            imagesCar: false,
            politicRuleError: false,
            politicHealthCarError: false,
            politicCancelCarError: false,
            genericError: true
          })
        }
      })
    }
  }

  const rule = [
    {
      paragraph1: 'Atraso max: 15min.',
      paragraph2: 'Não é permitido desativar sistemas do carro.',
      paragraph3: 'Marcas de comida/bebida/outros acarretara em multa.'
    }
  ]

  const health = [
    {
      paragraph1: 'Entregue limpo e higienizado.',
      paragraph2: 'Possui sistema de frenagem automatico.',
      paragraph3: 'Sistemas de direção e bancos ergonômicos.'
    }
  ]

  const cancel = [
    {
      paragraph1:
        'Adicione as datas da viagem para obter detalhes de cancelamento para este carro.',
      paragraph2:
        'Politica de reembolso devido a cancelamento sem antecedência.',
      paragraph3: 'Extra...'
    }
  ]

  const characteristics = [
    {
      name: 'Zero Emissão',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_emissionFree.svg'
    },
    {
      name: 'Silencioso',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_silence.svg'
    },
    {
      name: 'Autonomia',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_autonomy.svg'
    },
    {
      name: 'Recarregável',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_recharge.svg'
    },
    {
      name: 'Performance',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_performance.svg'
    },
    {
      name: 'Manutenção simplificada',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_maintenance.svg'
    },
    {
      name: 'Rápida aceleração',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_speedest_acceleration.svg'
    },
    {
      name: 'Recarga por frenagem',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_brake_recharge.svg'
    }
  ]

  const [isChecked0, setIsChecked0] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  const [isChecked5, setIsChecked5] = useState(false)
  const [isChecked6, setIsChecked6] = useState(false)
  const [isChecked7, setIsChecked7] = useState(false)

  const handleCheckboxChange0 = () => {
    setIsChecked0(!isChecked0)
  }

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1)
  }
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2)
  }
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3)
  }
  const handleCheckboxChange4 = () => {
    setIsChecked4(!isChecked4)
  }
  const handleCheckboxChange5 = () => {
    setIsChecked5(!isChecked5)
  }
  const handleCheckboxChange6 = () => {
    setIsChecked6(!isChecked6)
  }
  const handleCheckboxChange7 = () => {
    setIsChecked7(!isChecked7)
  }

  return (
    <main className="main">
      <h1>Criar Carro</h1>
      <form>
        <h2>Dados</h2>
        <div className="name-category-fields">
          <div className="name-field">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              required
              onChange={event => validateNameCar(event.target.value)}
              className={`inputValidation ${
                formError.nameCarError ? 'formError' : ''
              }`}
            />
            {formError.nameCarError && (
              <span className="formError">Nome muito curto</span>
            )}
          </div>
          <div className="category">
            <label htmlFor="">Categorias</label>
            <div className="select-category" id="select-category">
              <input
                id="input-select-category"
                className="input-select-category"
                onClick={toogleLocation2}
                onChange={getValueInputCategory}
                placeholder="qual a categoria?"
                value={valueInputCategory}
              />
              <div
                id="showDestination"
                className={
                  showDestination2
                    ? 'container-category-open'
                    : 'container-category-close'
                }
              >
                {inputCategory ? <h3>Categorias por nome</h3> : ''}
                {category.map((category, index) => (
                  <div className="category-list">
                    <SelectCategory
                      id={index.length}
                      data={category}
                      onSelectDestination2={currentDestination => {
                        inputSelected2(currentDestination)
                        setCategoryId(category.id)
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="locale">
            <label htmlFor="">Local</label>
            <div className="select-location" id="select-location">
              <input
                id="input-select-location"
                className="input-select-location"
                onClick={toogleLocation}
                onChange={getValueInputSelect}
                placeholder="qual o local?"
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
          </div>
        </div>
        <div className="description-field">
          <label htmlFor="">Descrição</label>
          <textarea
            name=""
            id=""
            cols="5"
            rows="5"
            required
            onChange={event => validateDescriptionCar(event.target.value)}
            className={`inputValidation ${
              formError.descriptionCarError ? 'formError' : ''
            }`}
          />
          {formError.descriptionCarError && (
            <span className="formError">Descrição muito curta</span>
          )}
        </div>
        <div className="category-fields">
          {/* <AttributeCharacteristic /> */}
          <h2>Caracteristicas</h2>
          {/* {products.map((products, index) => (
            <ListCharacteristics
              key={index}
              id={index.length}
              data={products}
            />
          ))} */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              alignItems: 'center',
              gap: '5%'
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked0}
                onChange={handleCheckboxChange0}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[0].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[0].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckboxChange1}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[1].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[1].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[2].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[2].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked3}
                onChange={handleCheckboxChange3}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[3].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[3].name}</p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              alignItems: 'center',
              gap: '5%'
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked4}
                onChange={handleCheckboxChange4}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[4].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[4].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked5}
                onChange={handleCheckboxChange5}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[5].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[5].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked6}
                onChange={handleCheckboxChange6}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[6].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[6].name}</p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <input
                type="checkbox"
                checked={isChecked7}
                onChange={handleCheckboxChange7}
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src={characteristics[7].icon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              <p>{characteristics[7].name}</p>
            </div>
          </div>
        </div>
        <div>
          <AttributeImage />
        </div>
        <div className="politic-fields">
          <h2>Politicas</h2>
          <div className="politic-field">
            <div className="politic-field-rules">
              <h4>Regras da casa</h4>
              <textarea
                name=""
                id=""
                value={rule[0].paragraph1}
                cols="50"
                rows="2"
                required
                onChange={event => validateRuleCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicRuleCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={rule[0].paragraph2}
                cols="50"
                rows="2"
                required
                onChange={event => validateRuleCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicRuleCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={rule[0].paragraph3}
                cols="50"
                rows="2"
                required
                onChange={event => validateRuleCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicRuleCarError ? 'formError' : ''
                }`}
              ></textarea>
            </div>
            <div className="politic-field-security">
              <h4>Saúde e segurança</h4>
              <textarea
                name=""
                id=""
                value={health[0].paragraph1}
                cols="50"
                rows="2"
                required
                onChange={event => validateHealthCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicHealthCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={health[0].paragraph2}
                cols="50"
                rows="2"
                required
                onChange={event => validateHealthCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicHealthCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={health[0].paragraph3}
                cols="50"
                rows="2"
                required
                onChange={event => validateHealthCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicHealthCarError ? 'formError' : ''
                }`}
              ></textarea>
            </div>
            <div className="politic-field-cancel">
              <h4>Politicas de cancelamento</h4>
              <textarea
                name=""
                id=""
                value={cancel[0].paragraph1}
                cols="50"
                rows="2"
                required
                onChange={event => validateCancelCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicCancelCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={cancel[0].paragraph2}
                cols="50"
                rows="2"
                required
                onChange={event => validateCancelCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicCancelCarError ? 'formError' : ''
                }`}
              ></textarea>
              <textarea
                name=""
                id=""
                value={cancel[0].paragraph3}
                cols="50"
                rows="2"
                required
                onChange={event => validateCancelCar(event.target.value)}
                className={`inputValidation ${
                  formError.politicCancelCarError ? 'formError' : ''
                }`}
              ></textarea>
            </div>
          </div>
        </div>
        {formError.politicRuleCarError && (
          <span
            className="formError"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            Regras da casa muito curta
          </span>
        )}
        {formError.politicHealthCarError && (
          <span
            className="formError"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            Saúde e segurança muito curta
          </span>
        )}
        {formError.politicCancelCarError && (
          <span
            className="formError"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            Politicas de cancelamento muito curta
          </span>
        )}
        <div className="button-form">
          <button
            onClick={event => handleSubmit(event)}
            disabled={!isFormValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}
