import { v4 as uuidv4 } from "uuid";

const tempData = [
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
];

localStorage.setItem("todos", JSON.stringify(tempData));

// Function to edit a TODO
export function editTodo(todos, index) {
  if (index === undefined) {
    return null; // Add new TODO
  }
  return { ...todos[index], index }; // Edit existing TODO
}

// Function to save a TODO
export function saveTodo(todos, task) {
  if (task.index !== undefined) {
    // Updating existing TODO
    const updatedTodos = [...todos];
    updatedTodos[task.index] = { ...task };
    delete updatedTodos[task.index].index; // Remove temporary index key
    return updatedTodos;
  }
  // Adding new TODO
  return [...todos, { _id: uuidv4(), ...task }];
}

// Function to delete a TODO
export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo._id !== id);
}
