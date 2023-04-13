import { useState, createContext, useContext } from 'react'

// Criação do Context
const AuthContext = createContext()

export function AuthProvider(props) {
    const authLocalStorage = localStorage.getItem('auth')
    const idLocalStorage = localStorage.getItem('id')
    const functionRoleLocalStorage = localStorage.getItem('functionRole')
    const nameLocalStorage = localStorage.getItem('name')
    const nameInitialLocalStorage = localStorage.getItem('nameInitial')
    const surnameLocalStorage = localStorage.getItem('surname')
    const surnameInitialLocalStorage = localStorage.getItem('surnameInitial')
    const emailLocalStorage = localStorage.getItem('email')

    const [auth, setAuth] = useState(
        authLocalStorage === null ? '' : authLocalStorage
    )

    const [id, setId] = useState(
        idLocalStorage === null ? '' : idLocalStorage
    )

    const [functionRole, setFunctionRole] = useState(
        functionRoleLocalStorage === null ? '' : functionRoleLocalStorage
    )

    const [name, setName] = useState(
        nameLocalStorage === null ? '' : nameLocalStorage
    )

    const [nameInitial, setNameInitial] = useState(
        nameInitialLocalStorage === null ? '' : nameInitialLocalStorage
    )

    const [surname, setSurname] = useState(
        nameLocalStorage === null ? '' : surnameLocalStorage
    )

    const [surnameInitial, setSurnameInitial] = useState(
        surnameInitialLocalStorage === null ? '' : surnameInitialLocalStorage
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
        if (data.id !== id) {
            setId(data.id)
            localStorage.setItem('id', data.id)
        }
        if (data.function !== functionRole) {
            setFunctionRole(data.function)
            localStorage.setItem('functionRole', data.function)
        }
        if (data.name !== name) {
            setName(data.name)
            localStorage.setItem('name', data.name)
            // salva a primeira letra do nome em uma segunda variável
            // para ser usada no avatar
            localStorage.setItem('nameInitial', data.name[0])
        }
        if (data.surname !== surname) {
            setSurname(data.surname)
            localStorage.setItem('surname', data.surname)
            // salva a primeira letra do sobrenome em uma segunda variável
            // para ser usada no avatar
            localStorage.setItem('surnameInitial', data.surname[0])
        }
        if (data.email !== email) {
            setEmail(data.email)
            localStorage.setItem('email', data.email)
        }
    }

    // Função responsavel por remover o token
    function logout() {
        setId('')
        setFunctionRole('')
        setAuth('')
        setName('')
        setNameInitial('')
        setSurname('')
        setSurnameInitial('')
        setEmail('')
        localStorage.removeItem('auth')
        localStorage.removeItem('name')
        localStorage.removeItem('nameInitial')
        localStorage.removeItem('surname')
        localStorage.removeItem('surnameInitial')
        localStorage.removeItem('email')
        localStorage.removeItem('functionRole')
        localStorage.removeItem('id')
        localStorage.removeITem('dateStart')
        localStorage.removeITem('dateEnd')
    }

    return (
        <AuthContext.Provider value={{ id, functionRole, auth, name, nameInitial, surname, surnameInitial, email, saveToken, logout, saveData }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
