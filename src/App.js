import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day : 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day : 'Feb 5th at 2:30pm',
        reminder: false
    },
  ])  

  // Add a new task
  const addTask = (text, day, reminder) => {
    setTasks([...tasks, { id: tasks.length + 1, text, day, reminder }])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <AddTask 
        onAdd={addTask}
      />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  );
}

export default App;
