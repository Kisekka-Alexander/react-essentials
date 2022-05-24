import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import React from 'react'


function App() {
const[tasks, setTasks] = useState([])

useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  
  getTasks()
},[])

/// Fetch data

const fetchTasks = async ()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

const addTask = async (task)=>{
    
    const res = await fetch(
      'http://localhost:5000/tasks',{
        method:'POST',
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify(task),
      }
    )
    const data = await res.json()
    setTasks([...tasks, data])
    //  const id = Math.floor(Math.random()*10000)+1
    console.log(task)

    //  const newTask = {id, ...task}
    //  setTasks([...tasks, newTask])
}

const onDelete = async (id) =>{
await fetch(`http://localhost:5000/tasks/${id}`,
{
  method:'DELETE',
})
  setTasks(tasks.filter((task)=> task.id!==id))
}

const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}: task))
}
return (
  <div className='container'>
       <Header/>
       <AddTask onAdd={addTask}/>
       {tasks.length>0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder}/>: ('No tasks to show')}
       <Footer/>
  </div>
)
}

export default App;




// import gitdp from './gitdp.jpg';

// function Header(props){
//   return(
//     <header>
//       <h1> Welcome to Maama {props.name}'s Restaurant</h1>
//     </header>
//   )
// }

// function Main(props){
//   return(
//     <section>
//       <p> We serve the most {props.adjective} food around.</p>
//       <img src="https://github.com/Kisekka-Alexander.png" height={200}/>
//       <ul style={{textAlign: "left"}}>
//         {props.dishes.map((dish) => 
//         (<li key={dish.id}>{dish.title}</li>))}
//       </ul>
//     </section>
//   )
// }

// function Footer(props){
//   return(
//     <footer>
//       <p> Copyright {props.year} </p>
//     </footer>
//   )
// }

// const dishes = [
//   "Matooke + Fish",
//   "Rice + chicken",
//   "Gnuts + Matooke",
//   "Meat + Sweetpotatoes"

// ];

// const dishObjects = dishes.map((dish,i) => ({id:i, title: dish }));
// console.log(dishObjects);