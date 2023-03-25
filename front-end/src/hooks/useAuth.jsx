import { useState, createContext, useContext } from 'react'

// Criação do Contexto
const AuthContext = createContext()

export function AuthProvider(props) {
  const authLocalStorage = localStorage.getItem('auth')
  const nameLocalStorage = localStorage.getItem('name')

  const [auth, setAuth] = useState(
    authLocalStorage === null ? '' : authLocalStorage
  )

  const [name, setName] = useState(
    nameLocalStorage === null ? '' : nameLocalStorage
  )

  // Função responsavel por salvar o token
  function saveToken(tokenReceived) {
    if (tokenReceived !== auth) {
      setAuth(tokenReceived)
      localStorage.setItem('auth', tokenReceived)
    }
  }

    // Função responsavel por salvar o nome
    function saveName(nameReceived) {
      if (nameReceived !== name) {
        setName(name)
        localStorage.setItem('name', nameReceived)
      }
    }

  // Função responsavel por remover o token
  function logout() {
    setAuth('')
    setName('')
    localStorage.removeItem('auth')
    localStorage.removeItem('name')
    alert('Usuário deslogado')
  }

  return (
    <AuthContext.Provider value={{ auth, name, saveToken, logout, saveName }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
