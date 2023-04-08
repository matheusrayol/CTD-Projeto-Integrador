/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react'
import './CardCreateProduct.scss'
import { SelectLocale } from '../SelectLocale'
import { SelectCategory } from '../SelectCategory'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'

export default function CardCreateProduct() {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const [nameCar, setNameCar] = useState('')
  const [descriptionCar, setDescriptionCar] = useState('')

  const [sustainabilityValue, setSustainabilityValue] = useState('')

  // const [characteristicField, setCharacteristicField] = useState('')

  const [nameImage1, setNameImage1] = useState('')
  const [urlImage1, setUrlImage1] = useState('')
  const [nameImage2, setNameImage2] = useState('')
  const [urlImage2, setUrlImage2] = useState('')
  const [nameImage3, setNameImage3] = useState('')
  const [urlImage3, setUrlImage3] = useState('')
  const [nameImage4, setNameImage4] = useState('')
  const [urlImage4, setUrlImage4] = useState('')
  const [nameImage5, setNameImage5] = useState('')
  const [urlImage5, setUrlImage5] = useState('')

  ////////////////////////////////////////CAMPO LOCAL//////////////////////////////////////////////
  // const's para fazer abertura e fechamento campo local com os dados
  const [showDestination, setShowDestination] = useState(false)
  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')
  const [cityId, setCityId] = useState('')

  //Fetch de todas as cidades para pegar o ID do retorno para o fetch da crição
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
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////CAMPO CATEGORIA////////////////////////////////////////////
  // const's para fazer abertura e fechamento campo categoria com os dados
  const [showDestination2, setShowDestination2] = useState(false)
  const [inputCategory, setInputCategory] = useState(true)
  const [valueInputCategory, setValueInputCategory] = useState('')
  const [categoryId, setCategoryId] = useState('')

  //Fetch de todas as categorias para pegar o ID do retorno para o fetch da crição
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

  // const que fecha o toggle caso o input escolhido tenha sido clicado
  const inputSelected2 = categoryName => {
    setValueInputCategory(categoryName)
    setShowDestination2(false)
  }

  // const pega valor input quando selecionado
  const getSustentabilityValue = event => {
    setSustainabilityValue(event.target.value)
    // if (sustainabilityValue < 0 || sustainabilityValue > 100) {
    //   alert('ta tudo errado ....')
    // }
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
  /////////////////////////////////////////////////////////////////////////////////////////////////

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
      id: 3,
      name: 'Zero Emissão',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_emissionFree.svg'
    },
    {
      id: 4,
      name: 'Silencioso',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_silence.svg'
    },
    {
      id: 5,
      name: 'Autonomia',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_autonomy.svg'
    },
    {
      id: 6,
      name: 'Recarregável',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_recharge.svg'
    },
    {
      id: 7,
      name: 'Performance',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_performance.svg'
    },
    {
      id: 8,
      name: 'Manutenção simplificada',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_maintenance.svg'
    },
    {
      id: 9,
      name: 'Rápida aceleração',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_speedest_acceleration.svg'
    },
    {
      id: 10,
      name: 'Recarga por frenagem',
      icon: 'https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/icon_brake_recharge.svg'
    }
  ]

  // const que valida os campos para habilitar o botao para envio do fetch
  const isFormValid =
    nameCar &&
    inputSelect &&
    inputCategory &&
    descriptionCar &&
    sustainabilityValue &&
    nameImage1 &&
    nameImage2 &&
    nameImage3 &&
    nameImage4 &&
    nameImage5
  // && characteristics

  // Const de form erro para validação visual
  const [formError, setFormError] = useState({
    nameCarError: false,
    inputSelectError: false,
    inputCategoryError: false,
    descriptionCarError: false,
    sustainabilityValueError: false,
    nameImage1Error: false,
    nameImage2Error: false,
    nameImage3Error: false,
    nameImage4Error: false,
    nameImage5Error: false,
    // characteristics: false,
    genericError: false
  })

  const validateNameCar = nameCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameCar.length > 3) {
      setFormError(prevState => ({ ...prevState, nameCarError: false }))
      setNameCar(nameCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameCarError: true }))
      return false
    }
  }

  // const validateInputSelect = inputSelect => {
  //   setFormError(prevState => ({ ...prevState, genericError: false }))

  //   if (inputSelect !== null || inputSelect !== '') {
  //     setFormError(prevState => ({ ...prevState, inputSelectError: false }))
  //     setInputSelect(inputSelect)
  //     return true
  //   } else {
  //     setFormError(prevState => ({ ...prevState, inputSelectError: true }))
  //     return false
  //   }
  // }

  // const validateInputCategory = inputCategory => {
  //   setFormError(prevState => ({ ...prevState, genericError: false }))

  //   if (inputCategory !== null || inputCategory !== '') {
  //     setFormError(prevState => ({ ...prevState, inputCategoryError: false }))
  //     setInputCategory(inputCategory)
  //     return true
  //   } else {
  //     setFormError(prevState => ({ ...prevState, inputCategoryError: true }))
  //     return false
  //   }
  // }

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

  const validateSustainabilityValue = sustainabilityValue => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (sustainabilityValue.length > 3) {
      setFormError(prevState => ({
        ...prevState,
        sustainabilityValueError: false
      }))
      setSustainabilityValue(sustainabilityValue)
      return true
    } else {
      setFormError(prevState => ({
        ...prevState,
        sustainabilityValueError: true
      }))
      return false
    }
  }

  const validateNameImage1Car = nameImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameImageCar !== null) {
      setFormError(prevState => ({ ...prevState, nameImageCarError: false }))
      setNameImage1(nameImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameImageCarError: true }))
      return false
    }
  }

  const validateUrlImage1Car = urlImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (urlImageCar !== null) {
      setFormError(prevState => ({ ...prevState, urlImageCarError: false }))
      setUrlImage1(urlImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, urlImageCarError: true }))
      return false
    }
  }

  const validateNameImage2Car = nameImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameImageCar !== null) {
      setFormError(prevState => ({ ...prevState, nameImageCarError: false }))
      setNameImage2(nameImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameImageCarError: true }))
      return false
    }
  }

  const validateUrlImage2Car = urlImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (urlImageCar !== null) {
      setFormError(prevState => ({ ...prevState, urlImageCarError: false }))
      setUrlImage2(urlImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, urlImageCarError: true }))
      return false
    }
  }

  const validateNameImage3Car = nameImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameImageCar !== null) {
      setFormError(prevState => ({ ...prevState, nameImageCarError: false }))
      setNameImage3(nameImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameImageCarError: true }))
      return false
    }
  }

  const validateUrlImage3Car = urlImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (urlImageCar !== null) {
      setFormError(prevState => ({ ...prevState, urlImageCarError: false }))
      setUrlImage3(urlImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, urlImageCarError: true }))
      return false
    }
  }

  const validateNameImage4Car = nameImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameImageCar !== null) {
      setFormError(prevState => ({ ...prevState, nameImageCarError: false }))
      setNameImage4(nameImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameImageCarError: true }))
      return false
    }
  }

  const validateUrlImage4Car = urlImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (urlImageCar !== null) {
      setFormError(prevState => ({ ...prevState, urlImageCarError: false }))
      setUrlImage4(urlImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, urlImageCarError: true }))
      return false
    }
  }

  const validateNameImage5Car = nameImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (nameImageCar !== null) {
      setFormError(prevState => ({ ...prevState, nameImageCarError: false }))
      setNameImage5(nameImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameImageCarError: true }))
      return false
    }
  }

  const validateUrlImage5Car = urlImageCar => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (urlImageCar !== null) {
      setFormError(prevState => ({ ...prevState, urlImageCarError: false }))
      setUrlImage5(urlImageCar)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, urlImageCarError: true }))
      return false
    }
  }

  // const validateCharacteristicField = characteristics => {
  //   setFormError(prevState => ({ ...prevState, genericError: false }))

  //   if (characteristics !== null || characteristics !== '') {
  //     setFormError(prevState => ({ ...prevState, characteristicsError: false }))
  //     setCharacteristicField(characteristics)
  //     return true
  //   } else {
  //     setFormError(prevState => ({ ...prevState, characteristicsError: true }))
  //     return false
  //   }
  // } como validar checked?

  const createProductFetch = e => {
    e.preventDefault()

    let signInData = {
      name: nameCar,
      categoryId: categoryId,
      cityId: cityId,
      sustainability: sustainabilityValue,
      description: descriptionCar,
      characteristics: [
        characteristics[0].id,
        characteristics[1].id,
        characteristics[2].id,
        characteristics[3].id,
        characteristics[4].id,
        characteristics[5].id,
        characteristics[6].id,
        characteristics[7].id
      ],
      images: [
        {
          title: nameImage1,
          urlImage: urlImage1
        },
        {
          title: nameImage2,
          urlImage: urlImage2
        },
        {
          title: nameImage3,
          urlImage: urlImage3
        },
        {
          title: nameImage4,
          urlImage: urlImage4
        },
        {
          title: nameImage5,
          urlImage: urlImage5
        }
      ]
      //politic: [rule, health, cancel]
    }

    let requestConfiguration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        authorization: `Bearer ${auth}`
      },
      body: JSON.stringify(signInData)
    }

    if (validateNameCar) {
      fetch(`/product/create`, requestConfiguration).then(response => {
        if (response.ok) {
          response.json().then(data => {
            alert('Produto Criado com Sucesso!')
            navigate(`../accountadmin/createProduct/sucess`)
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
            nameCarError: false
          })
        }
      })
    }
  }

  return (
    <main className="main">
      <h1>Criar Carro</h1>
      <form>
        <h2>Dados</h2>
        <div className="name-category-fields">
          <div className="name-field">
            <label htmlFor="">Nome do Carro</label>
            <input
              type="text"
              onChange={event => validateNameCar(event.target.value)}
              className={`inputValidation ${
                formError.nameCarError ? 'formError' : ''
              }`}
            />
            {formError.nameCarError && (
              <span className="formError">Nome muito curto</span>
            )}
          </div>
          <div className="locale">
            <label htmlFor="">Local</label>
            <div className="select-location" id="select-location">
              <input
                id="input-select-location"
                className="input-select-location"
                onClick={toogleLocation}
                value={valueInputSelect}
                onChange={getValueInputSelect}
              />
              <div
                id="showDestination"
                className={
                  showDestination
                    ? 'container-location-open'
                    : 'container-location-close'
                }
              >
                {inputSelect ? <h3>Filial agregada</h3> : ''}
                {location.map((location, index) => (
                  <div className="location-list">
                    <SelectLocale
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
          <div className="category">
            <label htmlFor="">Categoria</label>
            <div className="select-category">
              <input
                className="input-select-category"
                onClick={toogleLocation2}
                onChange={getValueInputCategory}
                value={valueInputCategory}
              />
              <div
                className={
                  showDestination2
                    ? 'container-category-open'
                    : 'container-category-close'
                }
              >
                {inputCategory ? <h3>Categoria por id</h3> : ''}
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
          <div className="sustentability">
            <div className="select-sustentability">
              <label>Sustentabilidade</label>
              <input
                type="text"
                value={sustainabilityValue}
                onChange={getSustentabilityValue}
                placeholder="0 ~ 100"
              />
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
          <h2>Caracteristicas</h2>
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
          <h2>Imagens</h2>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Nome Imagem</label>
              <input
                type="text"
                onChange={event => validateNameImage1Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
                className={`inputValidation ${
                  formError.nameImage1Error ? 'formError' : ''
                }`}
              />
              {formError.nameImage1Error && (
                <span className="formError">
                  Nome da imagem muito curto ou nulo
                </span>
              )}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Url Imagem</label>
              <input
                type="text"
                onChange={event => validateUrlImage1Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Nome Imagem</label>
              <input
                type="text"
                onChange={event => validateNameImage2Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Url Imagem</label>
              <input
                type="text"
                onChange={event => validateUrlImage2Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Nome Imagem</label>
              <input
                type="text"
                onChange={event => validateNameImage3Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Url Imagem</label>
              <input
                type="text"
                onChange={event => validateUrlImage3Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Nome Imagem</label>
              <input
                type="text"
                onChange={event => validateNameImage4Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Url Imagem</label>
              <input
                type="text"
                onChange={event => validateUrlImage4Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Nome Imagem</label>
              <input
                type="text"
                onChange={event => validateNameImage5Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
              <label htmlFor="">Url Imagem</label>
              <input
                type="text"
                onChange={event => validateUrlImage5Car(event.target.value)}
                style={{
                  padding: '0.5rem 2rem',
                  borderRadius: '0.5rem',
                  width: '400px'
                }}
              />
            </div>
          </div>
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
                // onChange={event => validateRuleCar(event.target.value)}
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
                // onChange={event => validateRuleCar(event.target.value)}
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
                // onChange={event => validateRuleCar(event.target.value)}
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
                // onChange={event => validateHealthCar(event.target.value)}
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
                // onChange={event => validateHealthCar(event.target.value)}
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
                // onChange={event => validateHealthCar(event.target.value)}
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
                // onChange={event => validateCancelCar(event.target.value)}
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
                // onChange={event => validateCancelCar(event.target.value)}
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
                // onChange={event => validateCancelCar(event.target.value)}
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
            onClick={event => createProductFetch(event)}
            disabled={!isFormValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}
