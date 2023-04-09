import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'

const LoginValidation = () => {

    const { saveToken, saveData } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({
        emailError: false,
        passwordError: false,
        genericError: false
    })
    const [validLogin, setValidLogin] = useState(false)

    const isFormValid = email && password

    const validateEmail = email => {
        setFormError(prevState => ({ ...prevState, genericError: false }))

        if (email.length > 5) {
            setFormError(prevState => ({ ...prevState, emailError: false }))
            setEmail(email)
            return true
        } else {
            setFormError(prevState => ({ ...prevState, emailError: true }))
            return false
        }
    }

    const validatePassword = password => {
        setFormError(prevState => ({ ...prevState, genericError: false }))

        if (password.length > 5) {
            setFormError(prevState => ({ ...prevState, passwordError: false }))
            setPassword(password)
            return true
        } else {
            setFormError(prevState => ({ ...prevState, passwordError: true }))
            return false
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }


    const handleSubmit = e => {
        e.preventDefault()

        let signInData = {
            email: email,
            password: password
        }

        let requestHeaders = {
            'Content-Type': 'application/json'
        }

        let requestConfiguration = {
            method: 'POST',
            data: JSON.stringify(signInData),
            headers: requestHeaders,
            url: '/user/authenticate'
        }

        if (validateEmail && validatePassword) {
            axios(requestConfiguration)
                .then(response => {
                    if (response.status === 200) {
                        const data = response.data;
                        saveToken(data.jwt)
                        saveData(data)
                        setValidLogin(true)
                        setTimeout(function () {
                            navigate(`${localStorage.getItem('currentLocation')}`);
                            refreshPage();
                        }, 1500)
                    } else {
                        setFormError({
                            mailError: false,
                            passError: false,
                            genericError: true
                        })
                    }
                })
                .catch(error => {
                    setFormError({
                        mailError: false,
                        passError: false,
                        genericError: true
                    })
                });
        }
    }




    return (
        <>
            {validLogin ? (
            <main className="d-flex align-items-center flex-grow-1">
                <section className="d-flex align-items-center flex-grow-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                                <div className="card shadow-lg o-hidden border-0 my-5">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="text-center p-5">
                                                    <svg className="bi bi-check2-circle text-center text-success mb-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{fontSize: `110px`}}>
                                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
                                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
                                                    </svg>
                                                    <div className="text-center">
                                                        <h4 className="text-dark mb-4 poppins">Login Concluído!</h4>
                                                    </div>
                                                    <p className="ubuntu">Aguarde, você está sendo redirecionado...<br />Caso não queira aguardar, <Link className="travelgreen" to="/home">clique aqui</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
            </main>
            ) : (
            <main className="d-flex align-items-center flex-grow-1">
                <section className="d-flex align-items-center flex-grow-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                                <div className="card shadow-lg o-hidden border-0 my-5">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="p-5">
                                                    <div className="text-center">
                                                        <h4 className="text-dark mb-4 poppins">Fazer Login</h4>
                                                    </div>
                                                    <form className="user">
                                                        <div className="mb-3">
                                                            <input
                                                                id="email"
                                                                className={`form-control ${formError.emailError ? 'form-error' : ''} ${formError.genericError ? 'form-error' : ''}`}
                                                                type="email"
                                                                aria-describedby="emailHelp"
                                                                placeholder="Insira seu endereço de e-mail"
                                                                name="email"
                                                                required
                                                                onChange={event => validateEmail(event.target.value)}
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input
                                                                className={`form-control ${formError.passwordError ? 'form-error' : ''} ${formError.genericError ? 'form-error' : ''} form-control-user`}
                                                                type="password"
                                                                placeholder="Insira sua senha"
                                                                name="password"
                                                                required
                                                                onChange={event => validatePassword(event.target.value)}
                                                            />
                                                        </div>
                                                        <div className="row mb-3">
                                                            {formError.emailError && (
                                                                <p id="emailError" className="text-danger">Formato do e-mail inválido.</p>
                                                            )}
                                                            {formError.passwordError && (
                                                                <p id="passwordError" className="text-danger">A senha deve conter no mínimo 6 caracteres.</p>
                                                            )}
                                                            {formError.genericError && (
                                                                <p id="emailOrPasswordInvalid" className="text-danger">Usuário ou senha inválidos</p>
                                                            )}
                                                        </div>
                                                        <button
                                                            id="submitBtn"
                                                            className="btn btn-success d-block btn-user w-100 poppins"
                                                            onClick={event => handleSubmit(event)}
                                                            disabled={!isFormValid}
                                                        >
                                                            Fazer Login
                                                        </button>
                                                        <hr />
                                                    </form>
                                                    <div className="text-center">
                                                        Ainda não tem uma conta? <Link to="/register" className="small travelgreen">Crie uma agora!</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            )}
        </>


    )

}

export default LoginValidation