import React, { useState } from "react";
import './index.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/ToDoList";
import Header from "./components/Title";
import Footer from "./components/Footer";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo, comleted: false })
          : { id: t.id, todo: t.todo, comleted: false }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };


  return (
    <div className="bg-gray-900 h-full text-gray-100 flex items-center justify-center px-4 min-h-screen">
      <Header />
      <div className="container flex flex-col max-w-2xl w-full ">
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;