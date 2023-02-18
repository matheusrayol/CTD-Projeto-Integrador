import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegisterValidation.module.scss'

const RegisterValidation = () => {
  const [rvName, setRvName] = useState('')
  const [rvSurname, setRvSurname] = useState('')
  const [rvEmail, setRvEmail] = useState('')
  const [rvPassword, setRvPassword] = useState('')
  const [rvRePassword, setRvRePassword] = useState('')

  const [formError, setFormError] = useState({
    rvNameError: false,
    rvSurnameError: false,
    rvEmailError: false,
    rvPasswordError: false,
    rvRepasswordError: false
  })

  const navigate = useNavigate()

  // da pra tirar e tornar um todas essas validates

  const validateRvName = rvName => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = rvName.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, rvNameError: false }))
      setRvName(rvName)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, rvNameError: true }))
      return false
    }
  }

  const validateRvSurName = rvSurname => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = rvSurname.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, rvSurnameError: false }))
      setRvSurname(rvSurname)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, rvSurnameError: true }))
      return false
    }
  }

  const validateRvEmail = rvEmail => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = rvEmail.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, rvEmailError: false }))
      setRvEmail(rvEmail)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, rvEmailError: true }))
      return false
    }
  }

  const validateRvPassword = rvPassword => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = rvPassword.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, rvPasswordError: false }))
      setRvPassword(rvPassword)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, rvPasswordError: true }))
      return false
    }
  }

  const validateRvRePassword = rvRePassword => {
    setFormError(prevState => ({ ...prevState }))

    const withoutSpaces = rvRePassword.trim()

    if (withoutSpaces.length >= 5) {
      setFormError(prevState => ({ ...prevState, rvRepasswordError: false }))
      setRvRePassword(rvRePassword)
      return true
    } else {
      setFormError(prevState => ({ ...prevState, rvRepasswordError: true }))
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    let signInData = {
      rvName: rvName,
      rvSurname: rvSurname,
      rvEmail: rvEmail,
      rvPassword: rvPassword,
      rvRePassword: rvRePassword
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

    if (
      // da pra tirar e tornar um
      validateRvName &&
      validateRvSurName &&
      validateRvEmail &&
      validateRvPassword &&
      validateRvRePassword
    ) {
      alert('Login realizado com sucesso!')
      navigate('/home')
    } else {
      setFormError({
        rvNameError: false,
        rvSurnameError: false,
        rvEmailError: false,
        rvPasswordError: false,
        rvRepasswordError: false
      })
      alert('Algum dos campos se encontra incorreto(s)!')
    }
  }

  return (
    <section className={styles.sectionRegisterValidation}>
      <form className={styles.formRegisterValidation}>
        <h1>Create Account</h1>
        <div className={styles.completeName}>
          <div className={styles.fieldLabelInput}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={styles.fieldLabelInput}>
            <label htmlFor="">Surname</label>
            <input type="text" name="surname" required />
          </div>
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="repassword" required />
        </div>

        <button
          className={styles.buttonRegisterValidation}
          type="submit"
          onClick={event => handleSubmit(event)}
        >
          Register
        </button>
        <div className={styles.buttonRegister}>
          You have a registration?
          <p>
            <Link to="/login">Click Here!</Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default RegisterValidation
