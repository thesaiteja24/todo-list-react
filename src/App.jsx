import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Toggles edit card
  const [todos, setTodos] = useState([
    {
      _id: uuidv4(),
      title: "Title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
      date: "17-11-24",
    },
  ]);

  function handleEdit(index) {
    if (index === undefined) {
      // Add new TODO
      setSelectedTodo(null);
    } else {
      // Edit existing TODO
      setSelectedTodo({ ...todos[index], index });
    }
    setIsEditing(true);
  }

  function handleSave(task) {
    if (task.index !== undefined) {
      // Updating existing TODO
      const updatedTodos = [...todos];
      updatedTodos[task.index] = { ...task };
      delete updatedTodos[task.index].index; // Remove temporary index key
      setTodos(updatedTodos);
    } else {
      // Adding new TODO
      setTodos([...todos, { ...task, _id: uuidv4() }]);
    }
    setIsEditing(false);
    setSelectedTodo(null);
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Helmet>
        <title>Todo List</title>
      </Helmet>
      <div className="sidebar md:w-1/6 md:min-h-screen md:max-h-full p-2">
        <SideBar handleEdit={handleEdit} />
      </div>
      <div className="main md:w-5/6 md:min-h-screen md:max-h-full p-2">
        <Main
          todos={todos}
          isEditing={isEditing}
          selectedTodo={selectedTodo}
          handleEdit={handleEdit}
          handleSave={handleSave}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
}

export default App;
