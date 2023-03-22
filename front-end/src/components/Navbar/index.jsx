import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import imgAvatar from '../../assets/imgAvatar.png'
import styles from './Navbar.module.scss'

function Navbar() {
  const { auth, removeToken } = useAuth()

  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 750 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen(p => !p)
  }

  return (
    <header className={styles.header} id="header">
      <div className={styles.header__content} id="header__content">
        <div className={styles.logos} id="logos">
          <Link to="/home" className={styles.logoEgg}>
            <span></span>
            <p>Travel Green</p>
          </Link>
        </div>
        <nav
          id="header__content__nav"
          className={`${styles.header__content__nav} 
          ${menuOpen && size.width < 750 ? `${styles.isMenu}` : ''} 
          }`}
        >
          <h1 id="header__content__nav__title">Menu</h1>
          <ul>
            <li>
              <Link to="/home">Início</Link>
            </li>

            <li>
              {auth === '' ? (
                <div className={styles.ifLogin} id="ifLogin">
                  <Link id="ifLoginEntrar" to="/login">
                    Entrar
                  </Link>
                  <Link id="ifLoginCadastrar" to="/register">
                    Cadastrar
                  </Link>
                </div>
              ) : (
                <div className={styles.ifLogout} id="ifLogout">
                  <div
                    className={styles.ifLogout__sectionUser}
                    id="ifLogout__sectionUser"
                  >
                    <img src={imgAvatar} alt="imagem Avatar" />
                    <p>
                      <Link id="NameUserWhenLogged" to="/accountuser">
                        {auth.name}
                      </Link>
                    </p>
                  </div>
                  <Link
                    id="ifLogoutSair"
                    to="/home"
                    onClick={() => removeToken()}
                  >
                    Sair
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div
          className={styles.header__content__toggle}
          id="header__content__toggle"
        >
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
