import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDetails from "../components/ProductDetails";
import { ScrollRestoration } from 'react-router-dom'

export default function Product() {
   return (
        <>
        <ScrollRestoration />
            <Navbar />
            <ProductDetails />
            <Footer />
        </>
    )
}
