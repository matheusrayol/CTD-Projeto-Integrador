import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegisterValidation.module.scss'
import { useAuth } from '../../hooks/useAuth'

const RegisterValidation = () => {
  const { saveToken } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')

  const [formError, setFormError] = useState({
    nameError: false,
    surnameError: false,
    emailError: false,
    passwordError: false,
    repasswordError: false,
    genericError: false
  })

  const validateName = name => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (name.length > 3) {
      setFormError(prevState => ({ ...prevState, nameError: false }))
      setName(name)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, nameError: true }))
      return false
    }
  }

  const validateSurname = surname => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (surname.length > 3) {
      setFormError(prevState => ({ ...prevState, surnameError: false }))
      setSurname(surname)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, surnameError: true }))
      return false
    }
  }

  const validateEmail = email => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (email.length > 5) {
      setFormError(prevState => ({ ...prevState, emailError: false }))
      setEmail(email)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, emailError: true }))
      return false
    }
  }

  const validatePassword = password => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (password.length > 5) {
      setFormError(prevState => ({ ...prevState, passwordError: false }))
      setPassword(password)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, passwordError: true }))
      return false
    }
  }

  const validateRepassword = repassword => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (repassword.length > 5 && repassword === password) {
      setFormError(prevState => ({ ...prevState, repasswordError: false }))
      setRepassword(repassword)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, repasswordError: true }))
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    let signInData = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      repassword: repassword
    }

    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'POST',
      body: JSON.stringify(signInData),
      headers: requestHeaders
    }

    if (
      validateName &&
      validateSurname &&
      validateEmail &&
      validatePassword &&
      validateRepassword
    ) {
      fetch(`https://notcars.com.br/auth`, requestConfiguration).then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              saveToken(data.token)
              alert('Cadastro realizado com sucesso!')
              navigate('/login')
            })
          } else {
            setFormError({
              nameError: false,
              surnameError: false,
              emailError: false,
              passwordError: false,
              repasswordError: false,
              genericError: true
            })
            alert('Campo(os) incorreto(s)!')
          }
        }
      )
    }
  }

  return (
    <section className={styles.sectionRegisterValidation}>
      <form className={styles.formRegisterValidation}>
        <h1 className={styles.titleForm}>Cadastre-se</h1>
        <div className={styles.completeName}>
          <div className={styles.completeName__labelInput}>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="name"
              required
              onChange={event => validateName(event.target.value)}
              className={`${styles.inputValidation} ${
                formError.nameError ? `${styles.formError}` : ''
              }`}
            />
          </div>
          <div className={styles.completeName__labelInput}>
            <label htmlFor="">Sobrenome</label>
            <input
              type="text"
              name="surname"
              required
              onChange={event => validateSurname(event.target.value)}
              className={`${styles.inputValidation} ${
                formError.surnameError ? `${styles.formError}` : ''
              }`}
            />
          </div>
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={event => validateEmail(event.target.value)}
            className={`${styles.inputValidation} ${
              formError.emailError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="password"
            required
            onChange={event => validatePassword(event.target.value)}
            className={`${styles.inputValidation} ${
              formError.passwordError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Confirme a senha</label>
          <input
            type="password"
            name="repassword"
            required
            onChange={event => validateRepassword(event.target.value)}
            className={`${styles.inputValidation} ${
              formError.repasswordError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        {formError.nameError && (
          <span className={`${styles.formError}`}>Nome muito curto</span>
        )}
        {formError.surnameError && (
          <span className={`${styles.formError}`}>Sobrenome muito curto</span>
        )}
        {formError.emailError && (
          <span className={`${styles.formError}`}>Email muito curto</span>
        )}
        {formError.passwordError && (
          <span className={`${styles.formError}`}>Senha muito curta</span>
        )}
        {formError.repasswordError && (
          <span className={`${styles.formError}`}>Senhas não coincidem</span>
        )}
        <button
          className={styles.buttonSubmit}
          type="submit"
          onClick={event => handleSubmit(event)}
        >
          Cadastrar
        </button>
        <div className={styles.buttonRegister}>
          Você possui cadastro?
          <Link to="/login"> Clique Aqui</Link>
        </div>
      </form>
    </section>
  )
}

export default RegisterValidation
