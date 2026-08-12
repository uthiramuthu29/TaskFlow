import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.jsx"

export default function TaskProvider({ children }){

    const [tasks, setTasks] = useState(()=>{
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const upcomingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    const [categories, setCategories] = useState(()=>{
        const storedCategories = localStorage.getItem("categories");
        return storedCategories ? JSON.parse(storedCategories) : ["work", "personal", "shopping"];
    });

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    useEffect(()=>{
        localStorage.setItem("categories", JSON.stringify(categories))
    }, [categories])

    return (
        <TaskContext.Provider value={{tasks, setTasks, categories, setCategories, upcomingTasks, completedTasks}}>
            {children}
        </TaskContext.Provider>
    )
}