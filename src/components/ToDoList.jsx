import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {


  return (

    <ul className="mt-3 ">
      {todos.map((t) => (
        <li key={t.id} className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
          <button onClick={() => handleComplete(t.id)}>
            {t.completed ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
              </svg>

            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            )}

          </button>
          <span className="flex" key={t.id} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            {t.todo}
          </span>
          <div className="container text-end w-16 h-9 flex">
            <button onClick={() => handleEdit(t.id)} className="bg-transparent text-white  mr-1 ">
              <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in " src="/edit-icon.svg" alt="Edit Icon" />
            </button>
            <button onClick={() => handleDelete(t.id)} className="bg-transparent text-white  mr-1 ">
              <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in " src="/close-icon.svg" alt="Close Icon" />
            </button>
          </div>
        </li>
      ))}
    </ul>

  );
};

export default TodoList;