import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.svg'
import styles from './Navbar.module.scss'

function Navbar() {
  const { user, signout } = useAuth()
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

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
          <Link to="/home">
            <img src={logoHeader} alt="Logo escrito DigitalBooking" />
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              {user === null ? (
                <Link to="/login">Login</Link>
              ) : (
                <Link to="/home" onClick={() => signout()}>
                  Logout
                </Link>
              )}
            </li>

            {/* <button
              className={`btn btn-${theme} ${styles.btnStyle}`}
              onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'light' ? '🌙' : '☀'}
            </button> */}
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
