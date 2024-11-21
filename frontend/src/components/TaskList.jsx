import Task from "./Task";

const TaskList = ({ todos, setTodos, refresh, setSelectedTodo }) => {
 
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Tasks</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <ul className="space-y-4">
              {todos.map((todo) => (
                <Task
                  key={todo._id}
                  todo={todo}
                  refresh={refresh} // Pass the refresh function
                  setSelectedTodo={setSelectedTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
