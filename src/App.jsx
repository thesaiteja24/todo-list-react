// src/App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./layouts/Sidebar";
import MainContent from "./layouts/MainContent";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <TodoProvider>
      <ThemeProvider>
        <div className="flex flex-col md:flex-row">
          <Helmet>
            <title>Todo List</title>
          </Helmet>
          <Sidebar />
          <MainContent />
        </div>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
