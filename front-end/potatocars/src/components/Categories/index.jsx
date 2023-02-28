import { React, useState } from 'react'
import styles from './Recomendations.module.scss'
import cardsInformation from './cardsInformation.json'
import Categories from '../Categories'
import CardCategories from '../CardCategories'

export default function Recomendations() {
  const [cards, setCards] = useState(cardsInformation)

  const categories = [...new Set(cards.map(value => value.category))]

  const filtrarCards = card => {
    const novosCards = cards.filter(card => {
      return card.category === card
    })

    setCards(novosCards)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Categories
        tags={categories}
        filtraFotos={filtrarCards}
        setItens={setCards}
      />
      <CardCategories itens={cards} styles={styles} />
    </section>
  )
}
