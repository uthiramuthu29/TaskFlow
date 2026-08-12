import { CircleCheckBig, CalendarDays, Settings } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {

  return (
    <nav className="bg-white px-10 py-4 rounded-lg">
      <ul className="flex justify-between">
        <NavLink to='/'
          className={({ isActive }) => `${isActive ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
        >
          <CircleCheckBig />
          Tasks
        </NavLink>
        <NavLink to='/calendar'
          className={({ isActive }) => `${isActive ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
        >
          <CalendarDays />
          Calendar
        </NavLink>
        <NavLink to='/settings'
          className={({ isActive }) => `${isActive ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
        >
          <Settings />
          Settings
        </NavLink>
      </ul>
    </nav>
  );
}
