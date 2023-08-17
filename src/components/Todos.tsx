import { useDispatch } from "react-redux"
import { makeFavorite, deleteTodo } from "../redux/TodoSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from "../styles/todos.module.scss"



export const Todos: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector((state) => state.todo.todos)
    return (
        todos.map((todo, index) => {
            return(
              <div className="todos">
                 <div className={`${styles.todo} ${todo.favorite ? `${styles.selected}` : ""}`}>
                    <div className={styles.favorite}>
                      <button onClick={() => dispatch(makeFavorite({ index: index }))}>
                         ★
                      </button>
                    </div>
                    <div className={styles.todo_text}>
                     {todo.text}
                    </div>
                    <div className={styles.actions}>
                      <button onClick={() => dispatch(deleteTodo({ index: index }))}>&#10005;</button>
                    </div>
                 </div>
                </div>
            )
          })
    )
}