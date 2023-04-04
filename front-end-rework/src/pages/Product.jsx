import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RenderedPage from '../components/Product/RenderedPage'
import { useParams } from 'react-router'

import { RotatingLines } from 'react-loader-spinner'
import axios from 'axios'

export default function Product() {
    const params = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            const response = await axios.get(`/product/all`);
            const products = response.data;
            const product = products.find(p => p.id === parseInt(params.id));
            setProduct(product);
        }
        fetchProduct();
    }, [params]);

    return (
        <>
            <Navbar />
            {product ? (
                <RenderedPage key={product.id} productData={product}/>
                // scroll to top of the page
            ) : (
                <div className="spinner">
                    <RotatingLines
                        strokeColor="#499167"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="48"
                        visible={true}
                    />
                </div>
            )}
            <Footer />
        </>
    )
}
