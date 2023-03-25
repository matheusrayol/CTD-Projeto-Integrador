import { React, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import styles from './LoginValidation.module.scss'

const LoginValidation = () => {
  const { saveToken, saveName } = useAuth()
  const navigate = useNavigate()
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [formError, setFormError] = useState({
    mailError: false,
    passError: false,
    genericError: false
  })

  const isFormValid = mail && pass

  const validateMail = mail => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (mail.length > 5) {
      setFormError(prevState => ({ ...prevState, mailError: false }))
      setMail(mail)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, mailError: true }))
      return false
    }
  }

  const validatePass = pass => {
    setFormError(prevState => ({ ...prevState, genericError: false }))

    if (pass.length > 5) {
      setFormError(prevState => ({ ...prevState, passError: false }))
      setPass(pass)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, passError: true }))
      return false
    }
  }

  function refreshPage() {
    window.location.reload(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let signInData = {
      email: mail,
      password: pass
    }

    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'POST',
      body: JSON.stringify(signInData),
      headers: requestHeaders
    }

    if (validateMail && validatePass) {
      fetch(`/user/authenticate`, requestConfiguration).then(response => {
        if (response.ok) {
          response.json().then(data => {
            saveToken(data.jwt)
            saveName(`${data.name} ${data.surname}`)
            alert('Login realizado com sucesso!')
            navigate('/home')
            refreshPage()
          })
        } else {
          setFormError({
            mailError: false,
            passError: false,
            genericError: true
          })
          alert('Usuário e/ou senha incorreto(s)!')
        }
      })
    }
  }

  return (
    <section
      className={styles.sectionLoginValidation}
      id="sectionLoginValidation"
    >
      <form
        className={`${styles.formLoginValidation} ${
          formError.genericError ? `${styles.formError}` : ''
        }`}
        id="formLoginValidation"
      >
        <h1 id="formLoginValidation__title">Entrar</h1>
        <div className={styles.fieldLabelInput} id="fieldLabelInput">
          <label htmlFor="">Email</label>
          <input
            id="inputValidationEmail"
            className={`${styles.inputValidation} ${
              formError.mailError ? `${styles.formError}` : ''
            }`}
            name="email"
            type="email"
            required
            onChange={event => validateMail(event.target.value)}
          />
          {formError.mailError && (
            <span id="span__formErrorEmail" className={`${styles.formError}`}>
              Email incompleto
            </span>
          )}
        </div>
        <div className={styles.fieldLabelInput} id="fieldLabelInput">
          <label htmlFor="">Senha</label>
          <input
            id="inputValidationSenha"
            className={`${styles.inputValidation} ${
              formError.passError ? `${styles.formError}` : ''
            }`}
            name="password"
            type="password"
            required
            onChange={event => validatePass(event.target.value)}
          />
          {formError.passError && (
            <span id="span__formErrorSenha" className={`${styles.formError}`}>
              Comprimento da senha é muito curto
            </span>
          )}
        </div>
        <button
          id="buttonLoginValidation"
          className={styles.buttonLoginValidation}
          type="submit"
          onClick={event => handleSubmit(event)}
          disabled={!isFormValid}
        >
          Entrar
        </button>
      </form>
      <div className={styles.buttonRegister} id="buttonRegister">
        Você não possui cadastro?
        <Link to="/register"> Clique Aqui</Link>
      </div>
    </section>
  )
}

export default LoginValidation
