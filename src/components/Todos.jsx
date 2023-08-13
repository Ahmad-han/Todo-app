import { useDispatch, useSelector } from "react-redux"
import { makeFavorite, deleteTodo } from "../redux/TodoSlice";



export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos)
    return (
        todos.map((todo, index) => {
            return(
              <div className="todos">
                 <div className={`todo ${todo.favorite ? "selected" : ""}`}>
                    <div className="favorite">
                      <button onClick={() => dispatch(makeFavorite({ index: index }))}>
                         ★
                      </button>
                    </div>
                    <div className="todo_text">
                     {todo.text}
                    </div>
                    <div className="actions">
                      <button onClick={() => dispatch(deleteTodo({ index: index }))}>&#10005;</button>
                    </div>
                 </div>
                </div>
            )
          })
    )
}