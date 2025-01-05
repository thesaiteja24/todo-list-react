import { v4 as uuidv4 } from "uuid";

const tempData = [
  {
    _id: uuidv4(),
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
    markAsDone: false,
  },
  {
    _id: uuidv4(),
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
    markAsDone: false,
  },
  {
    _id: uuidv4(),
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi eos atque, quo ullam veritatis itaque corporis dicta ",
    date: "17-11-24",
    markAsDone: false,
  },
];

const temp = localStorage.getItem("todos");

if (temp === "[]") {
  localStorage.setItem("todos", JSON.stringify(tempData));
}

export const todoUtils = {
  editTodo: (todos, index) => {
    if (index === undefined) return null;
    return { ...todos[index], index };
  },

  saveTodo: (todos, task) => {
    if (task.index !== undefined) {
      const updatedTodos = [...todos];
      const todoToSave = { ...task };
      delete todoToSave.index;
      updatedTodos[task.index] = todoToSave;
      return updatedTodos;
    }
    return [...todos, { _id: uuidv4(), markAsDone: false, ...task }];
  },

  deleteTodo: (todos, id) => todos.filter((todo) => todo._id !== id),

  markAsDone: (todos, id) =>
    todos.map((todo) =>
      todo._id === id ? { ...todo, markAsDone: true } : todo
    ),

  loadTodos: () => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  },

  saveTodosToStorage: (todos) => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos:", error);
    }
  },
};
