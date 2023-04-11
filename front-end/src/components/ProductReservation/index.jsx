import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { DoubleCalendar } from '../CalendarTG/Double'
import { SingleCalendar } from '../CalendarTG/Single'
import { useAuth } from '../../hooks/useAuth'
import TGLeaf from '../../assets/travelgreen_leaf.svg'
import moment from 'moment'

import axios from 'axios'

import { useLocation } from 'react-router-dom'

export default function ProductReservation() {
    const [selectRange, setSelectRange] = useState(false)
    const [dateRange, setDateRange] = useState([null, null]);

    const selectedRange = range => {
        localStorage.setItem('startDate', range[0])
        localStorage.setItem('endDate', range[1])
        setDateRange(range)
        setSelectRange(true)
    }

    const disabledDates = [
        new Date(2023, 3, 12),
        new Date(2023, 3, 11), 
        new Date(2023, 3, 10)
    ];

    function tileDisabled({ date, view }) {
        return disabledDates.some(disabledDate =>
            disabledDate.getDate() === date.getDate() &&
            disabledDate.getMonth() === date.getMonth() &&
            disabledDate.getFullYear() === date.getFullYear()
        );
    }

    const [horaChegada, setHoraChegada] = useState(false)
    const { logout, auth, name, surname, email } = useAuth()

    function handleChange(event) {
        setHoraChegada(event.target.value)
    }

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
                                    <Link onClick={() => navigate(-1)} className="text-white">
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
                        <div className="container my-5">
                            <div className="row gx-3 gy-3 rounded">
                                <div className="col-12 col-lg-7 px-4 py-4 rounded bg-white">
                                    <h5 className="poppins travelgreen-logo mb-4">Data para a reserva</h5>
                                    <div className="text-center d-flex d-xl-none justify-content-center align-items-center align-content-center flex-grow-1">
                                    <SingleCalendar
                                            id={dateRange}
                                            onSelectedRange={selectedRange}
                                            selectRange={selectRange}
                                            tileDisabled={tileDisabled}
                                        />
                                    </div>
                                    <div className="text-center d-none d-xl-flex justify-content-center align-items-center align-content-center flex-grow-1">
                                    <DoubleCalendar
                                            id={dateRange}
                                            onSelectedData={selectedRange}
                                            selectRange={selectRange}
                                            tileDisabled={tileDisabled}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <h5 className="text-start poppins travelgreen-logo mb-2">Hora para a reserva</h5>
                                    </div>
                                    <div className="d-flex mb-5">
                                        <select value={horaChegada} onChange={handleChange} className="btn btn-lg btn-success d-flex flex-grow-1">
                                            <option className="bg-white text-dark" value="">Selecione hora prevista de chegada</option>
                                            <option className="bg-white text-dark" value="01:00:00">01:00 AM</option>
                                            <option className="bg-white text-dark" value="02:00:00">02:00 AM</option>
                                            <option className="bg-white text-dark" value="03:00:00">03:00 AM</option>
                                            <option className="bg-white text-dark" value="04:00:00">04:00 AM</option>
                                            <option className="bg-white text-dark" value="05:00:00">05:00 AM</option>
                                            <option className="bg-white text-dark" value="06:00:00">06:00 AM</option>
                                            <option className="bg-white text-dark" value="07:00:00">07:00 AM</option>
                                            <option className="bg-white text-dark" value="08:00:00">08:00 AM</option>
                                            <option className="bg-white text-dark" value="09:00:00">09:00 AM</option>
                                            <option className="bg-white text-dark" value="10:00:00">10:00 AM</option>
                                            <option className="bg-white text-dark" value="11:00:00">11:00 AM</option>
                                            <option className="bg-white text-dark" value="12:00:00">12:00 AM</option>
                                            <option className="bg-white text-dark" value="13:00:00">01:00 PM</option>
                                            <option className="bg-white text-dark" value="14:00:00">02:00 PM</option>
                                            <option className="bg-white text-dark" value="15:00:00">03:00 PM</option>
                                            <option className="bg-white text-dark" value="16:00:00">04:00 PM</option>
                                            <option className="bg-white text-dark" value="17:00:00">05:00 PM</option>
                                            <option className="bg-white text-dark" value="18:00:00">06:00 PM</option>
                                            <option className="bg-white text-dark" value="19:00:00">07:00 PM</option>
                                            <option className="bg-white text-dark" value="20:00:00">08:00 PM</option>
                                            <option className="bg-white text-dark" value="21:00:00">09:00 PM</option>
                                            <option className="bg-white text-dark" value="22:00:00">10:00 PM</option>
                                            <option className="bg-white text-dark" value="23:00:00">11:00 PM</option>
                                            <option className="bg-white text-dark" value="00:00:00">12:00 PM</option>
                                        </select>
                                    </div>
                                    <div className="text-center mt-3">
                                        <h5 className="text-start poppins travelgreen-logo mb-2">Informações importantes</h5>
                                    </div>
                                    <div id="accordion-1" className="accordion" role="tablist">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" role="tab">
                                                <button className="accordion-button collapsed text-white bg-success poppins" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">
                                                    Políticas da reserva
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                                <div className="accordion-body">
                                                    <section>
                                                        <div className="container">
                                                            <div className="row gy-2 row-cols-1">
                                                                <div className="col">
                                                                    <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
                                                                        <div>
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
                                                                        <div>
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
                                                                        <div>
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
                                <div className="col-12 col-lg-5 d-flex flex-column flex-grow-0 flex-shrink-1 align-self-start rounded shadow-lg px-4 py-4 bg-success">
                                    <h4 className="fw-semibold poppins py-2 text-white">Sua reserva</h4>
                                    <img className="img-fluid py-0 rounded" src={product.images[0].urlImage} />
                                    <form>
                                        <section className="py-2">
                                            <input id="name" className="form-control mb-2" type="text" name="name" placeholder={name} value={name} readOnly disabled />
                                            <input id="surname" className="form-control mb-2" type="text" name="surname" value={surname} readOnly disabled />
                                            <input id="email" className="form-control mb-2" type="text" name="email" placeholder={email} value={email} readOnly disabled />
                                            <input id="city" className="form-control" type="text" name="city" placeholder="Digite a cidade desejada" />
                                            <div className="d-flex flex-column mt-3 mb-3">
                                                <span className="mb-1 text-white">
                                                    <strong>Data de retirada:</strong>
                                                    &nbsp;
                                                    {moment(startDate).format('DD/MM/YYYY')}
                                                </span>
                                                <span className="mb-1 text-white">
                                                    <strong>Hora de retirada:</strong>
                                                    &nbsp;
                                                    {horaChegada}
                                                </span>
                                                <span className="mb-1 text-white">
                                                    <strong>Data de retorno: </strong>
                                                    &nbsp;
                                                    {moment(endDate).format('DD/MM/YYYY')}
                                                </span>
                                            </div>
                                        </section>
                                    </form>
                                    <div className="d-flex row">
                                        <div className="btn-group" role="group"><button className="btn btn-light poppins mb-3" type="button">Confirmar reserva</button></div>
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