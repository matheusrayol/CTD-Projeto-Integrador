import React from 'react'
import RegisterValidation from '../components/RegisterValidation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <RegisterValidation />
            <Footer />
        </>
    )
}
