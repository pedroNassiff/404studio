import styles from "./styles.module.scss";


const index = (props) => {
  console.log(props.props)
  const {id,description} = props.props
  console.log(description.length)
  return (
    <div className={`${styles["container"]} custom_container custom_container--xxxl `}>
      <h2 className={description.length < 13  ?`${styles["title"]}`:`${styles["title--2"]}`} dangerouslySetInnerHTML={{__html: description}} ></h2>
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
