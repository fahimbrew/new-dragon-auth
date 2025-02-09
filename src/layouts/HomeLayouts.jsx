import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header />
        <Latest />
        <Navbar />
      </header>
      <main className="grid md:grid-cols-12 grid-cols-1 w-11/12 mx-auto gap-5">
        <aside className="md:col-span-3">
          <LeftNavbar />
        </aside>
        <section className="md:col-span-6">
          <Outlet />
        </section>
        <aside className="md:col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
