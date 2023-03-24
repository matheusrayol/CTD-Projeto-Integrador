import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CardProduct.module.scss'
import iconLocation from '../../assets/iconLocation.svg'
import iconShare from '../../assets/iconShare.svg'
import iconHearth from '../../assets/iconHearth.svg'
import GalleryPageProduct from '../CardGallery/GalleryPageProduct'
import DateRangePickerComp2 from './DateRangePickerComp2'

export default function CardProduct(image) {
  const [buttonOpen, setButtonOpen] = useState(true)

  const galleryImages = [
    {
      img: image.imageData.images[0].urlImage
    },
    {
      img: image.imageData.images[0].urlImage
    },
    {
      img: image.imageData.images[0].urlImage
    },
    {
      img: image.imageData.images[0].urlImage
    },
    {
      img: image.imageData.images[0].urlImage
    }
  ]
  return (
    <div className={styles.item} key={image.imageData.id} id="item">
      <div className={styles.cardBody} id="cardBody">
        <div
          className={styles.cardBody__sectionBack}
          id="cardBody__sectionBack"
        >
          <div
            className={styles.cardBody__sectionBack__p}
            id="cardBody__sectionBack__p"
          >
            <p>{image.imageData.name}</p>
            <p>{image.imageData.description}</p>
          </div>
          <Link to="/home" id="cardBody__sectionBack__link">
            <button
              className={styles.cardBody__sectionBack__button}
              id="cardBody__sectionBack__button"
            >
              Voltar
            </button>
          </Link>
        </div>
        <div
          className={styles.cardBody__sectionTittle}
          id="cardBody__sectionTittle"
        >
          <div
            className={styles.cardBody__sectionTittle__p}
            id="cardBody__sectionTittle__p"
          >
            <div
              className={styles.cardBody__sectionTittle__pLoc}
              id="cardBody__sectionTittle__pLoc"
            >
              <img
                src={iconLocation}
                alt="icone localização"
                className={styles.cardBody__sectionTittle__img}
                id="cardBody__sectionTittle__img"
              />
              <p id="cardBody__sectionTittle__oLoc_p1">
                {image.imageData.city.name}
              </p>
            </div>
            <p id="cardBody__sectionTittle__oLoc_p2">
              {image.imageData.city.country}
            </p>
          </div>
          <div
            className={styles.cardBody__sectionTittle__pRated}
            id="cardBody__sectionTittle__pRated"
          >
            <p>
              {/* Avaliação: <span>{image.imageData.rated}</span> */}
              <span>Avaliação: 4.5</span>
            </p>
          </div>
        </div>
        <div
          className={styles.cardBody__sectionIcons}
          id="cardBody__sectionIcons"
        >
          <img
            src={iconShare}
            alt="icone Compartilhar"
            className={styles.cardBody__sectionIcons__img}
            id="cardBody__sectionIcons__img"
          />
          <img
            src={iconHearth}
            alt="icone Coração"
            className={styles.cardBody__sectionIcons__img}
            id="cardBody__sectionIcons__img"
          />
        </div>
        <div
          className={styles.cardBody__sectionGallery}
          id="cardBody__sectionGallery"
        >
          <GalleryPageProduct galleryImages={galleryImages} />
        </div>
        <div
          className={styles.cardBody__sectionDescription}
          id="cardBody__sectionDescription"
        >
          <div
            className={styles.cardBody__sectionDescription__lines}
            id="cardBody__sectionDescription__lines"
          >
            <div id="cardBody__sectionDescription__lines__div">
              <h2 id="cardBody__sectionDescription__lines__div__h2">
                Veja por que alugar o {image.imageData.name}
              </h2>
              <p id="cardBody__sectionDescription__lines__div__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.cardBody__sectionCharacteristics}
          id="cardBody__sectionCharacteristics"
        >
          <div
            className={styles.cardBody__sectionCharacteristics__title}
            id="cardBody__sectionCharacteristics__title"
          >
            <h2 id="cardBody__sectionCharacteristics__title__h2">
              Informações adicionais
            </h2>
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines1}
            id="cardBody__sectionCharacteristics__lines1"
          >
            {/* <p>{image.imageData.descriptionLine2}</p> */}
            <p>Preço por diaria:R$ 199.95</p>
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines2}
            id="cardBody__sectionCharacteristics__lines2"
          >
            {/* <p>{image.imageData.descriptionLine3}</p> */}
            <p>Baterias: 92,8 kWh</p>
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines3}
            id="cardBody__sectionCharacteristics__lines3"
          >
            <p>Potência: 413 cv</p>
            {/* <p>{image.imageData.descriptionLine4}</p> */}
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines4}
            id="cardBody__sectionCharacteristics__lines4"
          >
            <p>Torque: 67,3 kgfm</p>
            {/* <p>{image.imageData.descriptionLine5}</p> */}
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines5}
            id="cardBody__sectionCharacteristics__lines5"
          >
            <p>Autonomia: 418 km (WLTP)</p>
            {/* <p>{image.imageData.descriptionLine6}</p> */}
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines6}
            id="cardBody__sectionCharacteristics__lines6"
          >
            <p>
              Tempo de recarga: 40 min (0 a 80%) - carga rápida; 8 horas -
              Wallbox; NI - 220V
            </p>
            {/* <p>{image.imageData.descriptionLine7}</p> */}
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines7}
            id="cardBody__sectionCharacteristics__lines7"
          >
            <p>0 a 100 km/h: 4,9 s</p>
            {/* <p>{image.imageData.descriptionLine8}</p> */}
          </div>
          <div
            className={styles.cardBody__sectionCharacteristics__lines8}
            id="cardBody__sectionCharacteristics__lines8"
          >
            <p>Ar condicionado incluso</p>
            {/* <p>{image.imageData.descriptionLine9}</p> */}
          </div>
        </div>
        <div
          className={styles.cardBody__sectionReservation}
          id="cardBody__sectionReservation"
        >
          <div
            className={styles.cardBody__sectionReservation__title}
            id="cardBody__sectionReservation__title"
          >
            <h2>Datas Disponíveis</h2>
          </div>
          <div
            className={styles.cardBody__sectionReservation__calendar}
            id="cardBody__sectionReservation__calendar"
          >
            <DateRangePickerComp2 id="DateRangePickerComp2" />
          </div>
          <div
            className={styles.cardBody__sectionReservation__reserve}
            id="cardBody__sectionReservation__reserve"
          >
            <p>Informe as datas pretenditas para realizar a locação do</p>
            <p>{image.imageData.title}</p>
            <Link
              key={image.imageData.id}
              to={`../product/${image.imageData.id}/reserve`}
              id="LinkToReserve"
            >
              <button
                className={styles.buttonReservation}
                id="buttonReservation"
              >
                Iniciar Reserva
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.sectionPolitic} id="sectionPolitic">
            {buttonOpen === true ? (
              <div id="sectionPolitic__div">
                <h2 id="sectionPolitic__div__h2">Política </h2>
                <button
                  className={styles.buttonPolitic}
                  onClick={() => setButtonOpen(false)}
                  id="buttonPoliticOpen"
                >
                  Oque você precisa saber - ABRIR
                </button>
              </div>
            ) : (
              <div
                className={styles.sectionPoliticClose}
                id="sectionPoliticClose"
              >
                <h2 id="sectionPoliticClose__div__h2">Política </h2>
                <button
                  className={styles.buttonPolitic}
                  onClick={() => setButtonOpen(true)}
                  id="buttonPoliticClose"
                >
                  Oque você precisa saber - FECHAR
                </button>
                <div
                  className={styles.sectionPoliticClose__div}
                  id="sectionPoliticClose__div"
                >
                  <div
                    className={styles.sectionPoliticClose__norms}
                    id="sectionPoliticClose__norms"
                  >
                    <h3 id="sectionPoliticClose__norms__title">
                      Normas de locação
                    </h3>
                    <p>Atraso max: 15min</p>
                    <p>Não é permitido desativar sistemas do carro</p>
                    <p>Não fumar ou beber no carro</p>
                  </div>
                  <div
                    className={styles.sectionPoliticClose__health}
                    id="sectionPoliticClose__health__title"
                  >
                    <h3>Saúde e segurança</h3>
                    <p>Entregue limpo e higienizado</p>
                    <p>Possui sistema de frenagem automatico</p>
                    <p>Sistemas de direção e bancos ergonômicos</p>
                  </div>
                  <div
                    className={styles.sectionPoliticClose__politics}
                    id="sectionPoliticClose__politics__title"
                  >
                    <h3>Políticas de cancelamento</h3>
                    <p>
                      Adicione as datas da viagem para obter detalhes de
                      cancelamento para este carro.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
