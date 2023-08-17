import { useState } from "react"
import { Header } from "./Header"
import { Forms } from "./Forms"
import { Todos } from "./Todos"




export const App: React.FC = () => {
const [text, setText] = useState<string>("")

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


