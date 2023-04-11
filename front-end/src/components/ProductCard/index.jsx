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
                                {props.data.sustainability}
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
                        <div className="content_container mt-5 mt-xl-3 mb-3 mb-md-3">
                            <p className="d-flex align-items-center mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                                </svg>
                                &nbsp; {Math.round(props.data.sustainability / 10 / 2)}/5
                            </p>
                            <p className="poppins fs-4 tt-1l">{props.data.name}</p>
                            <p className="tt-3l">{props.data.description}</p>
                            <p className="fs-6">
                                <svg className="bi bi-pin-map-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                                </svg>
                                &nbsp;{props.data.city.name}, {props.data.city.state} - {props.data.city.country}
                            </p>
                            <Link className="btn btn-light fs-6 poppins"
                                to={`product/${props.data.id}`}
                                id={props.data.id}
                                state={{ state : props.data.id }}
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