import { useState, createContext, useContext } from 'react'

// Criação do Contexto
const AuthContext = createContext()

export function AuthProvider(props) {
  const authLocalStorage = localStorage.getItem('auth')
  const functionRoleLocalStorage = localStorage.getItem('functionRole')
  const nameLocalStorage = localStorage.getItem('name')
  const idLocalStorage = localStorage.getItem('id')
  const surnameLocalStorage = localStorage.getItem('surname')
  const emailLocalStorage = localStorage.getItem('email')

  const [auth, setAuth] = useState(
    authLocalStorage === null ? '' : authLocalStorage
  )

  const [id, setId] = useState(idLocalStorage === null ? '' : idLocalStorage)

  const [functionRole, setFunctionRole] = useState(
    functionRoleLocalStorage === null ? '' : functionRoleLocalStorage
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

  // Função responsavel por salvar os campos
  function saveData(data) {
    if (data.name !== name) {
      setName(data.name)
      localStorage.setItem('name', data.name)
    }
    if (data.id !== id) {
      setId(data.id)
      localStorage.setItem('id', data.id)
    }
    if (data.surname !== surname) {
      setSurname(data.surname)
      localStorage.setItem('surname', data.surname)
    }
    if (data.email !== email) {
      setEmail(data.email)
      localStorage.setItem('email', data.email)
    }
    if (data.function !== functionRole) {
      setFunctionRole(data.function)
      localStorage.setItem('functionRole', data.function)
    }
  }

  // Função responsavel por remover o token
  function logout() {
    setAuth('')
    setId('')
    setFunctionRole('')
    setName('')
    setSurname('')
    setEmail('')
    localStorage.removeItem('auth')
    localStorage.removeItem('id')
    localStorage.removeItem('functionRole')
    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('email')
    alert('Usuário deslogado')
  }

  return (
    <AuthContext.Provider
      value={{
        id,
        auth,
        functionRole,
        name,
        surname,
        email,
        saveToken,
        logout,
        saveData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
