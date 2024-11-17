/* eslint-disable */
import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import Todo from './components/Todo'
function App() {
  const [todos, setTodos] = useState([]);
  {/*fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos)
  })*/}
  // It will call infinite times, coz each time fetch is called setTodos() update state, state update -> component rerender, It is a bug, which will bw solved by useEffect
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos)
      })
  }, [])

  return (
    // A component returns only one single top level xml, why??
    // 1. Make easy to do reconciliation
    // <></>, <React.Fragment></React.Fragment>
    <>
      <CreateTodo />
      <Todo alltodos={todos} setTodos={setTodos} />
    </>
  )
}
// lifecycle events in react initially class based components. 

// class App{
//   componentDidMount{
//        first render pe fetch call kar lete the
//   }
// }
//  but then functional components me ye kaise add kre
// Ideally use setInterval in useffect of say 10s to get latest data 
export default App
