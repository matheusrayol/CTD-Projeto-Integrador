import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CardProduct.module.scss'
import iconLocation from '../../assets/iconLocation.svg'
import iconShare from '../../assets/iconShare.svg'
import iconHearth from '../../assets/iconHearth.svg'

import WSPGallery from '../CardGallery/WSPGallery'

import id1 from '../../assets/img1.jpg'
import id2 from '../../assets/img2.jpg'
import id3 from '../../assets/img3.jpg'
import id4 from '../../assets/img4.jpg'

export default function CardProduct(image) {
  const [buttonOpen, setButtonOpen] = useState(true)

  const galleryImages = [
    {
      img: id1
    },
    {
      img: id2
    },
    {
      img: id3
    },
    {
      img: id4
    },
    {
      img: 'https://s2.glbimg.com/FHEje3o5fdk3qhdRORIRL66lvrg=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/6/t/2vzlWQT9WWiBQi9yfLJQ/2019-01-28-iev-40-2-2.jpg'
    }
  ]

  return (
    <div className={styles.item} key={image.imageData.id}>
      <div className={styles.cardBody}>
        <div className={styles.cardBody__sectionBack}>
          <div className={styles.cardBody__sectionBack__p}>
            <p>{image.imageData.category}</p>
            <p>{image.imageData.title}</p>
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
              Rated: <span>{image.imageData.rated}</span>
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
          <WSPGallery galleryImages={galleryImages} />
        </div>
        <div className={styles.cardBody__sectionDescription}>
          <h2>
            Veja por que alugar o <span>{image.imageData.title}</span>
          </h2>
          <div className={styles.cardBody__sectionDescription__lines}>
            <div>
              <p>{image.imageData.descriptionLine2}</p>
              <p>{image.imageData.descriptionLine3}</p>
              <p>{image.imageData.descriptionLine4}</p>
              <p>{image.imageData.descriptionLine5}</p>
            </div>
            <div>
              <p>{image.imageData.descriptionLine6}</p>
              <p>{image.imageData.descriptionLine7}</p>
              <p>{image.imageData.descriptionLine8}</p>
              <p>{image.imageData.descriptionLine9}</p>
            </div>
          </div>
          <p>Disponibilidade: 5</p>
          <div>
            <div className={styles.sectionPolitic}>
              <p>Política: </p>

              {buttonOpen === true ? (
                <div>
                  <button
                    className={styles.buttonPolitic}
                    onClick={() => setButtonOpen(false)}
                  >
                    Abrir
                  </button>
                </div>
              ) : (
                <div className={styles.sectionPoliticClose}>
                  <button
                    className={styles.buttonPolitic}
                    onClick={() => setButtonOpen(true)}
                  >
                    Fechar
                  </button>
                  <p>{image.imageData.politic}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
