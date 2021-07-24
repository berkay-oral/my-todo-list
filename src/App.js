import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './components/TodoList';

function App() {
  return (
          <div className="todolistArea  ">
              <div className="container    my-5  text-center ">
                  <div className="todo-list-app  mx-auto " >
                  <h1 className="py-3">berkay's to-do list</h1>
                  <TodoList/>
                  </div>
              </div>
          </div>
  );
}

export default App;
