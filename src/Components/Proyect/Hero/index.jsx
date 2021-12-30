import styles from "./styles.module.scss";


const index = (props) => {
  const {id} = props.props
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Titulo del Proyecto</h2>
      {
        id < 10 ? 
        <span className={styles.id}>{`0${id}`}</span>
        :
        <span className={styles.id}>{id}</span>
      }
    </div>
  )
}

export default index
