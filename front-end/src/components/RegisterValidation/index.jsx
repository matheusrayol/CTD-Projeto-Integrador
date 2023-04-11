import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const RegisterValidation = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validSignup, setValidSignup] = useState(false)

    const isFormValid = name && surname && email && password && confirmPassword

    const [formError, setFormError] = useState({
        nameError: false,
        surnameError: false,
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        genericError: false
    })

    const validateName = name => {
        setFormError(prevState => ({ ...prevState, genericError: false }))

        if (name.length > 3) {
            setFormError(prevState => ({ ...prevState, nameError: false }))
            setName(name)
            return true
        } else {
            setFormError(prevState => ({ ...prevState, nameError: true }))
            return false
        }
    }

    const validateSurname = surname => {
        setFormError(prevState => ({ ...prevState, genericError: false }))

        if (surname.length > 3) {
            setFormError(prevState => ({ ...prevState, surnameError: false }))
            setSurname(surname)
            return true
        } else {
            setFormError(prevState => ({ ...prevState, surnameError: true }))
            return false
        }
    }

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

    const validateConfirmPassword = confirmPassword => {
        setFormError(prevState => ({ ...prevState, genericError: false }))

        if (confirmPassword.length > 5 && confirmPassword === password) {
            setFormError(prevState => ({ ...prevState, confirmPasswordError: false }))
            setConfirmPassword(confirmPassword)
            return true
        } else {
            setFormError(prevState => ({ ...prevState, confirmPasswordError: true }))
            return false
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        let signInData = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            functionId: 2
        };

        let requestHeaders = {
            'Content-Type': 'application/json'
        };

        let requestConfiguration = {
            method: 'POST',
            data: JSON.stringify(signInData),
            headers: requestHeaders,
            url: '/user'
        };

        if (
            validateName &&
            validateSurname &&
            validateEmail &&
            validatePassword &&
            validateConfirmPassword
        ) {
            axios(requestConfiguration)
                .then(response => {
                    if (response.status === 200 || response.status === 201) {
                        setValidSignup(true)
                        setTimeout(function () {
                            navigate('/login');
                            refreshPage();
                        }, 3500)
                    } else {
                        if (response.status === 400) {
                            alert(response.data.mensagem)
                        } else {
                            setFormError({
                                nameError: false,
                                surnameError: false,
                                emailError: false,
                                passwordError: false,
                                repasswordError: false,
                                genericError: true
                            });
                        }
                    }
                })
                .catch(error => {
                    console.error(error);
                    setFormError({
                        nameError: false,
                        surnameError: false,
                        emailError: false,
                        passwordError: false,
                        repasswordError: false,
                        genericError: true
                    })
                });
        }
    }

    return (

        <>
            {validSignup ? (
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
                                                        <svg className="bi bi-check2-circle text-center text-success mb-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize: `110px` }}>
                                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
                                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
                                                        </svg>
                                                        <div className="text-center">
                                                            <h4 className="text-dark mb-4 poppins">Cadastro Concluído!</h4>
                                                        </div>
                                                        <p className="ubuntu">Aguarde, você está sendo redirecionado...<br />Caso não queira aguardar, <Link className="travelgreen" to="/login">clique aqui</Link></p>
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
                            <div className="row d-flex d-xl-flex justify-content-center justify-content-xl-center">
                                <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-6 bg-white shadow-lg">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="text-dark mb-4 poppins">Cadastre-se</h4>
                                        </div>
                                        <form className="user">
                                            <div className="row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input
                                                        id="name"
                                                        className={`form-control form-control-user ${formError.nameError ? 'form-error' : ''}`}
                                                        type="text"
                                                        placeholder="Nome"
                                                        required
                                                        onChange={event => validateName(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input
                                                        id="surname"
                                                        className={`form-control form-control-user ${formError.surnameError ? 'form-error' : ''}`}
                                                        type="text"
                                                        placeholder="Sobrenome"
                                                        required
                                                        onChange={event => validateSurname(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    id="email"
                                                    className={`form-control form-control-user ${formError.emailError ? 'form-error' : ''} ${formError.genericError ? 'form-error' : ''}`}
                                                    type="email"
                                                    placeholder="Endereço de e-mail"
                                                    required
                                                    onChange={event => validateEmail(event.target.value)}
                                                />
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input
                                                        id="password"
                                                        className={`form-control form-control-user ${formError.passwordError ? 'form-error' : ''}`}
                                                        type="password"
                                                        placeholder="Senha"
                                                        required
                                                        onChange={event => validatePassword(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input
                                                        id="confirmPassword"
                                                        className={`form-control form-control-user ${formError.confirmPasswordError ? 'form-error' : ''}`}
                                                        type="password"
                                                        placeholder="Confirmar senha"
                                                        required
                                                        onChange={event => validateConfirmPassword(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                {formError.nameError && (
                                                    <p id="nameErrorMsg" className="text-danger">O nome deve possuir ao menos 4 caracteres.</p>
                                                )}
                                                {formError.surnameError && (
                                                    <p id="surnameErrorMsg" className="text-danger">O sobrenome deve possuir ao menos 4 caracteres.</p>
                                                )}
                                                {formError.emailError && (
                                                    <p id="emailErrorMsg" className="text-danger">O e-mail deve estar no formato seu@email.com.</p>
                                                )}
                                                {formError.passwordError && (
                                                    <p id="passwordErrorMsg" className="text-danger">A senha deve possuir no mínimo 6 caracteres.</p>
                                                )}
                                                {formError.confirmPasswordError && (
                                                    <p id="confirmPasswordErrorMsg" className="text-danger">A senha e a confirmação de senha não coincidem.</p>
                                                )}
                                                {formError.genericError && (
                                                    <p id="genericErrorMsg" className="text-danger">E-mail já cadastrado, utilize outro endereço de e-mail.</p>
                                                )}
                                            </div>
                                            <button
                                                id="submitBtn"
                                                className="btn btn-success d-block btn-user w-100 poppins"
                                                type="submit"
                                                onClick={event => handleSubmit(event)}
                                                disabled={!isFormValid}
                                            >
                                                Registrar-se
                                            </button>
                                            <hr />
                                        </form>
                                        <div className="text-center">Já possui uma conta? <Link to="/login" className="small travelgreen">Faça o Login!</Link></div>
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

export default RegisterValidation