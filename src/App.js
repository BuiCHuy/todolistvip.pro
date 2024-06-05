import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import './App.css'
import {useState} from "react";
function App() {
    const [task, setTask] = useState([{id:1,name:"do homework"}])
  return (
    <div className="App">
      <AddTask/>
      <TaskList task={task}/>
    </div>
  );
}

export default App;
