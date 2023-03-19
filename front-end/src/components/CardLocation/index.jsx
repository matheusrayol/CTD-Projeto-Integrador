import styles from './CardLocation.module.scss'

export function CardLocation(props) {
  return (
    <ul>
      <div className={styles.location__content}>
        <span className={styles.name__city}>{props.data.name}</span>
      </div>
    </ul>
  )
}
