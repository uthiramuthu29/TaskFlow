import { useState } from "react";
import { CircleCheckBig, CalendarDays, Settings } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [active, setActive] = useState('tasks');

  return (
    <nav className="bg-white px-10 py-4 rounded-lg">
      <ul className="flex justify-between">
        <NavLink to='/'
          className={`${active === 'tasks' ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
          onClick={()=> setActive('tasks')}
        >
          <CircleCheckBig />
          Tasks
        </NavLink>
        <NavLink to='calendar'
          className={`${active === 'calendar' ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
          onClick={()=> setActive('calendar')}
        >
          <CalendarDays />
          Calendar
        </NavLink>
        <NavLink to='/settings'
          className={`${active === 'settings' ? "text-[#2170E4]" : "text-[#424754]"} text-[12px] leading-4 font-semibold flex flex-col items-center`}
          onClick={()=> setActive('settings')}
        >
          <Settings />
          Settings
        </NavLink>
      </ul>
    </nav>
  );
}
