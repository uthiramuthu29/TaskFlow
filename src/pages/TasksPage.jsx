import Header from "../components/Header.jsx";
import Progress from "../components/Progress.jsx";
import Tasks from "../components/Tasks.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router";

export default function TasksPage() {
  return (
    <>
      <section className="px-5 pt-4 bg-[#F8F9FF] h-screen ">
        <Header />
        <Progress />
        <Tasks />
      </section>
      <section className="fixed w-full bottom-0">
        <Navbar />
      </section>
      <section>
        <Link to='/new-task' className="bg-[#0058BE] text-white text-[25px] fixed bottom-24 right-8 flex justify-center items-center rounded-full w-[56px] h-[56px] ">+</Link>
      </section>
    </>
  );
}
