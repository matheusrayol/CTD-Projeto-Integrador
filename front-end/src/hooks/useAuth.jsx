import { useState, createContext, useContext } from 'react'

// Criação do Contexto
const AuthContext = createContext()

export function AuthProvider(props) {
  const authLocalStorage = localStorage.getItem('auth')
  const nameLocalStorage = localStorage.getItem('name')
  const surnameLocalStorage = localStorage.getItem('surname')
  const emailLocalStorage = localStorage.getItem('email')

  const [auth, setAuth] = useState(
    authLocalStorage === null ? '' : authLocalStorage
  )

  const [name, setName] = useState(
    nameLocalStorage === null ? '' : nameLocalStorage
  )
  const [surname, setSurname] = useState(
    nameLocalStorage === null ? '' : surnameLocalStorage
  )
  const [email, setEmail] = useState(
    nameLocalStorage === null ? '' : emailLocalStorage
  )

  // Função responsavel por salvar o token
  function saveToken(tokenReceived) {
    if (tokenReceived !== auth) {
      setAuth(tokenReceived)
      localStorage.setItem('auth', tokenReceived)
    }
  }

    // Função responsavel por salvar o nome
    function saveData(data) {
      if (data.name !== name) {
        setName(data.name)
        localStorage.setItem('name', data.name)
      }
      if (data.surname !== surname) {
        setSurname(data.surname)
        localStorage.setItem('surname', data.surname)
      }
      if (data.email !== email) {
        setEmail(data.email)
        localStorage.setItem('email', data.email)
      }
    }

  // Função responsavel por remover o token
  function logout() {
    setAuth('')
    setName('')
    setSurname('')
    setEmail('')
    localStorage.removeItem('auth')
    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('email')
    alert('Usuário deslogado')
  }

  return (
    <AuthContext.Provider value={{ auth, name, surname, email, saveToken, logout, saveData }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
