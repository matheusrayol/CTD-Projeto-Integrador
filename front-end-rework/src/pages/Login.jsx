import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginValidation from '../components/LoginValidation'


export default function Login() {
    return (
        <>
            <Navbar />
            <LoginValidation />
            <Footer />
        </>
    )
}