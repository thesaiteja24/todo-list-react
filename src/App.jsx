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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta exercitationem aspernatur laudantium, fugit iure fugiat ipsum sunt doloribus iusto, illo distinctio.Architecto quasi provident culpa ducimus eum sunt, odit dicta quis ex inventore laudantium optio vero, perspiciatis pariatur, id dignissimos! Repellendus recusandae perferendis corporis pariatur? Tempore iusto recusandae id beatae facilis.Error sed in quibusdam maiores fugiat tempora nisi molestias voluptate unde voluptatibus perspiciatis reprehenderit natus perferendis, ad excepturi voluptatum veniam neque illo similique praesentium quis! Rerum dolor magni itaque eveniet.",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet...",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet...",
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
    <div className="flex flex-row">
      <Helmet>
        <title>Todo List</title>
      </Helmet>
      <div className="sidebar w-1/6 min-h-screen max-h-full p-2">
        <SideBar handleEdit={handleEdit} />
      </div>
      <div className="main w-5/6 min-h-screen max-h-full p-2">
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
