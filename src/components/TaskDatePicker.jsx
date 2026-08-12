import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { CalendarDays, ChevronRight } from "lucide-react";

export default function TaskDatePicker(){

    const { setShowCalendar, taskDate, getDateLabel } = useContext(TaskContext);

    return(
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
    )
}