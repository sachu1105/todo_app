import axiosInstance from "../axiosInstance";

const Task = ({ todo, refresh, setSelectedTodo }) => {
  // Update the task text


  // Delete the task
  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);

      // After deleting, use the refresh function to get the updated task list
      refresh(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  // Toggle the completion status of the task
  const toggleComplete = async (id) => {
    try {
      const updatedTodo = { ...todo, completed: !todo.completed }; // Toggle the completion status
      await axiosInstance.put(`/${id}`, updatedTodo);

      // After completion toggle, use the refresh function to get the updated task list
      refresh(); // Refresh the list after completion toggle
    } catch (error) {
      console.error("Error toggling completion", error);
    }
  };

  // When update button is clicked, set the selected task
  const handleUpdateClick = () => {
    setSelectedTodo(todo); // Set the task to be updated in the parent
  };

  return (
    <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)} // Use _id for correct referencing
          className="mr-3"
        />
        <span
          className={
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }
        >
          {todo.text}
        </span>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleUpdateClick} // Set the task to be updated
          className="px-2 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
        >
          Update
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
