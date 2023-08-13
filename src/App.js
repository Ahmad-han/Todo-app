import { useState } from "react"
import { Header } from "./components/Header"
import { Forms } from "./components/Forms"
import { Todos } from "./components/Todos"




export const App = () => {
const [text, setText] = useState("")

  return (
    <div className="App">
      <Header />
      <Forms 
        text={text} 
        setText={setText}
      />
      <Todos />
    </div>
  );
}


