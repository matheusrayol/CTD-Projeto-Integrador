import React, { useState } from 'react'
import styles from './Reserve.module.scss'
import DateRangePickerComp3 from './DateRangePickerComp3'
import { Link } from 'react-router-dom'
import { addDays, format } from 'date-fns'
import { useAuth } from '../../hooks/useAuth'

import { useNavigate } from 'react-router'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Reserve(image) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 7))
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const handleRangeChange = newRange => {
    setStartDate(newRange.startDate)
    setEndDate(newRange.endDate)
    localStorage.setItem('startDate', newRange.startDate)
    localStorage.setItem('endDate', newRange.endDate)
  }

  const [horaChegada, setHoraChegada] = useState(false)
  const { logout, auth, name, surname, email } = useAuth()

  function handleChange(event) {
    setHoraChegada(event.target.value)
  }

  function checkReservation(e) {
    e.preventDefault()
    if (startDate && endDate && horaChegada) {
      const startDateInput = format(startDate, 'yyyy-MM-dd')
      const endDateInput = format(endDate, 'yyyy-MM-dd')

      const payload = {
        hourStartReservation: horaChegada,
        dateBegin: startDateInput,
        dateEnd: endDateInput,
        userEmail: email,
        productId: image.imageData.id
      }
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          authorization: `Bearer ${auth}`
        },
        body: JSON.stringify(payload)
      }
      fetch('/reservation/create', config).then(response => {
        if (response.status === 201) {
          navigate(`../product/${image.imageData.id}/reserve/create`)
        }
        console.log(response)
        if (response.status === 403) {
          MySwal.fire({
            icon: 'warning',
            text: 'Faça o login novamente'
          })
          logout()
          navigate('/login')
        }
      })
    } else {
      MySwal.fire({
        icon: 'error',
        text: 'Campos solicitados não preenchidos!'
      })
    }
  }

  return (
    <div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardBody__grid}>
          <div className={styles.cardBody__grid__sectionClientDates}>
            <div className={styles.cardBody__grid__sectionClientDates__title}>
              <h2>Complete seus dados</h2>
            </div>
            <div className={styles.cardBody__grid__sectionClientDates__dates}>
              <div
                className={
                  styles.cardBody__grid__sectionClientDates__dates__name
                }
              >
                <label
                  htmlFor=""
                  className={styles.cardBody__grid__sectionClientDates__label}
                >
                  Nome
                </label>
                <input
                  disabled
                  value={name}
                  type="text"
                  className={styles.cardBody__grid__sectionClientDates__input}
                />
              </div>
              <div
                className={
                  styles.cardBody__grid__sectionClientDates__dates__surname
                }
              >
                <label
                  htmlFor=""
                  className={styles.cardBody__grid__sectionClientDates__label}
                >
                  Sobrenome
                </label>
                <input
                  disabled
                  value={surname}
                  type="text"
                  className={styles.cardBody__grid__sectionClientDates__input}
                />
              </div>
              <div
                className={
                  styles.cardBody__grid__sectionClientDates__dates__email
                }
              >
                <label
                  htmlFor=""
                  className={styles.cardBody__grid__sectionClientDates__label}
                >
                  Email
                </label>
                <input
                  disabled
                  type="text"
                  value={email}
                  className={styles.cardBody__grid__sectionClientDates__input}
                />
              </div>
              <div
                className={
                  styles.cardBody__grid__sectionClientDates__dates__city
                }
              >
                <label
                  htmlFor=""
                  className={styles.cardBody__grid__sectionClientDates__label}
                >
                  Cidade
                </label>
                <input
                  type="text"
                  className={styles.cardBody__grid__sectionClientDates__input}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionReservation}>
            <div className={styles.cardBody__grid__sectionReservation__title}>
              <h2>Selecione uma data para reserva</h2>
            </div>
            <div
              className={styles.cardBody__grid__sectionReservation__calendar}
            >
              <DateRangePickerComp3 onRangeChange={handleRangeChange} />
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionCardReserve}>
            <div className={styles.cardBody__grid__sectionCardReserve__card}>
              <div className={styles.item} key={image.imageData.id}>
                <div className={styles.item__buttonBack}>
                  <Link to={`/product/${image.imageData.id}`}>
                    <button>Voltar</button>
                  </Link>
                </div>

                <div className={styles.cardBody}>
                  <div>
                    <h2>Detalhes da reserva</h2>
                  </div>
                  <div className={styles.cardImg}>
                    <img
                      src={image.imageData.images[0].urlImage}
                      alt={image.imageData.name}
                    />
                  </div>
                  <div className={styles.cardBody__info}>
                    <p>{image.imageData.category.qualification}</p>
                    <p>{image.imageData.name}</p>
                    <p>
                      {image.imageData.city.name}, {image.imageData.city.state},{' '}
                      {image.imageData.city.country}
                    </p>
                  </div>
                  <div className={styles.cardBody__check}>
                    <div className={styles.cardBody__check__checkIn}>
                      <p>Check-In</p>
                      <p>{format(startDate, 'dd/MM/yyyy')}</p>
                    </div>
                    <div className={styles.cardBody__check__checkOut}>
                      <p>Check-Out</p>
                      <p> {format(endDate, 'dd/MM/yyyy')}</p>
                    </div>
                    <div className={styles.cardBody__check__checkOut}>
                      <p>Hora de chegada prevista</p>
                      <p>{horaChegada}</p>
                    </div>
                  </div>
                  <div className={styles.cardBody__confirmButton}>
                    <Link key={image.imageData.id}>
                      <button onClick={checkReservation}>
                        Confirmar Reserva
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionDateArrive}>
            <h2>Selecione hora prevista de chegada</h2>
            <div className={styles.cardBody__grid__sectionDateArrive__select}>
              <select value={horaChegada} onChange={handleChange}>
                <option value="">Selecione hora prevista de chegada</option>
                <option value="01:00:00">01:00 AM</option>
                <option value="02:00:00">02:00 AM</option>
                <option value="03:00:00">03:00 AM</option>
                <option value="04:00:00">04:00 AM</option>
                <option value="05:00:00">05:00 AM</option>
                <option value="06:00:00">06:00 AM</option>
                <option value="07:00:00">07:00 AM</option>
                <option value="08:00:00">08:00 AM</option>
                <option value="09:00:00">09:00 AM</option>
                <option value="10:00:00">10:00 AM</option>
                <option value="11:00:00">11:00 AM</option>
                <option value="12:00:00">12:00 AM</option>
                <option value="13:00:00">01:00 PM</option>
                <option value="14:00:00">02:00 PM</option>
                <option value="15:00:00">03:00 PM</option>
                <option value="16:00:00">04:00 PM</option>
                <option value="17:00:00">05:00 PM</option>
                <option value="18:00:00">06:00 PM</option>
                <option value="19:00:00">07:00 PM</option>
                <option value="20:00:00">08:00 PM</option>
                <option value="21:00:00">09:00 PM</option>
                <option value="22:00:00">10:00 PM</option>
                <option value="23:00:00">11:00 PM</option>
                <option value="00:00:00">12:00 PM</option>
              </select>
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionPolit}>
            <div className={styles.sectionPoliticClose}>
              <h2>Política </h2>
              <div className={styles.sectionPoliticClose__pFirst}>
                <p>Oque você precisa saber antes de alugar</p>
              </div>
              <div className={styles.sectionPoliticClose__div}>
                <div className={styles.sectionPoliticClose__norms}>
                  <h3>Normas de locação</h3>
                  <p>Atraso max: 15min</p>
                  <p>Não é permitido desativar sistemas do carro</p>
                  <p>Não fumar ou beber no carro</p>
                </div>
                <div className={styles.sectionPoliticClose__health}>
                  <h3>Saúde e segurança</h3>
                  <p>Entregue limpo e higienizado</p>
                  <p>Possui sistema de frenagem automatico</p>
                  <p>Sistemas de direção e bancos ergonômicos</p>
                </div>
                <div className={styles.sectionPoliticClose__politics}>
                  <h3>Políticas de cancelamento</h3>
                  <p>
                    Adicione as datas da viagem para obter detalhes de
                    cancelamento para este carro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
