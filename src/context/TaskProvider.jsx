import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.jsx"

export default function TaskProvider({ children }){

    const [tasks, setTasks] = useState(()=>{
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const upcomingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <TaskContext.Provider value={{tasks, setTasks, upcomingTasks, completedTasks}}>
            {children}
        </TaskContext.Provider>
    )
}