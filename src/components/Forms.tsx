
interface FormProps {
  text: string
  setText: (value: string) => void
  addTodo: () => void
}


export const Forms: React.FC<FormProps> = ({ text, addTodo, setText }) => {
    return (
        <div className="forms">
        <input
         type="text" 
         placeholder="Введите ваш текст..."
         value={text}
         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
         />
        <button onClick={addTodo}>Добавить</button>
      </div>
    )
}