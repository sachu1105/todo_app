import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm"; // Import TaskForm
import TaskList from "./components/TaskList"; // Import TaskList
import axiosInstance from "./axiosInstance"; // Assuming you have this axios instance setup

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null); // State to store the task to be updated

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get("/");
      setTodos(response.data); // Update tasks in the state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Call fetchTasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-6">Todo List</h1>
      <TaskForm
        selectedTodo={selectedTodo} // Pass the selected task to TaskForm for updating
        setSelectedTodo={setSelectedTodo} // Pass function to reset selectedTodo
        refresh={fetchTasks} // Pass the fetchTasks function for refreshing task list
      />
      <TaskList
        setTodos={setTodos}
        todos={todos}
        refresh={fetchTasks} // Pass the fetchTasks function to refresh the task list
        setSelectedTodo={setSelectedTodo} // Pass setSelectedTodo to TaskList
      />
    </div>
  );
};

export default App;
