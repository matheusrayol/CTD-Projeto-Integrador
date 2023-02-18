import React from 'react'
import RegisterValidation from '../components/RegisterValidation'
import styles from './Register.module.scss'

const Register = () => {
  return (
    <div className={styles.bodyRegister}>
      <RegisterValidation />
    </div>
  )
}

export default Register
