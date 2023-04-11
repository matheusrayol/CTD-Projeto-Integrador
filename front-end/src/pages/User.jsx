import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccountUser from '../components/AccountUser'
import { ScrollRestoration } from 'react-router-dom'


export default function User() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <AccountUser />
            <Footer />
        </>
    )
}