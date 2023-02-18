import React from 'react'
import styles from './Login.module.scss'
import LoginValidation from '../components/LoginValidation'

const Login = () => {
  return (
    <div className="app-login">
      <div className={styles.bodyLogin}>
        <LoginValidation />
      </div>
    </div>
  )
}

export default Login
