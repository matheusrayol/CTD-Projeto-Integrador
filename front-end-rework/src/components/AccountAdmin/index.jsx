import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from 'axios'
import data from "../../json/characteristics.json"
import policyData from "../../json/policies.json"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AccountAdmin() {

    const { register, handleSubmit, watch, formState: { errors }, clearErrors } = useForm();

    console.log(errors)

    // Retorna as categorias em cards
    const [showCategory, setShowCategory] = useState(false);
    const [categoryValueInputSelect, setCategoryValueInputSelect] = useState('')
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [categoryInputSelect, setCategoryInputSelect] = useState(true)
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

    // Função responsável pelo recebimento do valor selecionado no input de cidade
    const getCategoryValueInputSelect = event => {
        setCategoryValueInputSelect(event.target.value)
        if (categoryValueInputSelect.length >= 1) {
            setCategoryInputSelect(false)
        } else {
            setCategoryInputSelect(true)
        }
    }

    const [inputSelect, setInputSelect] = useState(true)
    const [valueInputSelect, setValueInputSelect] = useState('')
    const [location, setLocation] = useState([]);
    const [cityId, setCityId] = useState('');
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

    // Função responsável pelo recebimento do valor selecionado no input de cidade
    const getValueInputSelect = event => {
        setValueInputSelect(event.target.value)
        if (valueInputSelect.length >= 1) {
            setInputSelect(false)
        } else {
            setInputSelect(true)
        }
    }

    // Busca as características cadastradas no banco
    const [characteristics, setCharacteristics] = useState([])

    useEffect(() => {
        setCharacteristics(data)
    }, [])

    const [sustainabilityScore, setSustainabilityScore] = useState(false)
    function handleSustainabilityScore(event) {
        setSustainabilityScore(event.target.value)
    }

    const [imageCounter, setImageCounter] = useState(1)

    const handleNewImage = (event) => {
        event.preventDefault();
        setImageCounter(imageCounter + 1)
    }

    const { auth, id, name, surname, functionRole, email } = useAuth();

    const onSubmit = (data, e) => {

        console.log(data)
        let imagesCounter = 0;
        const imageArray = [];

        while (data['img' + imagesCounter + 'Name']) {
            const imageObject = {
                title: data['img' + imagesCounter + 'Name'],
                urlImage: data['img' + imagesCounter + 'Url']
            };
            imageArray.push(imageObject);
            imagesCounter++;
        }

        let newProduct = {
            name: data.productName,
            categoryId: data.categoryName,
            cityId: data.cityName,
            sustainability: data.sustainabilityNumber,
            description: data.productDescription,
            characteristics: [
                {
                    id: characteristics[0].id,
                    name: characteristics[0].name,
                    urlImage: characteristics[0].icon,
                },
                {
                    id: characteristics[1].id,
                    name: characteristics[1].name,
                    urlImage: characteristics[1].icon,
                },
                {
                    id: characteristics[2].id,
                    name: characteristics[2].name,
                    urlImage: characteristics[2].icon,
                },
                {
                    id: characteristics[3].id,
                    name: characteristics[3].name,
                    urlImage: characteristics[3].icon,
                },
                {
                    id: characteristics[4].id,
                    name: characteristics[4].name,
                    urlImage: characteristics[4].icon,
                },
                {
                    id: characteristics[5].id,
                    name: characteristics[5].name,
                    urlImage: characteristics[5].icon,
                },
                {
                    id: characteristics[6].id,
                    name: characteristics[6].name,
                    urlImage: characteristics[6].icon,
                },
                {
                    id: characteristics[7].id,
                    name: characteristics[7].name,
                    urlImage: characteristics[7].icon,
                }
            ],
            images: imageArray
        }

        console.log(newProduct)

        let requestConfiguration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${auth}`
            },
            body: JSON.stringify(newProduct)
        }

        fetch(`http://localhost:8080/product/create`, requestConfiguration).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    alert('Produto Criado com Sucesso!')
                    // navigate(`../accountadmin/createProduct/sucess`)
                })
            } else {
                if (response.status === 400) {
                    response.json().then(data => {
                        alert(data.mensagem)
                    })
                } else {
                    alert('Campo(os) incorreto(s)!')
                }
            }
        })
    }

    return (
        <>
            <main className="flex-grow-1">
                <section className="py-4">
                    <div className="container mb-4">
                        <div className="row mt-3 rounded bg-transparent">
                            <div className="col-lg-4 py-4 px-4 bg-white">
                                <h4 className="poppins travelgreen-logo mb-4 fw-semibold">Administrador</h4>
                                <div className="d-flex justify-content-center ubuntu mb-4">
                                    <img className="rounded-circle shadow" src="https://loremflickr.com/320/320/cat" width="120px" />
                                </div>
                                <p className="fs-5 mb-0 ubuntu">
                                    <strong>ID:</strong> {id}
                                </p>
                                <p className="fs-5 mb-0 ubuntu">
                                    <strong>Nome:</strong> {name} {surname}
                                </p>
                                <p className="fs-5 mb-0 ubuntu">
                                    <strong>E-mail:</strong> {email}
                                </p>
                                <p className="fs-5 mb-0 ubuntu">
                                    <strong>Função:</strong> {functionRole === "ROLE_USER" ? "Usuário" : "Administrador"}
                                </p>
                            </div>
                            <div className="col-lg-8 py-4 px-4 bg-white">
                                <h4 className="poppins travelgreen-logo mb-4 fw-semibold mx-2">Cadastrar produto</h4>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="d-flex flex-column align-items-start flex-md-row">
                                            <div className="input-group mx-2 mb-2">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Produto
                                                </h6>
                                                <div className="input-group">
                                                    <input
                                                        id="productName"
                                                        className={`form-control ${!errors.productName ? "border-success" : "border-danger form-error"} border-tg`}
                                                        type="text"
                                                        placeholder="Insira o nome do produto"
                                                        {...register('productName', {
                                                            required: "É necessário preencher este campo.",
                                                            minLength: {
                                                                value: 5,
                                                                message: 'Mínimo de 5 caracteres.'
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <p className="text-danger ms-1 mb-0">{errors.productName?.message}</p>
                                            </div>
                                            <div className="input-group mx-2 mb-2">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Cidade
                                                </h6>
                                                <div className="input-group">
                                                    <select
                                                        className={`form-select ${!errors.cityName ? "border-success" : "border-danger form-error"} border-tg rounded`}
                                                        onSelect={getValueInputSelect}
                                                        {...register('cityName', {
                                                            required: "É necessário selecionar uma cidade.",
                                                            min: {
                                                                value: 1,
                                                                message: 'Cidade inválida.'
                                                            }
                                                        })}
                                                    >
                                                        <option value="0">Selecione</option>
                                                        {location.map((city) => (
                                                            <option key={`city_` + city.id} id={`city_` + city.id} value={city.id}>{city.id} - {city.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <p className="text-danger ms-1 mb-0">{errors.cityName?.message}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-start flex-md-row">
                                            <div className="input-group mx-2 mb-2">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Categoria
                                                </h6>
                                                <div className="input-group">
                                                    <select
                                                        className={`form-select ${!errors.categoryName ? "border-success" : "border-danger form-error"} border-tg rounded`}
                                                        onSelect={getCategoryValueInputSelect}
                                                        {...register('categoryName', {
                                                            required: "É necessário selecionar uma categoria.",
                                                            min: {
                                                                value: 1,
                                                                message: 'Categoria inválida.'
                                                            }
                                                        })}
                                                    >
                                                        <option value="0">Selecione</option>
                                                        {category.map((category) => (
                                                            <option key={`category_` + category.id} id={`category_` + category.id} value={category.id}>{category.id} - {category.qualification}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <p className="text-danger ms-1 mb-0">{errors.categoryName?.message}</p>
                                            </div>
                                            <div className="input-group mx-2 mb-2">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Sustentabilidade
                                                </h6>
                                                <div className="input-group">
                                                    <input
                                                        className={`form-control ${!errors.sustainabilityNumber ? "border-success" : "border-danger form-error"} border-tg`}
                                                        type="number"
                                                        placeholder="0 ~ 100"
                                                        min="0"
                                                        max="100"
                                                        onChange={handleSustainabilityScore}
                                                        {...register('sustainabilityNumber', {
                                                            required: "É necessário preencher este campo.",
                                                            min: {
                                                                value: 1,
                                                                message: 'A pontuação deve ser maior que 0.'
                                                            },
                                                            max: {
                                                                value: 100,
                                                                message: 'A pontuação deve ser menor ou igual a 100.'
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <p className="text-danger ms-1 mb-0">{errors.sustainabilityNumber?.message}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-start flex-md-row">
                                            <div className="input-group mx-2 mb-2">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Descrição
                                                </h6>
                                                <div className="input-group">
                                                    <textarea
                                                        className={`form-control ${!errors.productDescription ? "border-success" : "border-danger form-error"} border-tg`}
                                                        style={{ height: `100px` }}
                                                        {...register('productDescription', {
                                                            required: "É necessário preencher este campo.",
                                                            minLength: {
                                                                value: 20,
                                                                message: 'A descrição deve possuir no mínimo 20 caracteres.'
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <p className="text-danger ms-1 mb-0 pb-0">{errors.productDescription?.message}</p>
                                            </div>

                                        </div>
                                        <div>
                                            <div className="input-group mx-2 mt-3">
                                                <h6 className="ms-1 my-0 mb-1 poppins">
                                                    Características
                                                </h6>
                                            </div>
                                            <div className="input-group">
                                                <div className="d-flex ms-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-1 gx-1">
                                                    {characteristics.map((characteristic) => (
                                                        <div className="col" key={characteristic.id}>
                                                            <div className="form-check">
                                                                <label className="form-check-label" htmlFor={`characteristic-${characteristic.id}`}>
                                                                    <input
                                                                        id={`characteristic-${characteristic.id}`}
                                                                        className={`form-check-input ${!errors.uncontrolled ? "border-success" : "border-danger form-error"}`}
                                                                        type="checkbox"
                                                                        value={characteristic.id}
                                                                        {...register("uncontrolled", {
                                                                            required: "É necessário selecionar no mínimo 1 característica para o cadastro do produto."
                                                                        })}
                                                                    />
                                                                    <img src={characteristic.icon} alt={characteristic.name} /> {characteristic.name}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-danger ms-1 mb-0">{errors.uncontrolled?.message}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input-group mx-2 mt-2">
                                                <h6 className="ms-1 my-0 poppins">
                                                    Imagens
                                                </h6>
                                            </div>
                                            <div className="d-flex flex-column align-items-start">
                                                {Array.from(Array(imageCounter)).map((image, index) => {
                                                    return (
                                                        <div key={`image` + index} className="input-group mx-2 my-2">
                                                            <div className="input-group">
                                                                <label className={`form-label text-light ${!errors[`img` + index + `Url`] ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                                    URL
                                                                </label>
                                                                <input
                                                                    id={`img` + index + `Url`}
                                                                    className={`form-control shadow-sm rounded-0 rounded-end ${!errors[`img` + index + `Url`] ? "border-success" : "border-danger form-error"} border-tg`}
                                                                    type="text"
                                                                    {...register(`img${index}Url`, {
                                                                        required: "É necessário preencher este campo.",
                                                                        minLength: {
                                                                            value: 10,
                                                                            message: "Mínimo de 10 caracteres."
                                                                        }
                                                                    })}
                                                                />
                                                                <Link onClick={handleNewImage}>
                                                                    <svg className="fs-1 text-light bg-success px-2 py-2 ms-2 me-3 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                        {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                                                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                                                                    </svg>
                                                                </Link>
                                                                <div className="input-group d-none">
                                                                    <input
                                                                        id={`img` + index + `Name`}
                                                                        type="text"
                                                                        defaultValue={`Imagem` + index}
                                                                        {...register(`img${index}Name`, {
                                                                            required: "É necessário preencher este campo.",
                                                                            minLength: {
                                                                                value: 5,
                                                                                message: "Mínimo de 5 caracteres."
                                                                            }
                                                                        })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p className="text-danger ms-1 mb-0 pb-0">{errors[`img` + index + `Url`]?.message}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h4 className="poppins travelgreen-logo fw-semibold mt-4 mx-2">Políticas do produto</h4>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 mb-2">
                                                    <h6 className="ms-1 my-0 mb-1 poppins">
                                                        Regras da Locação
                                                    </h6>
                                                    <div className="input-group">
                                                        <textarea
                                                            className={`form-control shadow-sm ${!errors.locationRules ? "border-success" : "border-danger"} border-tg`}
                                                            style={{ height: `110px` }}
                                                            defaultValue={[policyData[0].text.line]}
                                                            {...register('locationRules', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger ms-1 mb-0 pb-0">{errors.locationRules?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 mb-2">
                                                    <h6 className="ms-1 my-0 mb-1 poppins">
                                                        Saúde e Segurança
                                                    </h6>
                                                    <div className="input-group">
                                                        <textarea
                                                            className={`form-control shadow-sm ${!errors.healthAndSafety ? "border-success" : "border-danger"} border-tg`}
                                                            style={{ height: `110px` }}
                                                            defaultValue={[policyData[1].text.line]}
                                                            {...register('healthAndSafety', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger ms-1 mb-0 pb-0">{errors.healthAndSafety?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 mb-2">
                                                    <h6 className="ms-1 my-0 mb-1 poppins">
                                                        Política de Cancelamento
                                                    </h6>
                                                    <div className="input-group">
                                                        <textarea
                                                            className={`form-control shadow-sm ${!errors.cancellationPolicy ? "border-success" : "border-danger"} border-tg`}
                                                            style={{ height: `110px` }}
                                                            defaultValue={[policyData[2].text.line]}
                                                            {...register('cancellationPolicy', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger ms-1 mb-0 pb-0">{errors.cancellationPolicy?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center poppins">
                                                <div className="btn-group mt-3" role="group">
                                                    <button className="btn btn-success" type="submit">Cadastrar produto</button>
                                                    <button className="btn btn-danger" type="reset" onClick={() => clearErrors()}>Limpar campos</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}