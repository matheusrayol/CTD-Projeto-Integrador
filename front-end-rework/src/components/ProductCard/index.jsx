import { Link } from 'react-router-dom'

export function ProductCard(props) {

    return (

        <div className="col">
            <div className="d-flex justify-content-center align-items-center mx-auto outer_container">
                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-center flex-xl-row rounded inner_container bg-transparent">
                    <div className="shadow h-25 rounded img-container bg-transparent position-relative">
                        <div className="position-absolute top-0 start-0">
                            <button className="btn btn-success btn-overlay btn-sm disabled fs-5 poppins disabled mx-2 my-2" type="button">
                                <svg id="f" data-name="Artboard 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="#FFF" width="20px">
                                    <path d="m527.0167841571,1586.8182349247c-56.0243122669,56.5556086746-111.1352550356,113.1187815891-167.3036491523,168.5862466634-42.4034707661,41.8747102594-92.8295648326,54.0505537737-148.1942010861,31.2777634782-84.2373622707-34.649385095-105.6699933775-151.2980838603-39.3821290914-219.4666458958,226.004081579-242.3651264371,481.5667176816-463.6606920625,694.7544723445-714.7494669449-237.9807053086,29.9282872144-453.7998122206,167.793925071-649.73546005,305.0910754703C-110.7753975965,257.9810350787,1093.2240489315,120.6335324346,1704.8475332913,122.0231509524c61.6798708512-.8225425121,81.7550320749,20.1449773308,81.2348783591,83.4536074029,17.5367139502,782.9750306892-242.995697396,2030.2176948808-1259.0656274933,1381.3414765695Z" />
                                </svg>
                                &nbsp;
                                {/* {props.data.sustainability} */}
                                70
                            </button>
                        </div>
                        <div className="position-absolute bottom-0 end-0">
                            <button className="btn btn-light btn-overlay btn-sm disabled fs-5 poppins disabled mx-2 my-2" type="button">
                                {props.data.category.qualification}
                            </button>
                        </div>
                        <img className="rounded shadow-lg content_img" src={props.data.images[0].urlImage} alt={props.data.name} />
                    </div>
                    <div className="container shadow rounded card_content">
                        <div className="content_container">
                            <p className="poppins fs-4 mt-5 mt-xl-0">{props.data.name}</p>
                            <p className="tt-3l">{props.data.description}</p>
                            <p className="fs-6">
                                <svg className="bi bi-pin-map-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                                </svg>
                                &nbsp;{props.data.city.name}, {props.data.city.state} - {props.data.city.country}
                            </p>
                            <Link className="btn btn-light fs-6 poppins mb-4 mb-xl-0"
                                to={`product/${props.data.id}`}
                                id={props.data.id}
                                role="button"
                            >
                                Mais informações
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}