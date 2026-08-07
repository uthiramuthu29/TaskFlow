import { Menu, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <>
      <div className="header flex justify-between">
      <Link><Menu /></Link>
        <div>
          <h1 className="text-[20px] font-bold leading-7 text-[#0058BE] ">TaskFlow</h1>
          <p className="text-[14px] leading-5 text-[#424754] ">Today, Oct 24</p>
        </div>
        <CircleUserRound color="#0058BE" />
      </div>
    </>
  );
}
