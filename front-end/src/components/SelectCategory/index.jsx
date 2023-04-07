import './style.sass'

export function SelectCategory(props) {
  return (
    <ul>
      <li
        className="location-item"
        id="location-item"
        onClick={() =>
          props.onSelectDestination2(`${props.data.qualification}`)
        }
      >
        <div className="location-content" id="location-content">
          {/* <span id="name-city" className="name-city">
          {props.data.qualification}
          </span> */}
          <span id="name-country" className="name-country">
            {props.data.qualification}
          </span>
        </div>
      </li>
    </ul>
  )
}
