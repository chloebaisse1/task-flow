// Ce composant est utilisé pour afficher une tâche.

import styles from "./TaskItem.module.css"
export const TaskItem = ({ task, editTask, deleteTask }) => {
  return (
    <li
      className={`${styles.container} ${styles.default}`}
      onClick={() => editTask(task.id, !task.completed)}
    >
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>{task.id}</div>
        <div className={styles.contentDefault}>{task.title}</div>
      </div>
      <button className="button-primary">x</button>
    </li>
  )
}
