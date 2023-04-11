import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegisterValidation.module.scss'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RegisterValidation = () => {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')

  const isFormValid = name && surname && email && password && repassword

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
      functionId: 2
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
      fetch(`/user`, requestConfiguration).then(response => {
        if (response.ok) {
          response.json().then(data => {
            // alert('Cadastro realizado com sucesso!')
            MySwal.fire({
              icon: 'success',
              text: 'Cadastro realizado com sucesso!'
            })
            navigate('/login')
          })
        } else {
          if (response.status === 400) {
            response.json().then(data => {
              alert(data.mensagem)
            })
          } else {
            // alert('Campo(os) incorreto(s)!')
            MySwal.fire({
              icon: 'error',
              text: 'Campo(os) incorreto(s)!'
            })
          }
          setFormError({
            nameError: false,
            surnameError: false,
            emailError: false,
            passwordError: false,
            repasswordError: false,
            genericError: true
          })
        }
      })
    }
  }

  return (
    <section
      className={styles.sectionRegisterValidation}
      id="sectionRegisterValidation"
    >
      <form
        className={styles.formRegisterValidation}
        id="formRegisterValidation"
      >
        <h1 className={styles.titleForm} id="titleForm">
          Cadastre-se
        </h1>
        <div className={styles.completeName} id="completeName">
          <div
            className={styles.completeName__labelInput}
            id="completeName__labelInputNome"
          >
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="name"
              required
              onChange={event => validateName(event.target.value)}
              id="inputValidationNome"
              className={`${styles.inputValidation} ${
                formError.nameError ? `${styles.formError}` : ''
              }`}
            />
          </div>
          <div
            className={styles.completeName__labelInput}
            id="completeName__labelInputSobrenome"
          >
            <label htmlFor="">Sobrenome</label>
            <input
              type="text"
              name="surname"
              required
              onChange={event => validateSurname(event.target.value)}
              id="inputValidationSobrenome"
              className={`${styles.inputValidation} ${
                formError.surnameError ? `${styles.formError}` : ''
              }`}
            />
          </div>
        </div>
        <div
          className={styles.fieldLabelInput}
          id="completeName__labelInputEmail"
        >
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={event => validateEmail(event.target.value)}
            id="inputValidationEmail"
            className={`${styles.inputValidation} ${
              formError.emailError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        <div
          className={styles.fieldLabelInput}
          id="completeName__labelInputSenha"
        >
          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="password"
            required
            onChange={event => validatePassword(event.target.value)}
            id="inputValidationSenha"
            className={`${styles.inputValidation} ${
              formError.passwordError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        <div
          className={styles.fieldLabelInput}
          id="completeName__labelInputReSenha"
        >
          <label htmlFor="">Confirme a senha</label>
          <input
            type="password"
            name="repassword"
            required
            onChange={event => validateRepassword(event.target.value)}
            id="inputValidationReSenha"
            className={`${styles.inputValidation} ${
              formError.repasswordError ? `${styles.formError}` : ''
            }`}
          />
        </div>
        {formError.nameError && (
          <span id="formErrorNome" className={`${styles.formError}`}>
            Nome muito curto
          </span>
        )}
        {formError.surnameError && (
          <span id="formErrorSobrenome" className={`${styles.formError}`}>
            Sobrenome muito curto
          </span>
        )}
        {formError.emailError && (
          <span id="formErrorEmail" className={`${styles.formError}`}>
            Email muito curto
          </span>
        )}
        {formError.passwordError && (
          <span id="formErrorSenha" className={`${styles.formError}`}>
            Senha muito curta
          </span>
        )}
        {formError.repasswordError && (
          <span id="formErrorReSenha" className={`${styles.formError}`}>
            Senhas não coincidem
          </span>
        )}
        <button
          id="buttonSubmit"
          className={styles.buttonSubmit}
          type="submit"
          onClick={event => handleSubmit(event)}
          disabled={!isFormValid}
        >
          Cadastrar
        </button>
        <div className={styles.buttonRegister} id="buttonRegister">
          Você possui cadastro?
          <Link to="/login"> Clique Aqui</Link>
        </div>
      </form>
    </section>
  )
}

export default RegisterValidation
