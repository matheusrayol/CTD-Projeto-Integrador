import React from 'react'
import styles from './Error404Page.module.scss'

export default function Error404Page() {
  return (
    <section className={styles.sectionError404Page}>
      <h1>Página 404</h1>
      <h2>Mas não chore, tente voltar para o site ^^</h2>
      <div className={styles.imgError}>
        <img src="https://i.gifer.com/7HXy.gif" alt="" />
        <img
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w"
          alt=""
        />
        <img src="https://i.gifer.com/7HXy.gif" alt="" />
      </div>
      <p>É apenas um erro 404!</p>
      <p>
        O que você está procurando pode ter sido extraviado na Memória de Longo
        Prazo.
      </p>
    </section>
  )
}
