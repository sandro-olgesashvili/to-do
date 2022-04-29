const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHanlder = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            complated: !item.complated,
          };
        }
        return item
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.complated ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeHanlder} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
