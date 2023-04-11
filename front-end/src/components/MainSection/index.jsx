import { useEffect, useState } from 'react'
import { HomeCalendar } from '../CalendarTG/HomeCalendar'
import { LocationSelector } from '../LocationSelector'
import { CategoryCard } from '../CategoryCard'
import { ProductCard } from '../ProductCard'
import { format } from 'date-fns'

import axios from 'axios'

export default function MainSection() {

    // Configuração do calendário e busca de reservas
    const [selectDate, setSelectDate] = useState(false)
    const [showCity, setShowCity] = useState(false)

    // Configuração dos cards e filtros
    const objectFilter = useState([])
    const listProducts = useState(true)
    const [inputSelect, setInputSelect] = useState(true)
    const [valueInputSelect, setValueInputSelect] = useState('')


    // Retorna as categorias em cards
    const [category, setCategory] = useState([]);
    // Chamada assíncrona para buscar as categorias cadastradas para geração dos cards
    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get('/category/all');
                setCategory(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCategory();
    }, []);


    // Retorna as cidades cadastradas
    const [location, setLocation] = useState([]);
    // Chamada assíncrona para buscar as cidades cadastradas
    useEffect(() => {
        async function fetchLocation() {
            try {
                const response = await axios.get('/city/all');
                setLocation(response.data);
            } catch (error) {
                console.error(error);
            }
        }
            fetchLocation();
    }, []);


    // Retorna todos os produtos cadastrados
    const [products, setProducts] = useState([]);
    // Chamada assíncrona para buscar os produtos cadastrados
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('/product/all');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts();
    }, []);


    // Função responsável pelo filtro por cidade e/ou datas
    const [startDate, setStartDate] = useState([null, null]);
    const [cityId, setCityId] = useState('');
    // Chamada assíncrona para buscar os produtos cadastrados
    async function submit(event) {
        event.preventDefault();

        try {
            let url = '';
            if (startDate[0] === null && cityId !== '') {
                url = `/product/all?cityId=${cityId}`;
            } else if (startDate[0] !== null && startDate[1] !== null && cityId !== '') {
                const startDateInput = format(startDate[0], 'yyyy-MM-dd');
                const endDateInput = format(startDate[1], 'yyyy-MM-dd');
                url = `/product/availability?cityId=${cityId}&startDate=${startDateInput}&endDate=${endDateInput}`;
            } else {
                return;
            }

            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Chamada assíncrona para buscar os produtos cadastrados conforme a ID da categoria
    async function filterCategory(id) {
        try {
            const response = await axios.get(`/product/all?categoryId=${id}`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // const que fecha o toggle caso o input escolhido tenha sido clicado
    const inputSelected = cityName => {
        setValueInputSelect(cityName)
        setShowCity(false)
    }

    // Função responsável pelo recebimento do valor selecionado no input de cidade
    const getValueInputSelect = event => {
        setValueInputSelect(event.target.value)
        if (valueInputSelect.length >= 1) {
            setInputSelect(false)
        } else {
            setInputSelect(true)
        }
    }

    // Const que seleciona a data do calendario selecionado
    const selectedDate = range => {
        setStartDate(range)
        setSelectDate(true)
    }

    // Const para formatação e formas do alcance do calendário
    const formatDate = range => {
        if (!range) {
            return ''
        }

        const startDay = range[0].toLocaleString('pt-BR', { day: '2-digit' })
        const startMonth = range[0].toLocaleString('pt-BR', { month: '2-digit' })
        const startYear = range[0].toLocaleString('pt-BR', { year: 'numeric' })
        const endDay = range[1].toLocaleString('pt-BR', { day: '2-digit' })
        const endMonth = range[1].toLocaleString('pt-BR', { month: '2-digit' })
        const endYear = range[1].toLocaleString('pt-BR', { year: 'numeric' })

        return `De ${startDay}/${startMonth}/${startYear} a ${endDay}/${endMonth}/${endYear}`
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseMenu = () => {
        document.querySelector('[aria-controls="categoryList"]').setAttribute('aria-expanded', 'false');
        document.querySelector('#categoryList').classList.remove('show');
        setIsMenuOpen(false);
    };

    return (
        <>
            <header>
                <section className="travelgreen-bgcolor pt-4 pb-4">
                    <div className="container text-white poppins">
                        <div className="row gy-2 justify-content-center align-items-center">
                            <div className="col-md-4 col-lg-3 d-flex justify-content-center align-item-center">
                                <div className="dropdown w-100">
                                    <input className="btn btn-light dropdown-toggle w-100"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                        type="text"
                                        onChange={getValueInputSelect}
                                        placeholder='Cidade para retirada'
                                        defaultValue={valueInputSelect} />
                                    <div id="showCity" className="dropdown-menu w-100 px-2 py-2">
                                        {location.map((location, index) => (
                                            <LocationSelector
                                                key={location.id}
                                                id={index.length}
                                                data={location}
                                                onSelectCity={currentCity => {
                                                    inputSelected(currentCity)
                                                    setCityId(location.id)
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                                <div className="dropdown w-100" data-bs-auto-close="outside">
                                    <input className="btn btn-light dropdown-toggle w-100"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        type="text"
                                        placeholder='Data da Reserva'
                                        defaultValue={selectDate ? formatDate(startDate) : ''}
                                    />
                                    <div className="dropdown-menu w-100 px-2 py-2" data-bs-auto-close="outside">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <HomeCalendar
                                                className="dropdown-item w-100"
                                                data-bs-auto-close="outside"
                                                id={startDate}
                                                onSelectedRange={selectedDate}
                                                selectedRange={startDate}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex">
                                <button className="btn btn-light flex-grow-1 fs-7" type="button" onClick={submit}>Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div className="container text-white">
                        <div className="row pt-2 fs-7">
                            <div className="col text-center d-none d-lg-flex justify-content-center align-items-center align-content-center pt-2 fs-6">
                                <span className="d-flex justify-content-center align-items-center">
                                    <svg className="bi bi-check2-circle fs-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
                                    </svg>
                                    &nbsp;
                                    Melhor preço garantido
                                    &nbsp;
                                    &nbsp;
                                    <svg className="bi bi-speedometer fs-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
                                        <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"></path>
                                    </svg>
                                    &nbsp;
                                    Performance impressionante
                                    &nbsp;
                                    &nbsp;
                                    <svg className="bi bi-recycle fs-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"></path>
                                    </svg>
                                    &nbsp;
                                    Econômico e ecológico
                                    &nbsp;
                                    &nbsp;
                                    <svg className="bi bi-cash-coin fs-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
                                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
                                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
                                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
                                    </svg>
                                    &nbsp;
                                    Cashback no aluguel
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main className="flex-grow-1">
                <section>
                    <div className="container d-lg-none my-3">
                        <h3 className="fw-bold text-success d-grid mb-3">
                            <button
                                className="btn btn-primary"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#categoryList"
                                aria-expanded={isMenuOpen}
                                aria-controls="categoryList"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Filtrar por categoria
                            </button>
                        </h3>
                        <div id="categoryList" className="collapse" onClick={handleCloseMenu}>
                            <div className="row d-flex">
                                {category.map((image, index) => (
                                    <CategoryCard
                                        onSelectCategory={currentCategory => {
                                            filterCategory(currentCategory)
                                        }}
                                        key={index}
                                        imageData={image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container d-none d-sm-none d-md-none d-lg-grid mt-3">
                        <h3 className="fw-bold text-success mb-3">Procure as melhores opções por categoria</h3>
                        <div className="row d-flex mb-3">
                            {category.map((image, index) => (
                                <CategoryCard
                                    onSelectCategory={currentCategory => {
                                        filterCategory(currentCategory)
                                    }}
                                    key={index}
                                    imageData={image}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container my-3">
                        <h3 className="fw-bold text-success mb-3">Recomendados para você</h3>
                        <div className="row row-cols-1 row-cols-md-2 gy-3 gx-3">
                            {listProducts ? products.map((products, index) => (
                                <ProductCard key={index} id={index.length} data={products} />
                            )) : objectFilter.map((products, index) => (
                                <ProductCard key={index} id={index.length} data={products} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )



}