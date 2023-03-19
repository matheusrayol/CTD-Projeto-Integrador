import { Link } from 'react-router-dom'
import styles from './CardProduto.module.scss'
import starRated from '../../assets/starRated.svg'
import React from 'react'

export function CardProduct(props) {
  console.log(props.data.city.name, props.data.city.country)
  return (
    <div className={styles.item}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          {/* <img src={props.data.images.urlImage} alt={props.data.images.title} /> */}
        </div>
        <div className={styles.cardParagraph}>
          <div className={styles.cardParagraph__starRated}>
            <div>
              <p>Avaliação: 4.5</p>
              {/* <p>Avaliação: {props.data.rated}</p> */}
            </div>
            <div>
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
              <img src={starRated} alt="svg de uma estrela" />
            </div>
          </div>
          <p>{props.data.category.descriptions}</p>
          <p>{props.data.name}</p>
          <p>
            {props.data.city.name}, {props.data.city.country}
          </p>
          <p>{props.data.category.descriptions}</p>
          <Link key={props.data.id} to={`../product/${props.data.id}`}>
            <button>Mais detalhes</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
