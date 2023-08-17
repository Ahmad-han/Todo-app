import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  todos: Array<{
    favorite: boolean
    text: string
  }>
}



const initialState: initialStateType = {
  todos: [
    {favorite: false, text: "Купить продукты"},
    {favorite: false, text: "Купить бананы"},
    {favorite: false, text: "Купить машину"},
    {favorite: false, text: "Купить дом"},
    {favorite: false, text: "Купить участок"}
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo, index) => {
          if (index === action.payload.index) {
            return false
          }
          return true
        })
      },

    makeFavorite: (state, action) => {
        state.todos = state.todos.map((item, index) => {
          if (index === action.payload.index) {
            return {
              ...item,
              favorite: !item.favorite
            }
          }
          return item
        })
      },

    addTodo: (state, action) => {
          state.todos = [ 
            {
            text: action.payload.text,
            favorite: false
          },
          ...state.todos
        ]
        action.payload.setText("")
        }
  },
})

export const { deleteTodo, makeFavorite, addTodo } = counterSlice.actions

export default counterSlice.reducer