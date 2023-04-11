import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginValidation from '../components/LoginValidation'
import { ScrollRestoration } from 'react-router-dom'


export default function Login() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <LoginValidation />
            <Footer />
        </>
    )
}