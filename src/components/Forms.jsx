import { useDispatch } from "react-redux"
import { addTodo } from "../redux/TodoSlice";




export const Forms = ({ text, setText }) => {
  const dispatch = useDispatch();
    return (
        <div className="forms">
        <input
         type="text" 
         placeholder="Введите ваш текст..."
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
        <button onClick={() => dispatch(addTodo({ text: text, setText: setText }))}>Добавить</button>
      </div>
    )
}