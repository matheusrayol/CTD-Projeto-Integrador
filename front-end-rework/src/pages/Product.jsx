import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDetails from "../components/ProductDetails";
import { useLocation, ScrollRestoration } from 'react-router-dom'

export default function Product() {

    const location = useLocation()
    localStorage.setItem('currentLocation', location.pathname)

    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <ProductDetails />
            <Footer />
        </>
    )
}
