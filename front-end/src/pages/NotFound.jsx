import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Error from '../components/Error'
import { ScrollRestoration } from 'react-router-dom'


export default function Login() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Error />
            <Footer />
        </>
    )
}