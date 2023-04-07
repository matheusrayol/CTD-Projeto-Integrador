import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import axios from 'axios'
import { DoubleCalendar } from '../CalendarTG/Double'
import { SingleCalendar } from '../CalendarTG/Single'
import TGLeaf from '../../assets/travelgreen_leaf.svg'
// import { format } from 'date-fns'

import { useLocation } from 'react-router-dom'

export default function ProductDetails() {

    const location = useLocation().pathname.split('/')[2]
    const [product, setProduct] = useState()

    useEffect(() => {
        function fetchProduct() {
            axios.get(`http://localhost:8080/product/${location}`)
                .then(response => {
                    setProduct(response.data)
                    console.log(product)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    fetchProduct()

    }, []
    )

    
    // const { auth } = useAuth()

    function alertYouLogin() {
        alert('Você não está logado para realizar uma reserva')
        //enviar uma logica para o LoginValidation para criar um "pop-up" no local do alert
    }

    const [expandedImgSrc, setExpandedImgSrc] = useState('');
    
    const [imgText, setImgText] = useState('');

    function handleImgClick(event) {
        // Use the same src in the expanded image as the image being clicked on from the grid
        setExpandedImgSrc(event.target.src);

        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        setImgText(event.target.alt);

        // Show the container element (hidden with CSS)
        event.target.parentElement.style.display = 'block';
    }

    // Const que seleciona a data do calendario selecionado
    const selectedDate = range => {
        setStartDate(range)
        setSelectDate(true)
        setShowCalendar(false)
    }

    const [selectDate, setSelectDate] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [startDate, setStartDate] = useState([null, null]);

    return (
        <>
            {product ? (
                <main className="flex-grow-1">
                    <section className="py-2" style={{ background: `#008751` }}>
                        <div className="container text-white">
                            <div className="row d-flex justify-content-center align-items-center align-content-center">
                                <div className="col d-flex justify-content-start">
                                    <div className="d-grid d-xxl-flex align-items-xxl-center">
                                        <button className="btn btn-light btn-sm disabled fs-6 poppins disabled ms-3" type="button" style={{ fontWeight: `bold`, fontSize: 19 + `px`, opacity: `1` }} disabled>
                                            {product.category.qualification}
                                        </button>
                                    </div>
                                    <span className="text-truncate d-flex align-items-center fs-4 poppins ms-1">
                                        {product.name}
                                    </span>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <Link to="/" className="text-white">
                                        <svg className="bi bi-arrow-left-circle-fill fs-3 me-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-2" style={{ background: `#009e60` }}>
                        <div className="container text-white">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col">
                                    <span className="text-truncate d-flex align-items-center ubuntu fs-5">
                                        <svg className="bi bi-pin-map-fill ms-4 me-2 fs-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                                            <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                                        </svg>
                                        {product.city.name}, {product.city.state} - {product.city.country}
                                    </span>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <button className="btn btn-success btn-sm disabled fs-5 poppins disabled me-1" type="button" style={{ fontWeight: `bold`, opacity: `1`, background: `#009e60`, borderStyle: `none` }} disabled>
                                        <img src={TGLeaf} width="20px" style={{ filter: `invert(100%)` }} />
                                        {product.sustainability}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container top-container">
                            <div className="row">
                                <div className="col-lg-12 col-xl-7 col-xxl-7 mb-3">
                                    <div className="img-container">
                                        <img id="expandedImg" className="rounded" style={{ width: 100 + `%` }} src={expandedImgSrc ? expandedImgSrc : product.images[0].urlImage} alt={imgText} />
                                    </div>
                                    <div className="row img-row" style={{ paddingRight: 10 + `px`, paddingLeft: 10 + `px` }}>
                                        <div className="col column">
                                            <img className="img-thumbnail img-fluid img-square" src={product.images[0].urlImage} alt={product.name} onClick={handleImgClick} />
                                        </div>
                                        <div className="col column">
                                            <img className="img-thumbnail img-fluid img-square" src={product.images[1].urlImage} alt={product.name} onClick={handleImgClick} />
                                        </div>
                                        <div className="col column">
                                            <img className="img-thumbnail img-fluid img-square" src={product.images[2].urlImage} alt={product.name} onClick={handleImgClick} />
                                        </div>
                                        <div className="col column">
                                            <img className="img-thumbnail img-fluid img-square" src={product.images[3].urlImage} alt={product.name} onClick={handleImgClick} />
                                        </div>
                                        <div className="col column">
                                            <img className="img-thumbnail img-fluid img-square" src={product.images[4].urlImage} alt={product.name} onClick={handleImgClick} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-5 d-flex flex-column bg-white rounded shadow-lg px-4 py-4 position-relative">
                                    <div className="position-absolute" style={{ top: `0`, right: `0`, marginRight: 20 + `px`, marginTop: 20 + `px` }}>
                                        <svg className="bi bi-share travelgreen-logo me-3 fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                                        </svg>
                                        <svg className="bi bi-heart travelgreen-logo fs-3 me-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="fw-semibold poppins travelgreen-logo">Sobre o veículo</h4>
                                    <hr />
                                    <p className="flex-fill fs-6 ubuntu tt-8l">
                                        {product.description}
                                    </p>
                                    <div className="mb-1"><span className="fs-5 mb-2 fw-bold">R$<span className="fs-3 ps-1 fw-bolder">109,99</span></span><span className="fs-6 ps-1 fw-light">/diária</span></div>
                                    <div className="d-flex row pt-3">
                                        <p className="text-center tag-cloud"><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                            <path d="M256 0C291.3 0 320 28.65 320 64V256H336C384.6 256 424 295.4 424 344V376C424 389.3 434.7 400 448 400C461.3 400 472 389.3 472 376V252.3C439.5 242.1 416 211.8 416 176V144C416 135.2 423.2 128 432 128H448V80C448 71.16 455.2 64 464 64C472.8 64 480 71.16 480 80V128H512V80C512 71.16 519.2 64 528 64C536.8 64 544 71.16 544 80V128H560C568.8 128 576 135.2 576 144V176C576 211.8 552.5 242.1 520 252.3V376C520 415.8 487.8 448 448 448C408.2 448 376 415.8 376 376V344C376 321.9 358.1 304 336 304H320V448C337.7 448 352 462.3 352 480C352 497.7 337.7 512 320 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C32 28.65 60.65 0 96 0H256zM197.6 83.85L85.59 179.9C80.5 184.2 78.67 191.3 80.99 197.6C83.32 203.8 89.3 208 95.1 208H153.8L128.8 282.9C126.5 289.8 129.1 297.3 135.1 301.3C141 305.3 148.1 304.8 154.4 300.1L266.4 204.1C271.5 199.8 273.3 192.7 271 186.4C268.7 180.2 262.7 176 256 176H198.2L223.2 101.1C225.5 94.24 222.9 86.74 216.9 82.72C210.1 78.71 203 79.17 197.6 83.85V83.85z"></path>
                                        </svg>Recarregável</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z"></path>
                                        </svg>Zero Emissões</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                            <path d="M183.6 118.6C206.5 82.58 244.1 56.84 288 49.88V32C288 14.33 302.3 .0003 320 .0003C337.7 .0003 352 14.33 352 32V49.88C424.5 61.39 480 124.2 480 200V233.4C480 278.8 495.5 322.9 523.8 358.4L538.7 377C543.1 383.5 545.4 392.2 542.6 400L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L183.6 118.6zM221.7 148.4L450.7 327.1C438.4 298.2 432 266.1 432 233.4V200C432 142.6 385.4 96 328 96H312C273.3 96 239.6 117.1 221.7 148.4V148.4zM160 233.4V222.1L206.7 258.9C202.7 297.7 189.5 335.2 168.3 368H345.2L406.2 416H120C110.8 416 102.4 410.7 98.37 402.4C94.37 394.1 95.5 384.2 101.3 377L116.2 358.4C144.5 322.9 160 278.8 160 233.4V233.4zM384 448C384 464.1 377.3 481.3 365.3 493.3C353.3 505.3 336.1 512 320 512C303 512 286.7 505.3 274.7 493.3C262.7 481.3 256 464.1 256 448H384z"></path>
                                        </svg>Silencioso</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                            <path d="M448 320H96V192H448V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z"></path>
                                        </svg>Autonomia</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
                                        </svg>Performance</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"></path>
                                        </svg>Fácil manutenção</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"></path>
                                        </svg>Rápida aceleração</span><span className="poppins"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M328 160h-144C170.8 160 160 170.8 160 184v144C160 341.2 170.8 352 184 352h144c13.2 0 24-10.8 24-24v-144C352 170.8 341.2 160 328 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"></path>
                                        </svg>Recarga por frenagem</span></p>
                                        <div className="btn-group" role="group"><a href="#bookVehicle" className="btn btn-success poppins" type="button">Verificar disponibilidade</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-4">
                        <div className="container shadow rounded bg-white">
                            <div className="row row-cols-1 row-cols-lg-2 mt-3 bg-transparent">
                                <div className="col d-flex flex-column py-4 px-4 bg-transparent">
                                    <h4 className="poppins travelgreen-logo mb-4">Datas disponíveis</h4>
                                    <div className="text-center d-flex d-md-none justify-content-center align-items-center align-content-center flex-grow-1">
                                        <SingleCalendar
                                            id={startDate}
                                            onSelectedData={selectedDate}
                                            selectedRange={startDate}
                                        />
                                    </div>
                                    <div className="text-center d-none d-md-flex justify-content-center align-items-center align-content-center flex-grow-1">
                                        <DoubleCalendar
                                            id={startDate}
                                            onSelectedData={selectedDate}
                                            selectedRange={startDate}
                                        />
                                    </div>
                                    <div className="text-center mt-3"><Link id="bookVehicle" to="#" className="btn btn-success poppins" role="button">Efetuar reserva</Link></div>
                                </div>
                                <div className="col py-4 px-4 bg-transparent">
                                    <h4 className="poppins travelgreen-logo mb-4">Políticas de reserva</h4>
                                    <h4 className="poppins">Heading</h4>
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                    <h4 className="poppins">Heading</h4>
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                    <h4 className="poppins">Heading</h4>
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
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
        </>

    )
}