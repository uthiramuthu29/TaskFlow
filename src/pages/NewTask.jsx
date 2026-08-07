import { useState, useContext } from "react";
import { Link } from "react-router";
import {
  X,
  CalendarDays,
  Tag,
  BriefcaseBusiness,
  ChevronRight,
  UserRound,
  ShoppingCart,
  Plus,
  BadgeCheck
} from "lucide-react";
import Calendar from "react-calendar";

import TaskContext from "../context/TaskContext";

export default function NewTask() {
  const { setTasks } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  const [category, setCategory] = useState("work");
  const [successPopup, setSuccessPopup] = useState(false);


  function handleCreateTask(){

    if(!taskTitle.trim()){
      alert("Task Title cannot be empty");
      return
    }

    const task = {
      id: Date.now(),
      title: taskTitle,
      description: taskDesc,
      dueDate: taskDate,
      category,
      completed: false,
      createAt: new Date().toISOString(),
    };

    setTasks((prevTasks)=>[...prevTasks, task]);

    setSuccessPopup(true);

    console.log("Task Created");
  }

  return (
    <>
      <div className="new-task px-5 pt-5.5 pb-[200px] bg-[#F8F9FF]">
        <div className="flex">
          <Link to="/">
            <X />
          </Link>
          <h1 className="text-[20px] font-semibold mx-auto leading-7 text-[#121C2A]">
            New Task
          </h1>
        </div>
        <div className="mt-4 mb-10">
          <input
            type="text"
            className="text-[24px] font-bold text-[#121C2A] placeholder-[#C2C6D6] mb-7.5 focus-visible:outline-0 "
            placeholder="What needs to be done?"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            rows={4}
            className="w-full bg-white border border-[#C2C6D6] rounded-xl p-4 focus-visible:outline-0 "
            placeholder="Add a description..."
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
        </div>
        <div
          className="bg-white p-4 flex items-center rounded-xl mb-3 "
          onClick={() => setShowCalendar(true)}
        >
          <div className="bg-[#E6EEFF] p-2 rounded-xl mr-4 ">
            <CalendarDays size={20} />
          </div>
          <div className="">
            <h5 className="text-[16px] leading-6 text-[#121C2A]">Due Date</h5>
            <p className="text-[14px] leading-5 text-[#424754]">
              {taskDate ? taskDate.toDateString() : 'Select a date'}
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <p className="text-[12px] font-semibold rounded-xl bg-[#D8E2FF] px-3 py-1 leading-4 text-[#0058BE]">
              Today{" "}
            </p>
            <ChevronRight className="text-[#C2C6D6]" size={20} />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <div className="flex items-center mb-4">
            <div className="bg-[#E6EEFF] p-2 rounded-xl mr-4 ">
              <Tag size={20} />
            </div>
            <h5 className="text-[16px] leading-6 text-[#121C2A]">Category</h5>
          </div>
          <ul className="flex gap-3 flex-wrap">
            <li
              className={`${category === "work" ? "bg-[#0058BE] text-white " : "bg-[#F8F9FF] text-[#424754] "} inline-flex items-center  border border-[#C2C6D6] px-5 py-3 text-[12px] font-semibold rounded-lg leading-4 `}
              onClick={() => setCategory("work")}
            >
              <BriefcaseBusiness className="mr-1.5" size={20} /> Work
            </li>
            <li
              className={`${category === "personal" ? "bg-[#0058BE] text-white " : "bg-[#F8F9FF] text-[#424754] "} inline-flex items-center  border border-[#C2C6D6] px-5 py-3 text-[12px] font-semibold rounded-lg leading-4 `}
              onClick={() => setCategory("personal")}
            >
              <UserRound className="mr-1.5" size={20} /> Personal
            </li>
            <li
              className={`${category === "shopping" ? "bg-[#0058BE] text-white " : "bg-[#F8F9FF] text-[#424754] "} inline-flex items-center  border border-[#C2C6D6] px-5 py-3 text-[12px] font-semibold rounded-lg leading-4 `}
              onClick={() => setCategory("shopping")}
            >
              <ShoppingCart className="mr-1.5" size={20} /> Shopping
            </li>
            <li className="text-[12px] leading-4 text-[#727785] border-dashed border rounded-lg border-[#C2C6D6] px-5 py-3 inline-flex items-center font-semibold ">
              <Plus className="mr-1.5" size={20} />
              New
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed w-full bottom-8 px-5">
        <button onClick={handleCreateTask} className="flex w-full py-4 gap-2 rounded-xl justify-center items-center bg-[#0058BE] text-white text-[20px] font-semibold leading-7 ">
          Create Task <ChevronRight />
        </button>
      </div>

      {/* Calendar */}
      {showCalendar && <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8 ">
        <div className="bg-white   ">
          <Calendar onChange={(date)=>{
            setTaskDate(date);
            setShowCalendar(false);
          }} value={taskDate} />
        </div>
      </div>}

      {/* Success Popup */}

      {successPopup && <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8  ">
        <div className="bg-white px-8 p-5 rounded-xl relative ">
          <Link to="/"><X className="absolute top-2 right-2" size={15} /></Link>
          <h2 className="text-[20px] font-semibold mx-auto mb-5 leading-7 text-[#121C2A]">Task Created</h2>
          <BadgeCheck className="mx-auto text-emerald-600" size={50} />
        </div>
      </div>}

    </>
  );
}
