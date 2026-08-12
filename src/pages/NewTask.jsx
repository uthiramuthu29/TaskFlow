import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { X, ChevronRight } from "lucide-react";
import Calendar from "react-calendar";

import TaskContext from "../context/TaskContext";
import NewTaskForm from "../components/NewTaskForm";
import TaskDatePicker from "../components/TaskDatePicker";
import { CategorySelector } from "../components/CategorySelector";
import SuccessPopup from "../components/SuccessPopup";
import NewCategoryPopup from "../components/NewCategoryPopup";

export default function NewTask() {
  const {
    setTasks,
    taskTitle,
    taskDesc,
    taskDate,
    showCalendar,
    setTaskDate,
    setShowCalendar,
    selectCategory,
    setSuccessPopup,
    successPopup,
    newCategoryPopup,
  } = useContext(TaskContext);

  function handleCreateTask() {
    if (!taskTitle.trim()) {
      alert("Task Title cannot be empty");
      return;
    }

    const task = {
      id: Date.now(),
      title: taskTitle,
      description: taskDesc,
      dueDate: taskDate,
      selectCategory,
      completed: false,
      createAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [...prevTasks, task]);

    setSuccessPopup(true);

    console.log("Task Created");
  }



  useEffect(() => {
    const shouldLockScroll = showCalendar || successPopup;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showCalendar, successPopup]);

  return (
    <>
      <div className="new-task px-5 pt-5.5 pb-50 bg-[#F8F9FF]">
        <div className="flex">
          <Link to="/">
            <X />
          </Link>
          <h1 className="text-[20px] font-semibold mx-auto leading-7 text-[#121C2A]">
            New Task
          </h1>
        </div>
        <NewTaskForm />
        <TaskDatePicker />
        <CategorySelector />
      </div>
      <div className="fixed w-full bottom-8 px-5">
        <button
          onClick={handleCreateTask}
          className="flex w-full py-4 gap-2 rounded-xl justify-center items-center bg-[#0058BE] text-white text-[20px] font-semibold leading-7 "
        >
          Create Task <ChevronRight />
        </button>
      </div>

      {/* Calendar */}
      {showCalendar && (
        <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8 ">
          <div className="bg-white rounded-xl  ">
            <Calendar
              onChange={(date) => {
                setTaskDate(date);
                setShowCalendar(false);
              }}
              value={taskDate}
              minDate={new Date()}
              showNeighboringMonth={false}
            />
          </div>
        </div>
      )}

      {/* New Category Popup */}
      {newCategoryPopup && (
        <NewCategoryPopup />
      )}

      {/* Success Popup */}
      {successPopup && (
        <SuccessPopup />
      )}
    </>
  );
}
