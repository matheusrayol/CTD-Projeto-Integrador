import styles from './CardLocation.module.scss'

export function CardLocation(props) {
  return (
    <ul>
      <li
        className={styles.location__item}
        onClick={() => props.onSelectDestination(props.data)}
      >
        <div className={styles.location__content}>
          <span className={styles.name__city}>{props.data.name}</span>
        </div>
      </li>
    </ul>
  )
}
