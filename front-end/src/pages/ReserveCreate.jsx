import React from 'react'
import styles from './ReserveCreate.module.scss'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import icon from '../assets/iconCreateReserve.svg'

export default function ReserveCreate() {
  return (
    <div className={styles.appReserveCreate}>
      <div className={styles.bodyReserveCreate}>
        <Navbar />
        <div className={styles.sectionReserveCreate}>
          <div className={styles.sectionReserveCreate__div}>
            <div className={styles.sectionReserveCreate__div__icon}>
              <img src={icon} alt="" />
            </div>
            <div className={styles.sectionReserveCreate__div__text}>
              <h2>Muito obrigado!</h2>
              <p>Sua reserva foi realizada com sucesso.</p>
            </div>
            <div className={styles.sectionReserveCreate__div__button}>
              <Link to={`/home`}>
                <button>Ok</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
