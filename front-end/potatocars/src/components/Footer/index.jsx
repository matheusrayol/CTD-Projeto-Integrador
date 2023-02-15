import React from 'react'
import styles from './Footer.module.scss'
import footerCopyRight from '../../assets/footerCopyRight.svg'
import logoFacebook from '../../assets/logoFacebook.svg'
import logoLinkedin from '../../assets/logoLinkedin.svg'
import logoTwitter from '../../assets/logoTwitter.svg'
import logoInstagram from '../../assets/logoInstagram.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img
        src={footerCopyRight}
        alt="Mensagem CopyRigh"
        className={styles.footer__img}
      />
      <div className={styles.footer__socialMedias}>
        <Link to="https://web.facebook.com" target="_blank">
          <img src={logoFacebook} alt="Logo FaceBook" />
        </Link>
        <Link to="https://www.instagram.com" target="_blank">
          <img src={logoLinkedin} alt="Logo Linkedin" />
        </Link>
        <Link to="https://www.twitter.com" target="_blank">
          <img src={logoTwitter} alt="Logo Twitter" />
        </Link>
        <Link to="https://www.instagram.com" target="_blank">
          <img src={logoInstagram} alt="Logo Instagram" />
        </Link>
      </div>
    </div>
  )
}
