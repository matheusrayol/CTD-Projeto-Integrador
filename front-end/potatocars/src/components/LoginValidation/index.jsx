import { React, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import styles from './LoginValidation.module.scss'

const LoginValidation = () => {
  const { signin } = useAuth()
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      setError('Fill in all fields')
      return
    }

    const res = signin(email, password)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <section
      className={`${styles.sectionLoginValidation} ${
        error.genericError ? `${styles.error}` : ''
      }`}
    >
      <form className={styles.formLoginValidation}>
        <h1>Login</h1>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input
            className={`${styles.inputValidation} ${
              error.usernameError ? `${styles.error}` : ''
            }`}
            name="login"
            placeholder="Insert your Email"
            required
            value={email}
            onChange={e => [setEmail(e.target.value), setError('')]}
          />

          {error.usernameError && (
            <span className={`${styles.error}`}>
              Username must contain at least 6 characters
            </span>
          )}
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Password</label>
          <input
            className={`form-control ${
              error.passwordError ? `${styles.error}` : ''
            }`}
            name="password"
            type="password"
            placeholder="Insert your password"
            required
            value={password}
            onChange={e => [setPassword(e.target.value), setError('')]}
          />

          {error.passwordError && (
            <span className={styles.error}>
              Password must contain at least 8 characters
            </span>
          )}
        </div>

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
