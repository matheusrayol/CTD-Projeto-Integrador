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

  function refreshPage() {
    window.location.reload(false)
  }

  const handleLogin = e => {
    e.preventDefault()
    if (!email || !password) {
      setError('Preencha todos os campos')
      return
    } else if (password.length < 6) {
      setError('Comprimento da senha é muito curto')
      return
    }

    const res = signin(email, password)
    if (email || password) {
      if (res) {
        setError(res)
        return
      }
      alert('Usuário logado com sucesso!')
      navigate('/home')
      refreshPage()
    }
  }

  return (
    <section className={styles.sectionLoginValidation}>
      <form className={styles.formLoginValidation}>
        <h1>Entrar</h1>
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
          <label htmlFor="">Senha</label>
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
          Entrar
        </button>
      </form>
      <div className={styles.buttonRegister}>
        Você não possui cadastro?
        <Link to="/register"> Clique Aqui</Link>
      </div>
    </section>
  )
}

export default LoginValidation
