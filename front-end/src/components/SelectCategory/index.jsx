import './style.sass'

export function SelectCategory(props) {
  return (
    <ul>
      <li
        className="location-item"
        id="location-item"
        onClick={() => props.onSelectDestination2(`${props.data.id}`)}
      >
        <div className="location-content" id="location-content">
          <span id="name-country" className="name-country">
            Id: {props.data.id}, {props.data.qualification}
          </span>
        </div>
      </li>
    </ul>
  )
}
