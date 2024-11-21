import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const TaskForm = ({
  selectedTodo,
  setSelectedTodo,
  refresh,
}) => {
  const [taskText, setTaskText] = useState("");

  // Prefill the form if there's a task selected for editing
  useEffect(() => {
    if (selectedTodo) {
      setTaskText(selectedTodo.text);
    } else {
      setTaskText(""); // Reset form if no task is selected
    }
  }, [selectedTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskText) return; // Ensure text is provided

    if (selectedTodo) {
      // If there's a selectedTodo, update it
      try {
        await axiosInstance.put(`/${selectedTodo._id}`, { text: taskText });

        // Refresh the list after the update
        refresh();
        setSelectedTodo(null); // Reset selectedTodo after update
      } catch (error) {
        console.error("Error updating task", error);
      }
    } else {
      // Otherwise, create a new task
      try {
        await axiosInstance.post("/", { text: taskText });

        // Refresh the list after adding a new task
        refresh();
      } catch (error) {
        console.error("Error creating task", error);
      }
    }

    setTaskText(""); // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 w-full p-3 bg-blue-500 text-white rounded-md"
      >
        {selectedTodo ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
