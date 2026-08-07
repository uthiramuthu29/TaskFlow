import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export default function Progress() {

  const { tasks, completedTasks } = useContext(TaskContext);
  const percentageOfCompletion = tasks.length === 0 ? 0 : Math.round((completedTasks.length / tasks.length) * 100);
  const progressMessage =
  percentageOfCompletion >= 100
    ? "Amazing! You've completed everything. 🎉"
    : percentageOfCompletion >= 80
    ? "Almost there! Just a little more to finish strong. 🔥"
    : percentageOfCompletion >= 60
    ? "You're more than halfway there! Keep pushing. 🚀"
    : percentageOfCompletion >= 40
    ? "Nice progress! You're building a solid streak. 💪"
    : percentageOfCompletion >= 20
    ? "You're getting started! Keep the momentum going. 🌱"
    : "Let's get started! You've got this. 💪";

  return (
    <div className="progress bg-white rounded-xl p-4 mt-2 mb-8 ">
      <div className="flex justify-between items-end">
        <div className="">
          <h2 className="text-[#121C2A] text-[20px] font-semibold leading-7  ">Daily Progress</h2>
          <p className="text-[14px] leading-5 text-[#424754]">{completedTasks.length} of {tasks.length} tasks completed</p>
        </div>
        <h3 className="text-[24px] font-bold leading-8 text-[#0058BE]">{percentageOfCompletion}%</h3>
      </div>
      <progress className="progress-bar" value={percentageOfCompletion} max="100"></progress>
      <p className="text-[14px] leading-5 text-[#424754]"><em>{progressMessage}</em></p>
    </div>
  );
}
