import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import uuiddv4 from 'uuid/v4'

//https://www.youtube.com/watch?v=hQAHSlTtcmY at 19 minutes.

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddtodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuiddv4(), name: name, complete: false}
    ]})
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddtodo}>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 Left To Do</div>
    </>
  )
}

export default App;
