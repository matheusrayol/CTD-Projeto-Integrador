import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import LetterAvatar from '../LetterAvatar'
import Logo from '../../assets/travelgreen_logo.svg'
import * as bootstrap from 'bootstrap'

export default function Navbar() {

    const { auth, logout, name, surname, functionRole } = useAuth()

    return (
        <nav className="navbar navbar-light navbar-expand-md travelgreen-navbar sticky-top">
            <div className="container px-3">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img className="travelgreen-logo" src={Logo} height="45px" alt="Travel Green" />
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navegacao">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navegacao" className="collapse navbar-collapse">
                    {auth === '' ? (
                        // Opções caso não exista um usuário logado
                        <>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"></li>
                            </ul>
                            <div className="d-grid d-sm-flex justify-content-sm-evenly">
                                <Link to="/login" className="btn btn-light mt-3 mt-sm-3 mb-3 me-md-2 poppins" role="button">Fazer Login</Link>
                                <Link to="/register" className="btn btn-primary fw-semibold mt-sm-3 mb-3 poppins" role="button">Cadastre-se</Link>
                            </div>
                        </>
                    ) : (
                        // Opções caso exista um usuário logado
                        <>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                </li>
                            </ul>
                            <div className="d-grid d-md-flex justify-content-md-evenly">
                                <span className="d-flex align-items-center nav-link fs-6 mt-3 mt-sm-3 mb-3 me-md-2 poppins">
                                    <LetterAvatar size="32" bgColor="#19944c" textColor="#FFF" className="me-2">
                                        {name[0]}{surname[0]}
                                    </LetterAvatar>
                                    <span className="ms-2">Olá, {name}!</span>
                                </span>
                                {functionRole === 'ROLE_ADMIN' ? (
                                    <Link to="/accountadmin" className="btn btn-light mt-3 mt-sm-3 mb-3 poppins" role="button">Administrar</Link>
                                ) : (
                                    <Link to="/accountuser" className="btn btn-primary fw-semibold mt-sm-3 mb-3 poppins" role="button">Minha Conta</Link>
                                )}
                                <Link to="/" onClick={() => logout()} className="btn btn-primary fw-semibold mt-sm-3 mb-3 poppins ms-md-2" role="button">Sair</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}