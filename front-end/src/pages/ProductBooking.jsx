import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import ProductReservation from '../components/ProductReservation';

export default function ProductBooking() {

    const location = useLocation()
    localStorage.setItem('currentLocation', location.pathname)

    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <ProductReservation />
            <Footer />
        </>
    )
}
