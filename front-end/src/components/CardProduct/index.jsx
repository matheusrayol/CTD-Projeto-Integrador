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
      img: image.imageData.picture1
    },
    {
      img: image.imageData.picture2
    },
    {
      img: image.imageData.picture3
    },
    {
      img: image.imageData.picture4
    },
    {
      img: image.imageData.picture5
    }
  ]

  return (
    <div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardBody__sectionBack}>
          <div className={styles.cardBody__sectionBack__p}>
            <p>{image.imageData.title}</p>
            <p>{image.imageData.category}</p>
          </div>
          <Link to="/home">
            <button className={styles.cardBody__sectionBack__button}>
              Voltar
            </button>
          </Link>
        </div>
        <div className={styles.cardBody__sectionTittle}>
          <div className={styles.cardBody__sectionTittle__p}>
            <div className={styles.cardBody__sectionTittle__pLoc}>
              <img
                src={iconLocation}
                alt="icone localização"
                className={styles.cardBody__sectionTittle__img}
              />
              <p>{image.imageData.location}</p>
            </div>
            <p>{image.imageData.adress}</p>
          </div>
          <div className={styles.cardBody__sectionTittle__pRated}>
            <p>
              Avaliação: <span>{image.imageData.rated}</span>
            </p>
          </div>
        </div>
        <div className={styles.cardBody__sectionIcons}>
          <img
            src={iconShare}
            alt="icone Compartilhar"
            className={styles.cardBody__sectionIcons__img}
          />
          <img
            src={iconHearth}
            alt="icone Coração"
            className={styles.cardBody__sectionIcons__img}
          />
        </div>
        <div className={styles.cardBody__sectionGallery}>
          <GalleryPageProduct galleryImages={galleryImages} />
        </div>
        <div className={styles.cardBody__sectionDescription}>
          <div className={styles.cardBody__sectionDescription__lines}>
            <div>
              <h2>Veja por que alugar o {image.imageData.title}</h2>
              <p>
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
        <div className={styles.cardBody__sectionCharacteristics}>
          <div className={styles.cardBody__sectionCharacteristics__title}>
            <h2>Informações adicionais</h2>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines1}>
            <p>{image.imageData.descriptionLine2}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines2}>
            <p>{image.imageData.descriptionLine3}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines3}>
            <p>{image.imageData.descriptionLine4}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines4}>
            <p>{image.imageData.descriptionLine5}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines5}>
            <p>{image.imageData.descriptionLine6}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines6}>
            <p>{image.imageData.descriptionLine7}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines7}>
            <p>{image.imageData.descriptionLine8}</p>
          </div>
          <div className={styles.cardBody__sectionCharacteristics__lines8}>
            <p>{image.imageData.descriptionLine9}</p>
          </div>
        </div>
        <div className={styles.cardBody__sectionReservation}>
          <div className={styles.cardBody__sectionReservation__title}>
            <h2>Datas Disponíveis</h2>
          </div>
          <div className={styles.cardBody__sectionReservation__calendar}>
            <DateRangePickerComp2 />
          </div>
          <div className={styles.cardBody__sectionReservation__reserve}>
            <p>Informe as datas pretenditas para realizar a locação do</p>
            <p>{image.imageData.title}</p>
            <Link
              key={image.id}
              to={`../product/${image.imageData.id}/reserve`}
            >
              <button className={styles.buttonReservation}>
                Iniciar Reserva
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.sectionPolitic}>
            {buttonOpen === true ? (
              <div>
                <h2>Política </h2>
                <button
                  className={styles.buttonPolitic}
                  onClick={() => setButtonOpen(false)}
                >
                  Oque você precisa saber - ABRIR
                </button>
              </div>
            ) : (
              <div className={styles.sectionPoliticClose}>
                <h2>Política </h2>
                <button
                  className={styles.buttonPolitic}
                  onClick={() => setButtonOpen(true)}
                >
                  Oque você precisa saber - FECHAR
                </button>
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
