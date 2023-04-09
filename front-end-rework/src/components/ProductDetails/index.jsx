import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { DoubleCalendar } from '../CalendarTG/Double'
import { SingleCalendar } from '../CalendarTG/Single'
import TGLeaf from '../../assets/travelgreen_leaf.svg'
import { useAuth } from '../../hooks/useAuth'
import FsLightbox from 'fslightbox-react'

import axios from 'axios'

import { useLocation } from 'react-router-dom'

export default function ProductDetails() {

    const [toggler, setToggler] = useState(false)

    const location = useLocation().pathname.split('/')[2]
    const [product, setProduct] = useState()

    useEffect(() => {
        function fetchProduct() {
            axios.get(`http://localhost:8080/product/${location}`)
                .then(response => {
                    setProduct(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
        fetchProduct()

    }, []
    )

    const { auth } = useAuth()

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

    const [selectDate, setSelectDate] = useState(false)
    const [rangeDate, setRangeDate] = useState([null, null]);

    // Const que seleciona a data do calendario selecionado
    const selectedDate = range => {
        localStorage.setItem('startDate', range[0])
        localStorage.setItem('endDate', range[1])
        setRangeDate(range)
        setSelectDate(true)
    }

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
                                    <span className="text-truncate d-flex align-items-center ubuntu fs-5 ms-3">
                                        <svg className="bi bi-pin-map-fill me-2 fs-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                                            <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                                        </svg>
                                        {product.city.name}, {product.city.state} - {product.city.country}
                                    </span>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <button className="btn btn-success btn-sm disabled fs-5 poppins disabled me-1" type="button" style={{ fontWeight: `bold`, opacity: `1`, background: `#009e60`, borderStyle: `none` }} disabled>
                                        <img src={TGLeaf} width="20px" style={{ filter: `invert(100%)` }} />
                                        &nbsp;{product.sustainability}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="carousel-1" className="carousel slide d-flex d-lg-none" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {product.images.map((image, index) => (
                                    <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                                        <img className="w-100 d-block" src={image.urlImage} alt={product.name} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                            <ol className="carousel-indicators">
                                <li className="active" data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
                                <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                                <li data-bs-target="#carousel-1" data-bs-slide-to="3"></li>
                                <li data-bs-target="#carousel-1" data-bs-slide-to="4"></li>
                            </ol>
                        </div>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-lg-12 col-xl-7 col-xxl-7 d-none d-lg-flex">
                                    <div>
                                        <div className="img-container">
                                            <img id="expandedImg" className="rounded w-100" src={expandedImgSrc ? expandedImgSrc : product.images[0].urlImage} alt={imgText} onClick={() => setToggler(!toggler)} />
                                            <div id="className"></div>
                                        </div>
                                        <FsLightbox
                                            key={product.id + '-lightbox'}
                                            toggler={toggler}
                                            sources={[
                                                expandedImgSrc ? expandedImgSrc : product.images[0].urlImage,
                                                product.images[1].urlImage,
                                                product.images[2].urlImage,
                                                product.images[3].urlImage,
                                                product.images[4].urlImage
                                            ]}
                                            thumbs={[
                                                null,
                                                null,
                                                null,
                                                null,
                                                null
                                            ]}
                                            types={[
                                                'image',
                                                'image',
                                                'image',
                                                'image',
                                                'image'
                                            ]}          
                                        />
                                        <div className="row gx-2">
                                            <div className="col column">
                                                <img className="img-thumbnail img-square shadow" src={product.images[0].urlImage} alt={product.name} onClick={handleImgClick} />
                                            </div>
                                            <div className="col column">
                                                <img className="img-thumbnail img-square shadow" src={product.images[1].urlImage} alt={product.name} onClick={handleImgClick} />
                                            </div>
                                            <div className="col column">
                                                <img className="img-thumbnail img-square shadow" src={product.images[2].urlImage} alt={product.name} onClick={handleImgClick} />
                                            </div>
                                            <div className="col column">
                                                <img className="img-thumbnail img-square shadow" src={product.images[3].urlImage} alt={product.name} onClick={handleImgClick} />
                                            </div>
                                            <div className="col column">
                                                <img className="img-thumbnail img-square shadow" src={product.images[4].urlImage} alt={product.name} onClick={handleImgClick} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-5 d-flex flex-column bg-white rounded shadow-lg px-4 py-4 position-relative">
                                    <div className="position-absolute share-like">
                                        <svg className="bi bi-share travelgreen-logo me-3 fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                                        </svg>
                                        <svg className="bi bi-heart travelgreen-logo fs-3 me-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="fw-semibold d-flex align-items-center poppins travelgreen-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                                        </svg>
                                        &nbsp;{Math.round(product.sustainability / 10 / 2)}/5
                                    </h4>
                                    <hr />
                                    <p className="flex-fill fs-6 ubuntu ff-8l">
                                        {product.description}
                                    </p>
                                    <h4 className="poppins travelgreen-logo mb-4">
                                        Características
                                    </h4>
                                    <p className="text-center tag-cloud">
                                        <span className="poppins">
                                            <img src={product.characteristics[0].icon} alt={product.characteristics[0].name} />
                                            &nbsp;
                                            {product.characteristics[0].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[1].icon} alt={product.characteristics[1].name} />
                                            &nbsp;
                                            {product.characteristics[1].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[2].icon} alt={product.characteristics[2].name} />
                                            &nbsp;{product.characteristics[2].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[3].icon} alt={product.characteristics[3].name} />
                                            &nbsp;
                                            {product.characteristics[3].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[4].icon} alt={product.characteristics[4].name} />
                                            &nbsp;
                                            {product.characteristics[4].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[5].icon} alt={product.characteristics[5].name} />
                                            &nbsp;
                                            {product.characteristics[5].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[6].icon} alt={product.characteristics[6].name} />
                                            &nbsp;
                                            {product.characteristics[6].name}
                                        </span>
                                        <span className="poppins">
                                            <img src={product.characteristics[7].icon} alt={product.characteristics[7].name} />
                                            &nbsp;
                                            {product.characteristics[7].name}
                                        </span>
                                    </p>
                                    <div className="mb-2">
                                        <span className="fs-5 mb-2 fw-bold">
                                            R$
                                            <span className="fs-3 ps-1 fw-bolder">
                                                {Math.round(product.sustainability) * 2},99
                                            </span>
                                        </span>
                                        <span className="fs-6 ps-1 fw-light">
                                            /diária
                                        </span>
                                    </div>
                                    <div className="d-flex row">
                                        <div className="btn-group" role="group">
                                            <a href="#bookVehicle" className="btn btn-success poppins" type="button">
                                                Verificar disponibilidade
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-4">
                        <div className="container p-0 shadow-lg mt-2 mb-4 rounded">
                            <div id="accordion-1" className="accordion" role="tablist">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button className="accordion-button text-white bg-success poppins fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">
                                            O que você precisa saber
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show item-1" role="tabpanel">
                                        <div className="accordion-body">
                                            <section>
                                                <div className="container">
                                                    <div className="row gy-2 row-cols-1 row-cols-lg-2 row-cols-xl-3">
                                                        <div className="col">
                                                            <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
                                                                <div className="px-3">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="bs-icon-sm bs-icon-circle text-bg-success d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon me-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                                                                {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                                                                <path d="M96 96C96 60.65 124.7 32 160 32H576C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96zM160 320H224C224 284.7 195.3 256 160 256V320zM160 96V160C195.3 160 224 131.3 224 96H160zM576 256C540.7 256 512 284.7 512 320H576V256zM512 96C512 131.3 540.7 160 576 160V96H512zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <h4 className="text-center text-lg-start justify-content-center poppins mb-0 fs-5">Locação</h4>
                                                                    </div>
                                                                    <ul>
                                                                        <li>A tolerância máxima de atraso para a retirada do veículo é de 15 minutos</li>
                                                                        <li>Não é permitido fumar ou beber dentro do veículo</li>
                                                                        <li>Não é permitido desativar sistemas de segurança, como monitoramento por GPS e o serviço de assistência remota</li>
                                                                    </ul>
                                                                    <p></p>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col d-flex">
                                                            <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
                                                                <div className="px-3">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="bs-icon-sm bs-icon-circle text-bg-success d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon me-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                                                                {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                                                                <path d="M96 96C96 60.65 124.7 32 160 32H576C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96zM160 320H224C224 284.7 195.3 256 160 256V320zM160 96V160C195.3 160 224 131.3 224 96H160zM576 256C540.7 256 512 284.7 512 320H576V256zM512 96C512 131.3 540.7 160 576 160V96H512zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <h4 className="text-center text-lg-start justify-content-center poppins mb-0 fs-5">Saúde e segurança</h4>
                                                                    </div>
                                                                    <ul>
                                                                        <li>Veículos higienizados na retirada e na devolução</li>
                                                                        <li>Veículos revisados e com seguro contra acidentes</li>
                                                                        <li>Sistema de monitoramento por GPS</li>
                                                                        <li>Assistência remota por telefone ou videochamada</li>
                                                                    </ul>
                                                                    <p></p>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col d-flex flex-grow-1">
                                                            <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
                                                                <div className="px-3">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="bs-icon-sm bs-icon-circle text-bg-success d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon me-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                                                                <path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM304 384c8.875 0 16 7.125 16 16S312.9 416 304 416h-47.25c-16.38 0-31.25-9.125-38.63-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.75 15.38C187.6 412.6 181.1 416 176 416H174.9c-6.5-.5-12-4.75-14-11L144 354.6L133.4 386.5C127.5 404.1 111 416 92.38 416H80C71.13 416 64 408.9 64 400S71.13 384 80 384h12.38c4.875 0 9.125-3.125 10.62-7.625l18.25-54.63C124.5 311.9 133.6 305.3 144 305.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12c2 4 6 6.5 10.12 6.5H304z"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <h4 className="text-center text-lg-start poppins fs-5">Cancelamento da reserva</h4>
                                                                    </div>
                                                                    <p>O cancelamento pode ser efetuado sem custo até 24 horas antes da data escolhida para a retirada.</p>
                                                                    <p>O cancelamento com menos de 24 horas da data escolhida para retirada incorrerá em uma tarifa de 20% do valor da reserva.</p>
                                                                    <p>Em caso de indisponibilidade do veículo escolhido por motivos de força maior, o cliente poderá optar por escolher outro veículo ou cancelar a reserva sem custo.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mb-4 rounded shadow bg-white">
                            <div className="row row-cols-1 row-cols-lg-2 mt-3 rounded">
                                <div className="col py-4 px-4 rounded bg-white">
                                    <h4 className="poppins travelgreen-logo mb-4">O que estão falando</h4>
                                    <div id="carousel-t" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="col-9 text-center mx-auto testimonial-content">
                                                    <img className="rounded-circle" src="https://loremflickr.com/320/320/dog" width="100" alt="Testimonial 1" />
                                                    <p className="d-flex text-center rating justify-content-center align-items-center">5&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                                        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                                                    </svg></p>
                                                    <p className="text-center"><em>Fiquei muito surpreso com a qualidade do carro que aluguei. Consegui levar minha família sem problemas para passeios no litoral carioca, e a bateria durou muito!</em></p>
                                                    <p className="signature">João Batista</p>
                                                    <p className="text-center date">21 de março de 2023</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="col-9 offset-xl-1 offset-xxl-3 text-center mx-auto testimonial-content">
                                                    <img className="rounded-circle" src="https://loremflickr.com/320/320/cat" width="100" alt="Testimonial 2" />
                                                    <p className="d-flex text-center rating justify-content-center align-items-center">5&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                                        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                                                    </svg></p>
                                                    <p className="text-center"><em>Carro maravilhoso! Tive um problema para destravar a porta, e o suporte remoto me ajudou em segundos. Recomendo!</em></p>
                                                    <p className="signature">Janaína Medeiros</p>
                                                    <p className="text-center date">11 de fevereiro de 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a className="carousel-control-prev" href="#carousel-t" role="button" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                                <span className="visually-hidden">Anterior</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel-t" role="button" data-bs-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                                <span className="visually-hidden">Próximo</span>
                                            </a>
                                        </div>
                                        <ol className="carousel-indicators">
                                            <li className="active" data-bs-target="#carousel-t" data-bs-slide-to="0"></li>
                                            <li data-bs-target="#carousel-t" data-bs-slide-to="1"></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col offset-xxl-0 d-flex flex-column py-4 px-4 rounded bg-white">
                                    <h4 className="poppins travelgreen-logo mb-4">Datas disponíveis</h4>
                                    <div className="text-center d-flex d-xl-none justify-content-center align-items-center align-content-center flex-grow-1">
                                        <SingleCalendar
                                            id={rangeDate}
                                            onSelectedData={selectedDate}
                                            selectedRange={rangeDate}
                                        />
                                    </div>
                                    <div className="text-center d-none d-xl-flex justify-content-center align-items-center align-content-center flex-grow-1">
                                        <DoubleCalendar
                                            id={rangeDate}
                                            onSelectedData={selectedDate}
                                            selectedRange={rangeDate}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        {auth ? (
                                            <Link key={product.id} id="bookVehicle" to={`../product/${product.id}/bookVehicle`} className="btn btn-success poppins" role="button" state={{ state: product.id }}>Efetuar reserva</Link>
                                        ) : (
                                            <Link id="bookVehicle" to="/login" className="btn btn-outline-danger poppins" role="button" disabled>Faça o login para efetuar a reserva</Link>
                                        )}
                                    </div>
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