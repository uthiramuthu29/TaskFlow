import { CalendarDays, ChevronRight } from "lucide-react";

export default function TaskDatePicker({ setShowCalendar, taskDate }){

  

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