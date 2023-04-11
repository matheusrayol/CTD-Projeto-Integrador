import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccountAdmin from '../components/AccountAdmin'
import { ScrollRestoration } from 'react-router-dom'


export default function User() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <AccountAdmin />
            <Footer />
        </>
    )
}