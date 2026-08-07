import Navbar from "../components/Navbar";

export default function SettingsPage() {
  return (
    <>
      <section className="px-5 pt-4 pb-[72px] bg-[#F8F9FF] ">
        <h1>Settings</h1>
      </section>
      <section className="fixed w-full bottom-0">
        <Navbar />
      </section>
    </>
  );
}
