/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import styles from './LoginValidation.module.scss'

const LoginValidation = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState({
    usernameError: false,
    passwordError: false
  })

  const navigate = useNavigate()

  const validateUsername = username => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = username.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, usernameError: false }))
      setUsername(username)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, usernameError: true }))
      return false
    }
  }

  const validatePassword = password => {
    setFormError(prevState => ({ ...prevState }))

    if (password.length >= 8) {
      setFormError(prevState => ({ ...prevState, passwordError: false }))
      setPassword(password)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, passwordError: true }))
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    let signInData = {
      username: username,
      password: password
    }

    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    // usar no fetch quando pronto
    let requestConfiguration = {
      method: 'POST',
      body: JSON.stringify(signInData),
      headers: requestHeaders
    }

    if (validateUsername && validatePassword) {
      alert('Login realizado com sucesso!')
      navigate('/home')
    } else {
      setFormError({
        usernameError: false,
        passwordError: false
      })
      alert('Usuário e/ou senha incorreto(s)!')
    }
  }

  return (
    <section className={styles.sectionLogin}>
      <form className={styles.formLogin}>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input
            className={`form-control ${
              formError.usernameError ? `${styles.formError}` : ''
            }`}
            name="login"
            required
            onChange={event => validateUsername(event.target.value)}
          />

          {formError.usernameError && (
            <span className={`${styles.formError}`}>
              O nome de usuário deve conter pelo menos 5 caracteres
            </span>
          )}
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Password</label>
          <input
            className={`form-control ${
              formError.passwordError ? `${styles.formError}` : ''
            }`}
            name="password"
            type="password"
            required
            onChange={event => validatePassword(event.target.value)}
          />

          {formError.passwordError && (
            <span className={styles.formError}>
              A senha deve conter pelo menos 8 caracteres
            </span>
          )}
        </div>

        <button
          className={styles.buttonLoginValidation}
          type="submit"
          onClick={event => handleSubmit(event)}
        >
          Register
        </button>
      </form>
      <div className={styles.buttonRegister}>
        You don't have a record?
        <Link to="/register"> Click Here!</Link>
      </div>
    </section>
  )
}

export default LoginValidation
