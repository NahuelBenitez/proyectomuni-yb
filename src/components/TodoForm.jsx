import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">ToDo APP</h1>
      <form className="mt-4 relative"
        onSubmit={handleSubmit}>
        <input
          className="focus:shadow-lg focus:shadow-blue-600 pl-12 w-full py-4 bg-gray-500 rounded-xl outline-none transition-all duration-300 ease-in-out"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Ingrese su Tarea aqui..."
        /><button
          type="submit"
          className={`mt-3 rounded w-full h-12 transition-all duration-200 
      ${editId ? 'bg-green-500 hover:bg-green-700' : 'bg-teal-500 hover:bg-teal-700'}`}>
          {editId ? 'Editar Tarea' : 'Agregar Tarea'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;