import React, { useState } from 'react'
import Todo from './components/Todo'
import './dist/css/main.css'

function App() {
  
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(['m', 'k', 'm', 'l'])
 

  return (
    <div className="App">
      <div className="container">
          <Todo 
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
          />
      </div>
    </div>
  );
}

export default App;
