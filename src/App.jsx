import "./App.css";
import Layout from "./components/Layout";
import Sidebar from "./layouts/Sidebar";
import MainContent from "./layouts/MainContent";
import { Helmet } from "react-helmet";
import { useState } from "react";

function App() {
  const localSave = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(localSave);

  return (
    <>
      <Helmet>
        <title>Todo List</title>
      </Helmet>
      <Layout>
        <Sidebar />
        <MainContent todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
}

export default App;
