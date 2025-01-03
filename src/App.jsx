// src/App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./layouts/Sidebar";
import MainContent from "./layouts/MainContent";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col md:flex-row">
        <Helmet>
          <title>Todo List</title>
        </Helmet>
        <Sidebar />
        <MainContent />
      </div>
    </TodoProvider>
  );
}

export default App;
