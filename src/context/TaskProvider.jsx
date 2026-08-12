import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.jsx";

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const upcomingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const [showCalendar, setShowCalendar] = useState(false);
  const [taskDate, setTaskDate] = useState(null);

  

  const [selectCategory, setSelectCategory] = useState("work");
  const [successPopup, setSuccessPopup] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newCategoryPopup, setNewCategoryPopup] = useState(false);

  const getDateLabel = (date) => {
    if (!date) return "Select a date";

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const difference = (selectedDate - today) / (1000 * 60 * 60 * 24);

    if (difference === 0) {
      return "Today";
    }

    if (difference === -1) {
      return "Yesterday";
    }

    if (difference === 1) {
      return "Tomorrow";
    }

    if (difference > 1) {
      return `${difference} days from now`;
    }

    return `${Math.abs(difference)} days ago`;
  };

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories
      ? JSON.parse(storedCategories)
      : ["work", "personal", "shopping"];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        categories,
        setCategories,
        upcomingTasks,
        completedTasks,
        taskTitle,
        setTaskTitle,
        taskDesc,
        setTaskDesc,
        showCalendar,
        setShowCalendar,
        taskDate,
        setTaskDate,
        getDateLabel,
        selectCategory,
        setSelectCategory,
        successPopup,
        setSuccessPopup,
        newCategory,
        setNewCategory,
        newCategoryPopup,
        setNewCategoryPopup
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
