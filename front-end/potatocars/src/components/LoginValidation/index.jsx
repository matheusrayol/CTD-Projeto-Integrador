import { React, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import * as C from './styles'
import styles from './LoginValidation.module.scss'

const LoginValidation = () => {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    if (!email || !password) {
      setError('Fill in all fields')
      return
    } else if (password.length < 6) {
      setError('Password length is < 6 ')
      return
    }

    const res = signin(email, password)
    if (email || password) {
      if (res) {
        setError(res)
        return
      }
      alert('User login with sucess!')
      navigate('/home')
    }
  }

  return (
    <section className={styles.sectionLoginValidation}>
      <form className={styles.formLoginValidation}>
        <h1>Login</h1>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input
            className={styles.inputValidation}
            name="login"
            required
            value={email}
            onChange={e => [setEmail(e.target.value), setError('')]}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Password</label>
          <input
            className={styles.inputValidation}
            name="password"
            type="password"
            required
            value={password}
            onChange={e => [setPassword(e.target.value), setError('')]}
          />
        </div>
        <C.labelError>{error}</C.labelError>
        <button
          className={styles.buttonLoginValidation}
          type="submit"
          onClick={handleLogin}
        >
          Enter
        </button>
      </form>
      <div className={styles.buttonRegister}>
        You don't have a registration?
        <Link to="/register"> Click Here</Link>
      </div>
    </section>
  )
}

export default LoginValidation
