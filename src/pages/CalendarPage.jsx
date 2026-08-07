import Navbar from "../components/Navbar";

export default function CalendarPage() {
  return (
    <>
      <section className="px-5 pt-4 pb-[72px] bg-[#F8F9FF] ">
        <h1>Calendar</h1>
      </section>
      <section className="fixed w-full bottom-0">
        <Navbar />
      </section>
    </>
  );
}
