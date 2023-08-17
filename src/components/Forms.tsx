import { useDispatch } from "react-redux"
import { addTodo } from "../redux/TodoSlice";
import styles from "../styles/forms.module.scss"

interface FormProps {
  text: string
  setText: (e: string) => void
}


export const Forms: React.FC<FormProps> = ({ text, setText }) => {
  const dispatch = useDispatch();
    return (
        <div className={styles.forms}>
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