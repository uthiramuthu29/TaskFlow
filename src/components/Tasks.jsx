import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { Clock, CheckCheck } from "lucide-react";

export default function Tasks() {
  const { upcomingTasks, completedTasks, setTasks } = useContext(TaskContext);



  return (
    <>
      <div className="upcoming-tasks">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-[12px] font-semibold leading-4 text-[#424754] uppercase">
            Upcoming
          </h4>
        </div>
        <ul>
          {upcomingTasks.length === 0 ? (
            <li className="text-[10px] opacity-80 text-center font-semibold leading-3 text-[#424754] mb-4">
              No tasks left
            </li>
          ) : (
            upcomingTasks.map((task) => (
              <li
                key={task.id}
                className="flex bg-white p-4 gap-3 items-center rounded-lg mb-4 "
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 border-[#C2C6D6] "
                  onChange={() => {
                    setTasks((prevTasks) =>
                      prevTasks.map((item) =>
                        item.id === task.id
                          ? { ...item, completed: true }
                          : item,
                      ),
                    );
                  }}
                />
                <div className="">
                  <h5 className="text-[16px] font-medium leading-5 text-[#121C2A] mb-1">
                    {task.title}
                  </h5>
                  <p className="text-[14px] leading-5 text-[#424754] flex items-center gap-1">
                    <Clock size={13} />
                    {new Date(task.dueDate).toLocaleDateString()}
                    <span className="bg-[#E6EEFF] text-[#424754] text-[12px] leading-4 font-semibold px-2 py-0.5 ml-1 rounded-lg capitalize">
                      {task.selectCategory}
                    </span>
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="completed-tasks">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-[12px] font-semibold leading-4 text-[#424754] uppercase">
            Completed
          </h4>
          <button onClick={()=>setTasks([])} className="text-[12px] font-semibold leading-4 text-[#0058BE] ">
            Clear All
          </button>
        </div>

        <ul>
          {completedTasks.length === 0 ? (
            <p className="text-[10px] opacity-80 text-center font-semibold leading-3 text-[#424754] mb-4">Complete your tasks</p>
          ) : (
            completedTasks.map((task) => (
              <li
                key={task.id}
                className="flex bg-[rgba(111,251,190,0.2)] border-[rgba(0,108,73,0.1)] border p-4 gap-3 items-center rounded-lg mb-4 "
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 border-[#C2C6D6] "
                  checked={task.completed}
                  readOnly
                />
                <div className="opacity-70">
                  <h5 className="text-[16px] font-medium leading-5 text-[#121C2A] mb-1">
                    <s>{task.title}</s>
                  </h5>
                  <p className="text-[14px] leading-5 text-[#424754] flex items-center gap-1">
                    <CheckCheck size={13} />
                    Completed at {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))
          )
          }
        </ul>
      </div>
    </>
  );
}
