import React from 'react'
import styles from './Error404Page.module.scss'

export default function Error404Page() {
  return (
    <section className={styles.sectionError404Page}>
      <h1>Page 404</h1>
      <h2>But don't cry, try back to home ^^</h2>
      <img
        src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w"
        alt=""
      />
      <p>It's just a 404 Error! </p>
      <p>
        What you're looking for may have been misplaced in Long Term Memory.
      </p>
    </section>
  )
}
