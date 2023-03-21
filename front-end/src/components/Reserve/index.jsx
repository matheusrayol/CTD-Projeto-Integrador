import React, { useEffect, useState } from 'react'
import styles from './Reserve.module.scss'
import DateRangePickerComp3 from './DateRangePickerComp3'
import CardReserve from './CardReserve'
import { json } from '../../json/infoProducts'
import { useParams } from 'react-router'

export default function Reserve(image) {
  const product = json

  const params = useParams()
  const [value, setValue] = useState({})

  useEffect(() => {
    setValue(product[params.id - 1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

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
                  type="text"
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
              <DateRangePickerComp3 />
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionCardReserve}>
            <div className={styles.cardBody__grid__sectionCardReserve__card}>
              <CardReserve key={value.id} imageData={value} />
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionDateArrive}>
            <h2>Selecione hora prevista de chegada</h2>
            <div className={styles.cardBody__grid__sectionDateArrive__select}>
              <select placeholder="Sua hora de chegada">
                <option value="0">Selecione hora prevista de chegada</option>
                <option value="1">01:00 AM</option>
                <option value="2">02:00 AM</option>
                <option value="3">03:00 AM</option>
                <option value="4">04:00 AM</option>
                <option value="5">05:00 AM</option>
                <option value="6">06:00 AM</option>
                <option value="7">07:00 AM</option>
                <option value="8">08:00 AM</option>
                <option value="9">09:00 AM</option>
                <option value="10">10:00 AM</option>
                <option value="11">11:00 AM</option>
                <option value="12">12:00 AM</option>
                <option value="1">01:00 PM</option>
                <option value="2">02:00 PM</option>
                <option value="3">03:00 PM</option>
                <option value="4">04:00 PM</option>
                <option value="5">05:00 PM</option>
                <option value="6">06:00 PM</option>
                <option value="7">07:00 PM</option>
                <option value="8">08:00 PM</option>
                <option value="9">09:00 PM</option>
                <option value="10">10:00 PM</option>
                <option value="11">11:00 PM</option>
                <option value="12">12:00 PM</option>
              </select>
            </div>
          </div>
          <div className={styles.cardBody__grid__sectionPolit}>
            <div className={styles.sectionPoliticClose}>
              <h2>Política </h2>
              <p>Oque você precisa saber antes de alugar</p>
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
