import React from "react";

const ViewTodo = ({ todos, setTodos }) => {
  const DeleteTodo = (id) => {
    const newData = todos.filter(todo => todo.id !== id)
    setTodos(newData)
  }

  const UpdateTodo = (id) => {
    const newData = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status:!todo.status
        }
      }
      return todo
    })
    setTodos(newData)
  }
  return (
    <>
      <div className="columns-3 bg-green-600 p-2">
        <p className="font-bold text-white">Todo name</p>
        <p className="font-bold text-white">Todo status</p>
        <p className="font-bold text-white">Todo action</p>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className="columns-3 bg-slate-100 p-2">
          <p className="font-bold text-gray-600">{todo.name}</p>
          <p className="font-bold text-gray-600">
            {todo.status ? "completed" : "not done"}
          </p>
          {/* <p className="font-bold text-gray-600">Todo action</p> */}
          <div className="flex gap-2 justify-end">
            <button onClick={()=> DeleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded-full">delete</button>
            <button onClick={()=> UpdateTodo(todo.id)} className="bg-green-500 text-white p-1 rounded-full">done</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewTodo;