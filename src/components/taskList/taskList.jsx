// Ce composant est utilisé pour afficher la liste des tâches.
import styles from "./TaskList.module.css"

export const TaskList = () => {
  return (
    <div className="box">
      <h2 className={styles.title}>
        🗒️ Il te reste encore x tâches à accomplir !
      </h2>
      <ul className={styles.container}>Composant TaskItem ici...</ul>
    </div>
  )
}
