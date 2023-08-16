import React from "react"
import styles from "../styles/todos.module.scss"


interface TodosProps {
  todos: Array<{
    favorite: boolean
    text: string
  }>
  makeFavorite: (index: number) => void
  deleteTodo: (ind: number) => void
}


export const Todos: React.FC<TodosProps> = ({ todos, makeFavorite, deleteTodo }) => {
    return (
        todos.map((todo, index) => {
            return(
              <div className={styles.todos}>
                 <div className={`${styles.todo} ${todo.favorite ? `${styles.selected}` : ""}`}>
                    <div className={styles.favorite}>
                      <button onClick={() => makeFavorite(index)}>
                         ★
                      </button>
                    </div>
                    <div className={styles.todo_text}>
                     {todo.text}
                    </div>
                    <div className={styles.actions}>
                      <button onClick={() => deleteTodo(index)}>&#10005;</button>
                    </div>
                 </div>
                </div>
            )
          })
    )
}