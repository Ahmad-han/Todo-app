



export const Forms = ({ text, addTodo, setText }) => {
    return (
        <div className="forms">
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