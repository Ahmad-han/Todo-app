import React, { useState } from "react"
import { Header } from "./Header"
import { Forms } from "./Forms"
import { Todos } from "./Todos"


interface stateType {
  favorite: boolean
  text: string
}



export const App: React.FC = () => {
const [todos, setTodos] = useState<Array<stateType>>( [
    {favorite: false, text: "Купить продукты"},
    {favorite: false, text: "Купить бананы"},
    {favorite: false, text: "Купить машину"},
    {favorite: false, text: "Купить дом"},
    {favorite: false, text: "Купить участок"}
  ] )

const [text, setText] = useState("")

const deleteTodo = (indexOfDeletedItem: number): void => {
  const filterTodos = todos.filter((todo, index) => {
    if (index === indexOfDeletedItem) {
      return false
    }
    return true
  })

  setTodos(filterTodos)
}


const makeFavorite = (indexOfMakeFavorite: number) => {
  const newTodos = todos.map((item, index) => {
    if (index === indexOfMakeFavorite) {
      return {
        ...item,
        favorite: !item.favorite
      }
    }

    return item
  })
  setTodos(newTodos)
}

const addTodo = () => {

  const newTodo = todos.find((todo) => todo.text)
  if (newTodo !== undefined) {
    if (newTodo.text === text || text === "") {
      console.log("Это дело уже заявлено или оно пустое")
    } else {
      setTodos([ {
        text: text,
        favorite: false
      },
      ...todos
    ])
    setText("")
    }
  }
  }


  return (
    <div className="App">
      <Header />
      <Forms 
        text={text} 
        addTodo={addTodo} 
        setText={setText}
      />
      <Todos 
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}


