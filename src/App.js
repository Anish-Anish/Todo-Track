import { useRef, useState } from 'react';
import './App.css';
function App() {
  const taskRef = useRef("")
  const [tasks, setTasks] = useState([])

  const addTask = () =>{
    if (taskRef.current.value !== ""){
      setTasks([...tasks, taskRef.current.value])
      console.log(tasks);
      taskRef.current.value = "";
    }else{
      alert("Enter a Task")
    }
  }

  const taskCompletion = (index) =>{
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);

  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='inputContainer'>
        <input
          type='text'
          ref={taskRef}
          name="taskInput"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='taskContainer'>
        {
          tasks.map((value, key) =>{
            return (
              <div className='taskItem'>
                <h3>{value}</h3>
                <button onClick={()=>{taskCompletion(key)}}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
