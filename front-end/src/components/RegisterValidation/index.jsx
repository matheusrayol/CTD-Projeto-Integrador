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
      setError('Preencha todos os campos')
      return
    } else if (rvPassword !== rvRePassword) {
      setError('As senhas não coincidem')
      return
    } else if (rvPassword.length < 6) {
      setError('Comprimento da senha é muito curto')
      return
    } else {
      setError('Erro desconhecido')
    }

    const res = signup(rvEmail, rvPassword, rvName)

    if (res) {
      setError(res)
      return
    }

    alert('Usuário registrado com Sucesso!')
    navigate('/login')
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
              value={rvName}
              onChange={e => [setRvName(e.target.value), setError('')]}
            />
          </div>
          <div className={styles.completeName__labelInput}>
            <label htmlFor="">Sobrenome</label>
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
          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="password"
            required
            value={rvPassword}
            onChange={e => [setRvPassword(e.target.value), setError('')]}
          />
        </div>
        <div className={styles.fieldLabelInput}>
          <label htmlFor="">Confirme a senha</label>
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
