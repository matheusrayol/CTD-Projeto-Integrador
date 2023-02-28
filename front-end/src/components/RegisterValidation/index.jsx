import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegisterValidation.module.scss'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'

const RegisterValidation = () => {
  const [rvName, setRvName] = useState('')
  const [rvSurname, setRvSurname] = useState('')
  const [rvEmail, setRvEmail] = useState('')
  const [rvPassword, setRvPassword] = useState('')
  const [rvRePassword, setRvRePassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleSignup = e => {
    e.preventDefault()
    if (!rvName | !rvSurname | !rvEmail | !rvPassword | !rvRePassword) {
      setError('Fill in all fields')
      return
    } else if (rvPassword !== rvRePassword) {
      setError('The passwords do not match')
      return
    } else if (rvPassword.length < 6) {
      setError('Password length is too short')
      return
    } else {
      setError('Unknow Error')
    }

    const res = signup(rvEmail, rvPassword, rvName)

    if (res) {
      setError(res)
      return
    }

    alert('User register with sucess!')
    navigate('/login')
  }

  return (
    <section className={styles.sectionRegisterValidation}>
      <form className={styles.formRegisterValidation}>
        <h1 className={styles.titleForm}>Create Account</h1>
        <div className={styles.completeName}>
          <div className={styles.completeName__labelInput}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              required
              value={rvName}
              onChange={e => [setRvName(e.target.value), setError('')]}
            />
          </div>
          <div className={styles.completeName__labelInput}>
            <label htmlFor="">Surname</label>
            <input
              type="text"
              name="surname"
              required
              value={rvSurname}
              onChange={e => [setRvSurname(e.target.value), setError('')]}
            />
          </div>
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            value={rvEmail}
            onChange={e => [setRvEmail(e.target.value), setError('')]}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            required
            value={rvPassword}
            onChange={e => [setRvPassword(e.target.value), setError('')]}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="repassword"
            required
            value={rvRePassword}
            onChange={e => [setRvRePassword(e.target.value), setError('')]}
          />
        </div>
        <C.labelError>{error}</C.labelError>
        <button
          className={styles.buttonSubmit}
          type="submit"
          onClick={handleSignup}
        >
          Register
        </button>
        <div className={styles.buttonRegister}>
          You have a registration?
          <Link to="/login"> Click Here</Link>
        </div>
      </form>
    </section>
  )
}

export default RegisterValidation