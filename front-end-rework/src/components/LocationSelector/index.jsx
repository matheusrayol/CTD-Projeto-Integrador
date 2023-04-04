export function LocationSelector(props) {

    return (
        <div id={props.data.id} className="location-content dropdown-item d-flex align-items-center text-truncate" onClick={() => props.onSelectCity(`${props.data.name}`)} key={props.data.id}>
            <div className="col-2">
                <svg className="bi bi-pin-map-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                </svg>
            </div>
            <div className="d-grid col">
                <span id="city-name">
                    {props.data.name}
                </span>
                <span id="city-location">
                    {props.data.state}, {props.data.country}
                </span>
            </div>
        </div>
    );

}