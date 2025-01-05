import { useState, useCallback } from "react";
import { todoUtils } from "../utilities/todoUtils";
import { debounce } from "lodash";

export const useTodos = () => {
  const [todos, setTodos] = useState(todoUtils.loadTodos);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayComplete, setDisplayComplete] = useState(false);

  const syncToLocalStorage = useCallback(
    debounce((todos) => todoUtils.saveTodosToStorage(todos),300),
    []
  );

  const handleEdit = useCallback((index) => {
    const todo = todoUtils.editTodo(todos, index);
    setSelectedTodo(todo);
    setIsEditing(true);
  }, [todos]);

  const handleSave = useCallback((task) => {
    setTodos(prevTodos => {
      const updatedTodos = todoUtils.saveTodo(prevTodos, task);
      syncToLocalStorage(updatedTodos);
      return updatedTodos;
    });
    setIsEditing(false);
    setSelectedTodo(null);
  }, [syncToLocalStorage]);

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => {
      const updatedTodos = todoUtils.deleteTodo(prevTodos, id);
      syncToLocalStorage(updatedTodos);
      return updatedTodos;
    });
  }, [syncToLocalStorage]);

  const handleComplete = useCallback((id) => {
    setTodos(prevTodos => {
      const updatedTodos = todoUtils.markAsDone(prevTodos, id);
      syncToLocalStorage(updatedTodos);
      return updatedTodos;
    });
  }, [syncToLocalStorage]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setSelectedTodo(null);
  }, []);

  const viewComplete = useCallback(() => {
    setDisplayComplete(true);
  }, []);

  const viewPending = useCallback(() => {
    setDisplayComplete(false);
  }, []);

  return {
    todos,
    selectedTodo,
    isEditing,
    displayComplete,
    handleEdit,
    handleSave,
    handleDelete,
    handleComplete,
    handleCancel,
    viewComplete,
    viewPending
  };
};