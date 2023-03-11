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
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logos}>
          <Link to="/home" className={styles.logoEgg}>
            <span></span>
            <p>Travel Green</p>
          </Link>
        </div>
        <nav
          className={`${styles.header__content__nav} 
          ${menuOpen && size.width < 750 ? `${styles.isMenu}` : ''} 
          }`}
        >
          <h1>Menu</h1>
          <ul>
            <li>
              <Link to="/home">Início</Link>
            </li>

            <li>
              {auth === '' ? (
                <div className={styles.ifLogin}>
                  <Link to="/login">Entrar</Link>
                  <Link to="/register">Cadastrar</Link>
                </div>
              ) : (
                <div className={styles.ifLogout}>
                  <div className={styles.ifLogout__sectionUser}>
                    <img src={imgAvatar} alt="imagem Avatar" />
                    <p>
                      <Link to="/accountuser">{auth.name}</Link>
                    </p>
                  </div>
                  <Link to="/home" onClick={() => removeToken()}>
                    Sair
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
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
