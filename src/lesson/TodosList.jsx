function TodosList() {
  const Todos = [
    { id: 1, name: "Coding", isDone: true },
    { id: 2, name: "Walking", isDone: false },
  ];
  return (
    <ul>
      {Todos.map((todo) => {
        return (
          <li key={todo.id}>
            Name : {todo.name}, {todo.isDone ? "Done" : null}
          </li>
        );
      })}
    </ul>
  );
}

export default TodosList;
