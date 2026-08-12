import { useState, useContext, useEffect } from "react";
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
  BadgeCheck,
} from "lucide-react";
import Calendar from "react-calendar";

import TaskContext from "../context/TaskContext";

export default function NewTask() {
  const { setTasks, categories, setCategories } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  const [selectCategory, setSelectCategory] = useState("work");
  const [successPopup, setSuccessPopup] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newCategoryPopup, setNewCategoryPopup] = useState(false);

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

  function handleCreateCategory() {
    const trimmedCategory = newCategory.trim();
    if (!trimmedCategory) {
      alert("Category name cannot be empty");
      return;
    }

    if (
      categories.some(
        (item) => item.toLowerCase() === trimmedCategory.toLowerCase(),
      )
    ) {
      alert("Category exists");
      return;
    }

    setCategories((prevCategories) => [...prevCategories, trimmedCategory]);
    setNewCategory("");
    setNewCategoryPopup(false);
  }

  useEffect(() => {
    const shouldLockScroll = showCalendar || successPopup;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showCalendar, successPopup]);

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

  const categoryIcons = {
    work: BriefcaseBusiness,
    personal: UserRound,
    shopping: ShoppingCart,
  };

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
              {taskDate
                ? taskDate.toLocaleDateString("en-IN")
                : "Select a date"}
            </p>
          </div>
          <div className="ml-auto flex items-center">
            {taskDate && (
              <p className="text-[12px] font-semibold rounded-xl bg-[#D8E2FF] px-3 py-1 leading-4 text-[#0058BE]">
                {getDateLabel(taskDate)}
              </p>
            )}

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
            {categories.map((item, id) => {
              const Icon = categoryIcons[item.toLowerCase()] || Tag;
              return (
                <li
                  key={id}
                  className={`${selectCategory === item ? "bg-[#0058BE] text-white " : "bg-[#F8F9FF] text-[#424754] "} inline-flex items-center  border border-[#C2C6D6] px-5 py-3 text-[12px] font-semibold rounded-lg leading-4 capitalize `}
                  onClick={() => setSelectCategory(item)}
                >
                  <Icon className="mr-1.5" size={20} /> {item}
                </li>
              );
            })}
            <li
              className="text-[12px] leading-4 text-[#727785] border-dashed border rounded-lg border-[#C2C6D6] px-5 py-3 inline-flex items-center font-semibold "
              onClick={() => setNewCategoryPopup(true)}
            >
              <Plus className="mr-1.5" size={20} />
              New
            </li>
          </ul>
        </div>
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

      {/* Success Popup */}

      {successPopup && (
        <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8  ">
          <div className="bg-white px-8 p-5 rounded-xl relative ">
            <Link to="/">
              <X className="absolute top-2 right-2" size={15} />
            </Link>
            <h2 className="text-[20px] font-semibold mx-auto mb-5 leading-7 text-[#121C2A]">
              Task Created
            </h2>
            <BadgeCheck className="mx-auto text-emerald-600" size={50} />
          </div>
        </div>
      )}

      {/* New Category Popup */}

      {newCategoryPopup && (
        <div className="fixed bg-black/40 inset-0 flex items-center justify-center px-8  ">
          <div className="bg-white px-8 p-5 rounded-xl relative ">
            <button onClick={() => setNewCategoryPopup(false)}>
              <X className="absolute top-2 right-2" size={15} />
            </button>
            <input
              className="mb-5 border border-black p-2 focus-visible:outline-0 text-[12px] "
              type="text"
              placeholder="Enter new category"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
            />
            <div className="flex justify-center">
              <button
                className=" px-3 py-2.5 bg-[#0058BE] text-white text-[12px] rounded-xl "
                onClick={handleCreateCategory}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
