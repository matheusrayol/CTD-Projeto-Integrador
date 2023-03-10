import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CardProduct.module.scss'
import iconLocation from '../../assets/iconLocation.svg'
import iconShare from '../../assets/iconShare.svg'
import iconHearth from '../../assets/iconHearth.svg'
import WSPGallery from '../CardGallery/WSPGallery'

export default function CardProduct(image) {
  const [buttonOpen, setButtonOpen] = useState(true)

  const galleryImages = [
    {
      img: image.imageData.img1
    },
    {
      img: image.imageData.img2
    },
    {
      img: image.imageData.img3
    },
    {
      img: image.imageData.img4
    },
    {
      img: image.imageData.img5
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
          <WSPGallery galleryImages={galleryImages} />
        </div>
        <div className={styles.cardBody__sectionDescription}>
          <div className={styles.cardBody__sectionDescription__lines}>
            <div>
              <h2>Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum.
              </p>
              <h3>Qualificação</h3>
              <p>
                Os carros da NotCars como o {image.imageData.title} são
                perfeitos para você ...
              </p>
              <p>provavelmente uma questão voltada para a nossa marca.</p>
            </div>
          </div>
        </div>
        <div className={styles.cardBody__sectionCharacteristics}>
          <h2>
            Veja por que alugar o <span>{image.imageData.title}</span>
          </h2>
          <div className={styles.cardBody__sectionCharacteristics__lines}>
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
                  <p>Normas: Título e descrição.</p>
                  <p>Segurança: Título e descrição.</p>
                  <p>Cancelamento: Título e descrição.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
