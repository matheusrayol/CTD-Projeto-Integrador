import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from 'axios'
import data from "../../json/characteristics.json"
import policyData from "../../json/policies.json"
import { useForm } from "react-hook-form";


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

    const { id, name, surname, email, functionRole } = useAuth();

    const createProduct = event => {
        event.preventDefault();

        let signinData = {
            
        }

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
                            <div className="col-lg-8 py-4 px-4" style={{ backgroundColor: `white` }}>
                                <h4 className="poppins travelgreen-logo mb-4 fw-semibold mx-2">Cadastrar produto</h4>
                                <div>
                                    <h6 className="fw-normal text-success mx-2 poppins mb-0">Informações básicas</h6>
                                    <form onSubmit={handleSubmit((data) => {
                                        console.log(data)
                                    })}>
                                        <div className="d-flex flex-column align-items-start flex-md-row">
                                            <div className="input-group mx-2 my-2">
                                                <div className="input-group">
                                                    <label className={`form-label text-light ${!errors.productName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                        Produto
                                                    </label>
                                                    <input
                                                        id="productName"
                                                        className={`shadow-sm form-control ${!errors.productName ? "border-success" : "border-danger"}`}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.productName?.message}</p>
                                            </div>
                                            <div className="input-group mx-2 my-2">
                                                <div className="input-group">
                                                    <label className={`form-label text-light ${!errors.cityName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                        Cidade
                                                    </label>
                                                    <select
                                                        className={`form-select ${!errors.cityName ? "border-success" : "border-danger"} rounded-0 rounded-end`}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.cityName?.message}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-start flex-md-row">
                                            <div className="input-group mx-2 my-2">
                                                <div className="input-group">
                                                    <label className={`form-label text-light ${!errors.categoryName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                        Categoria
                                                    </label>
                                                    <select
                                                        className={`form-control ${!errors.categoryName ? "border-success" : "border-danger"} rounded-0 rounded-end`}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.categoryName?.message}</p>
                                            </div>
                                            <div className="input-group mx-2 my-2">
                                                <div className="input-group">
                                                    <label className={`form-label text-light ${!errors.sustainabilityNumber ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                        Sustentabilidade
                                                    </label>
                                                    <input
                                                        className={`form-control ${!errors.sustainabilityNumber ? "border-success" : "border-danger"}`}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.sustainabilityNumber?.message}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-start flex-auto">
                                            <div className="input-group">
                                                <h6 className="fw-normal text-success poppins mx-2">
                                                    Descrição
                                                </h6>
                                                <div className="input-group">
                                                    <textarea
                                                        className={`form-control ${!errors.productDescription ? "border-success" : "border-danger"} mx-2`}
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
                                            </div>
                                            <p className="text-danger mx-3 mb-0 pb-0">{errors.productDescription?.message}</p>
                                        </div>
                                        <div>
                                            <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">
                                                Características
                                            </h6>
                                            <div className="d-flex mx-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-0 gx-0">
                                                {characteristics.map((characteristic) => (
                                                    <div className="col" key={characteristic.id}>
                                                        <div className="form-check">
                                                            <label className="form-check-label" htmlFor={`characteristic-${characteristic.id}`}>
                                                                <input
                                                                    name="characteristics"
                                                                    id={`characteristic-${characteristic.id}`}
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value={characteristic.id}
                                                                    defaultChecked
                                                                    {...register("uncontrolled", {
                                                                        required: "São necessárias 8 características para o cadastro do produto."
                                                                    })}
                                                                />
                                                                {characteristic.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">
                                                Imagens
                                            </h6>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageOneName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            Imagem 1
                                                        </label>
                                                        <input
                                                            id="imageOneName"
                                                            className={`form-control shadow-sm ${!errors.imageOneName ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageOneName', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 5,
                                                                    message: "Mínimo de 5 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageOneName?.message}</p>
                                                </div>
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageOneUrl ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            URL
                                                        </label>
                                                        <input
                                                            id="imageOneUrl"
                                                            className={`form-control shadow-sm ${!errors.imageOneUrl ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageOneUrl', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageOneUrl?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageTwoName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            Imagem 2
                                                        </label>
                                                        <input
                                                            id="imageTwoName"
                                                            className={`form-control shadow-sm ${!errors.imageTwoName ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageTwoName', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 5,
                                                                    message: "Mínimo de 5 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageTwoName?.message}</p>
                                                </div>
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageTwoUrl ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            URL
                                                        </label>
                                                        <input
                                                            id="imageTwoUrl"
                                                            className={`form-control shadow-sm ${!errors.imageTwoUrl ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageTwoUrl', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageTwoUrl?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageThreeName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            Imagem 3
                                                        </label>
                                                        <input
                                                            id="imageThreeName"
                                                            className={`form-control shadow-sm ${!errors.imageThreeName ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageThreeName', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 5,
                                                                    message: "Mínimo de 5 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageThreeName?.message}</p>
                                                </div>
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageThreeUrl ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            URL
                                                        </label>
                                                        <input
                                                            id="imageThreeUrl"
                                                            className={`form-control shadow-sm ${!errors.imageThreeUrl ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageThreeUrl', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageThreeUrl?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageFourName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            Imagem 4
                                                        </label>
                                                        <input
                                                            id="imageFourName"
                                                            className={`form-control shadow-sm ${!errors.imageFourName ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageFourName', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 5,
                                                                    message: "Mínimo de 5 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageFourName?.message}</p>
                                                </div>
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageFourUrl ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            URL
                                                        </label>
                                                        <input
                                                            id="imageFourUrl"
                                                            className={`form-control shadow-sm ${!errors.imageFourUrl ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageFourUrl', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageFourUrl?.message}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-start flex-md-row">
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageFiveName ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            Imagem 5
                                                        </label>
                                                        <input
                                                            id="imageFiveName"
                                                            className={`form-control shadow-sm ${!errors.imageFiveName ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageFiveName', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 5,
                                                                    message: "Mínimo de 5 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageFiveName?.message}</p>
                                                </div>
                                                <div className="input-group mx-2 my-2">
                                                    <div className="input-group">
                                                        <label className={`form-label text-light ${!errors.imageFiveUrl ? "bg-success border-success" : "bg-danger border-danger"} input-group-text mb-0`}>
                                                            URL
                                                        </label>
                                                        <input
                                                            id="imageFiveUrl"
                                                            className={`form-control shadow-sm ${!errors.imageFiveUrl ? "border-success" : "border-danger"}`}
                                                            type="text"
                                                            {...register('imageFiveUrl', {
                                                                required: "É necessário preencher este campo.",
                                                                minLength: {
                                                                    value: 10,
                                                                    message: "Mínimo de 10 caracteres."
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                    <p className="text-danger mx-2 mb-0 pb-0">{errors.imageFiveUrl?.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h4 className="poppins travelgreen-logo fw-semibold mt-4 mx-2">Políticas do produto</h4>
                                            <div className="d-flex flex-column">
                                                <h6 className="fw-normal mx-2 mt-3 poppins mb-0 mt-2">Regras da Locação</h6>
                                                <div className="input-group">
                                                    <textarea
                                                        className={`form-control shadow-sm mx-2 ${!errors.locationRules ? "border-success" : "border-danger"}`}
                                                        style={{ height: `75px` }}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.locationRules?.message}</p>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h6 className="fw-normal mx-2 mt-3 poppins mb-0 mt-2">
                                                    Saúde e Segurança
                                                </h6>
                                                <div className="input-group">
                                                    <textarea
                                                        className={`form-control shadow-sm mx-2 ${!errors.healthAndSafety ? "border-success" : "border-danger"}`}
                                                        style={{ height: `75px` }}
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
                                                <p className="text-danger mx-2 mb-0 pb-0">{errors.healthAndSafety?.message}</p>
                                            </div>
                                            <h6 className="fw-normal mx-2 mt-3 poppins mb-0 mt-2">
                                                Política de Cancelamento
                                            </h6>
                                            <div className="input-group">
                                                <textarea
                                                    className={`form-control shadow-sm mx-2 ${!errors.cancellationPolicy ? "border-success" : "border-danger"}`}
                                                    style={{ height: `75px` }}
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
                                            <p className="text-danger mx-2 mb-0 pb-0">{errors.cancellationPolicy?.message}</p>
                                        </div>
                                        <div className="d-flex justify-content-center poppins">
                                            <div className="btn-group mt-3" role="group">
                                                <button className="btn btn-success" type="submit">Cadastrar produto</button>
                                                <button className="btn btn-danger" type="reset" onClick={() => clearErrors()}>Limpar campos</button>
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