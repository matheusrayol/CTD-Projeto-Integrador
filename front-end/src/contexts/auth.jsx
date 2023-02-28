import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userToken = localStorage.getItem('user_token')
    const usersStorage = localStorage.getItem('users_bd')

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        user => user.email === JSON.parse(userToken).email
      )

      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const signin = (email, password, name) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'))

    const hasUser = usersStorage?.filter(user => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('user_token', JSON.stringify({ email, token }))
        setUser({ email, password, name })
        return
      } else {
        return 'E-mail or Password Incorrets'
      }
    } else {
      return 'User Not Register'
    }
  }

  const signup = (email, password, name) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'))

    const hasUser = usersStorage?.filter(user => user.email === email)

    if (hasUser?.length) {
      return 'Have account with this E-mail'
    }

    let newUser

    if (usersStorage) {
      newUser = [...usersStorage, { name, email, password }]
    } else {
      newUser = [{ name, email, password }]
    }

    localStorage.setItem('users_bd', JSON.stringify(newUser))
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
    alert('User Logout')
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}