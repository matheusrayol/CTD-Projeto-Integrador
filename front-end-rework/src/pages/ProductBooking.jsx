import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'
import ProductReservation from '../components/ProductReservation';

export default function ProductBooking() {
   return (
        <>
        <ScrollRestoration />
            <Navbar />
            <ProductReservation />
            <Footer />
        </>
    )
}
