import './style.sass'

export function SelectLocation(props) {
  return (
    <ul>
      <li
        className="location-item"
        id="location-item"
        onClick={() => props.onSelectDestination(`${props.data.id}`)}
      >
        <div className="location-content" id="location-content">
          <span id="name-city" className="name-city">
            {props.data.name}
          </span>
          <span id="name-country" className="name-country">
            {props.data.state}, {props.data.country}
          </span>
        </div>
      </li>
    </ul>
  )
}
