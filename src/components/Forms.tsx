import React from "react"
import styles from "../styles/forms.module.scss"



interface FormProps {
  text: string
  addTodo: () => void
  setText: (e: string) => void
}


export const Forms: React.FC<FormProps> = ({ text, addTodo, setText }) => {
    return (
        <div className={styles.forms}>
        <input
         type="text" 
         placeholder="Введите ваш текст..."
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
        <button onClick={addTodo}>Добавить</button>
      </div>
    )
}